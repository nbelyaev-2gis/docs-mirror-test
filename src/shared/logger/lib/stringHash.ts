export const stringHash = (str: string): string => {
  let hash = 5381;
  let i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  return String(hash >>> 0);
};
