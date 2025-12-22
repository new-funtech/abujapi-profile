#!/bin/sh
# Container Health and Security Monitor Script
# Script ini memonitor kesehatan container dan mendeteksi aktivitas mencurigakan

CONTAINER_NAME="${CONTAINER_NAME:-abujapi-profile}"
HEALTH_ENDPOINT="${HEALTH_ENDPOINT:-http://localhost:8547/api/health}"
LOG_FILE="/tmp/container-monitor.log"
ALERT_THRESHOLD_CPU=80  # CPU usage threshold in percentage
ALERT_THRESHOLD_MEM=80  # Memory usage threshold in percentage
CHECK_INTERVAL=30       # Check every 30 seconds

# Colors for output
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

check_container_exists() {
    if ! docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
        log_message "${RED}ERROR: Container ${CONTAINER_NAME} tidak ditemukan${NC}"
        exit 1
    fi
}

check_container_health() {
    HEALTH_STATUS=$(docker inspect --format='{{.State.Health.Status}}' "$CONTAINER_NAME" 2>/dev/null)
    
    if [ "$HEALTH_STATUS" = "unhealthy" ]; then
        log_message "${RED}ALERT: Container ${CONTAINER_NAME} UNHEALTHY - Stopping container${NC}"
        docker stop "$CONTAINER_NAME"
        return 1
    elif [ "$HEALTH_STATUS" = "healthy" ]; then
        log_message "${GREEN}Container ${CONTAINER_NAME} is healthy${NC}"
        return 0
    else
        log_message "${YELLOW}Container ${CONTAINER_NAME} health status: ${HEALTH_STATUS}${NC}"
        return 0
    fi
}

check_resource_usage() {
    # Get CPU and Memory usage
    STATS=$(docker stats "$CONTAINER_NAME" --no-stream --format "{{.CPUPerc}}|{{.MemPerc}}" 2>/dev/null)
    
    if [ -z "$STATS" ]; then
        log_message "${YELLOW}WARNING: Tidak dapat membaca stats container${NC}"
        return 0
    fi
    
    CPU_USAGE=$(echo "$STATS" | cut -d'|' -f1 | sed 's/%//')
    MEM_USAGE=$(echo "$STATS" | cut -d'|' -f2 | sed 's/%//')
    
    # Remove decimal point for comparison
    CPU_INT=$(echo "$CPU_USAGE" | cut -d'.' -f1)
    MEM_INT=$(echo "$MEM_USAGE" | cut -d'.' -f1)
    
    # Check CPU usage
    if [ "$CPU_INT" -ge "$ALERT_THRESHOLD_CPU" ]; then
        log_message "${RED}ALERT: CPU usage tinggi (${CPU_USAGE}%) - Kemungkinan serangan atau bug${NC}"
        log_message "${RED}Stopping container untuk investigasi${NC}"
        docker stop "$CONTAINER_NAME"
        return 1
    fi
    
    # Check Memory usage
    if [ "$MEM_INT" -ge "$ALERT_THRESHOLD_MEM" ]; then
        log_message "${RED}ALERT: Memory usage tinggi (${MEM_USAGE}%) - Kemungkinan memory leak${NC}"
        log_message "${RED}Stopping container untuk investigasi${NC}"
        docker stop "$CONTAINER_NAME"
        return 1
    fi
    
    log_message "Resource usage OK - CPU: ${CPU_USAGE}%, MEM: ${MEM_USAGE}%"
    return 0
}

check_suspicious_processes() {
    # Check for suspicious processes in container
    SUSPICIOUS_PROCS=$(docker exec "$CONTAINER_NAME" ps aux 2>/dev/null | grep -E "(nc|netcat|nmap|perl|python|bash -i|sh -i)" | grep -v grep || true)
    
    if [ -n "$SUSPICIOUS_PROCS" ]; then
        log_message "${RED}ALERT: Proses mencurigakan terdeteksi di container:${NC}"
        echo "$SUSPICIOUS_PROCS" | tee -a "$LOG_FILE"
        log_message "${RED}Stopping container untuk keamanan${NC}"
        docker stop "$CONTAINER_NAME"
        return 1
    fi
    
    return 0
}

check_network_connections() {
    # Check for unusual network connections
    CONN_COUNT=$(docker exec "$CONTAINER_NAME" netstat -tn 2>/dev/null | grep ESTABLISHED | wc -l || echo "0")
    
    if [ "$CONN_COUNT" -gt 100 ]; then
        log_message "${RED}ALERT: Terlalu banyak koneksi network (${CONN_COUNT}) - Kemungkinan DDoS atau abuse${NC}"
        log_message "${RED}Stopping container untuk investigasi${NC}"
        docker stop "$CONTAINER_NAME"
        return 1
    fi
    
    log_message "Network connections: ${CONN_COUNT} (normal)"
    return 0
}

monitor_loop() {
    log_message "${GREEN}Starting container monitor for ${CONTAINER_NAME}${NC}"
    
    while true; do
        check_container_exists || exit 1
        
        # Check if container is running
        IS_RUNNING=$(docker inspect --format='{{.State.Running}}' "$CONTAINER_NAME" 2>/dev/null)
        
        if [ "$IS_RUNNING" != "true" ]; then
            log_message "${YELLOW}Container ${CONTAINER_NAME} tidak berjalan${NC}"
            sleep "$CHECK_INTERVAL"
            continue
        fi
        
        # Run all checks
        check_container_health || exit 1
        check_resource_usage || exit 1
        check_suspicious_processes || exit 1
        check_network_connections || exit 1
        
        log_message "---"
        sleep "$CHECK_INTERVAL"
    done
}

# Main execution
case "${1:-monitor}" in
    monitor)
        monitor_loop
        ;;
    check)
        check_container_exists
        check_container_health
        check_resource_usage
        check_suspicious_processes
        check_network_connections
        ;;
    *)
        echo "Usage: $0 {monitor|check}"
        echo "  monitor - Continuous monitoring (default)"
        echo "  check   - Single check"
        exit 1
        ;;
esac
