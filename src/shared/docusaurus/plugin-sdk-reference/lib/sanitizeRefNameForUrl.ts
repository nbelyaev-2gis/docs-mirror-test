export const sanitizeRefNameForUrl = (name: string): string => {
  return name
    .replace(/[^a-zA-Z0-9.]/g, '-')
    .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase to kebab-case
    .toLowerCase();
};
