// Мэтчит <Brand /> и <Brand></Brand>
const re = /<Brand\s*(?:\/>|><\/Brand>)/g;

export const replaceBrandVar = (text: string, replacement: string) => {
  return text.replace(re, replacement);
};
