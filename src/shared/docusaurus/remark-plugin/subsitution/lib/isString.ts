export const isString = <T = any>(str: string | T): str is string => {
  return typeof str === 'string';
};
