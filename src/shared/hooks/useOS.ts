import { useState } from 'react';
import useIsomorphicLayoutEffect from '@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect';
import {
  isAndroid,
  isChromeOS,
  isIOS,
  isLinux,
  isMacOS,
  isMobileDevice,
  isWindows,
} from '@shared/utils/os';

export type UseOSReturnValue =
  | 'undetermined'
  | 'macos'
  | 'ios'
  | 'windows'
  | 'android'
  | 'linux'
  | 'chromeos';

function getOsAndIsMobile(): { os: UseOSReturnValue; isMobile: boolean } {
  if (typeof window === 'undefined') {
    return { os: 'undetermined', isMobile: false };
  }

  const { userAgent } = window.navigator;
  const isMobile = isMobileDevice(userAgent);

  if (isIOS(userAgent) || (isMacOS(userAgent) && 'ontouchend' in document)) {
    return { os: 'ios', isMobile };
  }
  if (isMacOS(userAgent)) {
    return { os: 'macos', isMobile };
  }
  if (isWindows(userAgent)) {
    return { os: 'windows', isMobile };
  }
  if (isAndroid(userAgent)) {
    return { os: 'android', isMobile };
  }
  if (isLinux(userAgent)) {
    return { os: 'linux', isMobile };
  }
  if (isChromeOS(userAgent)) {
    return { os: 'chromeos', isMobile };
  }

  return { os: 'undetermined', isMobile };
}

export interface UseOsOptions {
  getValueInEffect: boolean;
}

export function useOs(options: UseOsOptions = { getValueInEffect: true }): {
  os: UseOSReturnValue;
  isMobile: boolean;
} {
  const [value, setValue] = useState(
    options.getValueInEffect
      ? ({ os: 'undetermined', isMobile: false } as const)
      : getOsAndIsMobile(),
  );

  useIsomorphicLayoutEffect(() => {
    if (options.getValueInEffect) {
      setValue(getOsAndIsMobile());
    }
  }, []);

  return value;
}
