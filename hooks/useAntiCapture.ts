import { useEffect, useCallback } from 'react';

interface UseAntiCaptureOptions {
  enableRightClickBlock?: boolean;
  enableTextSelection?: boolean;
  enableDevToolsBlock?: boolean;
  enablePrintScreen?: boolean;
  enableDragDrop?: boolean;
  enableCopyPaste?: boolean;
}

interface UseAntiCaptureReturn {
  blockRightClick: () => void;
  allowRightClick: () => void;
  blockTextSelection: () => void;
  allowTextSelection: () => void;
  blockDevTools: () => void;
  allowDevTools: () => void;
}

export const useAntiCapture = (options: UseAntiCaptureOptions = {}): UseAntiCaptureReturn => {
  const {
    enableRightClickBlock = true,
    enableTextSelection = false,
    enableDevToolsBlock = true,
    enablePrintScreen = true,
    enableDragDrop = false,
    enableCopyPaste = false,
  } = options;

  // Blokir klik kanan
  const handleContextMenu = useCallback((e: Event) => {
    e.preventDefault();
    return false;
  }, []);

  // Blokir selection text
  const handleSelectStart = useCallback((e: Event) => {
    e.preventDefault();
    return false;
  }, []);

  // Blokir drag and drop
  const handleDragStart = useCallback((e: Event) => {
    e.preventDefault();
    return false;
  }, []);

  // Blokir keyboard shortcuts
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Block F12 (DevTools)
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }

    // Block Ctrl+Shift+I (DevTools)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      e.preventDefault();
      return false;
    }

    // Block Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
      e.preventDefault();
      return false;
    }

    // Block Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
      e.preventDefault();
      return false;
    }

    // Block Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode === 85) {
      e.preventDefault();
      return false;
    }

    // Block Ctrl+S (Save As)
    if (e.ctrlKey && e.keyCode === 83) {
      e.preventDefault();
      return false;
    }

    // Block Print Screen
    if (enablePrintScreen && e.keyCode === 44) {
      e.preventDefault();
      return false;
    }

    // Block Ctrl+P (Print)
    if (e.ctrlKey && e.keyCode === 80) {
      e.preventDefault();
      return false;
    }

    // Block Ctrl+C (Copy) if enabled
    if (enableCopyPaste && e.ctrlKey && e.keyCode === 67) {
      e.preventDefault();
      return false;
    }

    // Block Ctrl+A (Select All) if text selection is disabled
    if (!enableTextSelection && e.ctrlKey && e.keyCode === 65) {
      e.preventDefault();
      return false;
    }

    return true;
  }, [enablePrintScreen, enableCopyPaste, enableTextSelection]);

  // Function to block right click
  const blockRightClick = useCallback(() => {
    document.addEventListener('contextmenu', handleContextMenu);
  }, [handleContextMenu]);

  // Function to allow right click
  const allowRightClick = useCallback(() => {
    document.removeEventListener('contextmenu', handleContextMenu);
  }, [handleContextMenu]);

  // Function to block text selection
  const blockTextSelection = useCallback(() => {
    document.addEventListener('selectstart', handleSelectStart);
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    (document.body.style as any).mozUserSelect = 'none';
    (document.body.style as any).msUserSelect = 'none';
  }, [handleSelectStart]);

  // Function to allow text selection
  const allowTextSelection = useCallback(() => {
    document.removeEventListener('selectstart', handleSelectStart);
    document.body.style.userSelect = 'auto';
    document.body.style.webkitUserSelect = 'auto';
    (document.body.style as any).mozUserSelect = 'auto';
    (document.body.style as any).msUserSelect = 'auto';
  }, [handleSelectStart]);

  // Function to block dev tools
  const blockDevTools = useCallback(() => {
    document.addEventListener('keydown', handleKeyDown);
    
    // Disable drag and drop if enabled
    if (enableDragDrop) {
      document.addEventListener('dragstart', handleDragStart);
    }

    // Additional DevTools detection
    let devtools = {
      open: false,
      orientation: null as string | null
    };

    const threshold = 160;

    setInterval(() => {
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
          devtools.open = true;
          console.clear();
          console.log('%cStop!', 'color: red; font-size: 50px; font-weight: bold;');
          console.log('%cThis is a browser feature intended for developers. Content is protected.', 'color: red; font-size: 16px;');
        }
      } else {
        devtools.open = false;
      }
    }, 500);
  }, [handleKeyDown, handleDragStart, enableDragDrop]);

  // Function to allow dev tools
  const allowDevTools = useCallback(() => {
    document.removeEventListener('keydown', handleKeyDown);
    if (enableDragDrop) {
      document.removeEventListener('dragstart', handleDragStart);
    }
  }, [handleKeyDown, handleDragStart, enableDragDrop]);

  // Setup event listeners based on options
  useEffect(() => {
    if (enableRightClickBlock) {
      blockRightClick();
    }

    if (!enableTextSelection) {
      blockTextSelection();
    }

    if (enableDevToolsBlock) {
      blockDevTools();
    }

    // Cleanup function
    return () => {
      allowRightClick();
      allowTextSelection();
      allowDevTools();
    };
  }, [
    enableRightClickBlock,
    enableTextSelection,
    enableDevToolsBlock,
    blockRightClick,
    blockTextSelection,
    blockDevTools,
    allowRightClick,
    allowTextSelection,
    allowDevTools,
  ]);

  return {
    blockRightClick,
    allowRightClick,
    blockTextSelection,
    allowTextSelection,
    blockDevTools,
    allowDevTools,
  };
};