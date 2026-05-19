import { useState, useCallback, useEffect, useRef } from 'react';
import { useLocation } from '@docusaurus/router';
import type { PlatformKey } from '@config/hooks/useNavMenuData';

const HOVER_CLOSE_DELAY = 200;

export function useDropdownControl() {
  const [activePlatform, setActivePlatform] = useState<PlatformKey | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const handlePlatformHover = useCallback(
    (key: PlatformKey) => {
      cancelCloseTimer();
      setActivePlatform(key);
    },
    [cancelCloseTimer],
  );

  const handleLeave = useCallback(() => {
    cancelCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setActivePlatform(null);
    }, HOVER_CLOSE_DELAY);
  }, [cancelCloseTimer]);

  const handleDropdownEnter = useCallback(() => {
    cancelCloseTimer();
  }, [cancelCloseTimer]);

  const handleDropdownClose = useCallback(() => {
    cancelCloseTimer();
    setActivePlatform(null);
  }, [cancelCloseTimer]);

  const handlePlatformClick = useCallback(
    (key: PlatformKey) => {
      if (key === activePlatform) {
        handleDropdownClose();
      } else {
        setActivePlatform(key);
      }
    },
    [activePlatform, handleDropdownClose],
  );

  const location = useLocation();
  useEffect(() => {
    handleDropdownClose();
  }, [handleDropdownClose, location.pathname]);

  useEffect(() => {
    return () => cancelCloseTimer();
  }, [cancelCloseTimer]);

  return {
    activePlatform,
    handlePlatformHover,
    handleLeave,
    handleDropdownEnter,
    handlePlatformClick,
    handleDropdownClose,
  };
}
