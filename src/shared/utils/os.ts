export function isMacOS(userAgent: string): boolean {
  return /(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i.test(userAgent);
}

export function isIOS(userAgent: string): boolean {
  return /(iPhone)|(iPad)|(iPod)/i.test(userAgent);
}

export function isWindows(userAgent: string): boolean {
  return /(Win32)|(Win64)|(Windows)|(WinCE)/i.test(userAgent);
}

export function isAndroid(userAgent: string): boolean {
  return /Android/i.test(userAgent);
}

export function isLinux(userAgent: string): boolean {
  return /Linux/i.test(userAgent);
}

export function isChromeOS(userAgent: string): boolean {
  return /CrOS/i.test(userAgent);
}

export function isMobileDevice(userAgent: string): boolean {
  return /(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i.test(userAgent);
}
