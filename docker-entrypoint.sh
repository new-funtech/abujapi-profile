#!/bin/sh
set -eu

PORT="${NEXT_PORT:-3000}" HOSTNAME="${HOSTNAME:-127.0.0.1}" node server.js &
next_pid="$!"

trap 'kill "$next_pid" 2>/dev/null || true' INT TERM EXIT

nginx -g 'daemon off;' &
nginx_pid="$!"

wait "$nginx_pid"
