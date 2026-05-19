export const getMutatedUrlHash = (hash: string, { patterns }: { patterns: string[] }) => {
  if (!hash || !hash.startsWith('#')) {
    return hash;
  }

  let result = hash.slice(1);

  for (const pattern of patterns) {
    if (result.startsWith(pattern)) {
      result = result.replace(pattern, '');
    }
  }

  result = result.replace(/_/g, '-');

  result = result.toLowerCase();

  return result;
};
