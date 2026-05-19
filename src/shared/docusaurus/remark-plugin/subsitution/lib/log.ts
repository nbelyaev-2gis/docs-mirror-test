export const log = (_: string) => {
  if (process.env.NODE_ENV === 'development') {
    // не удалять, полезно для дебага
    // console.log(`[Substitution Plugin] ${msg}`);
  }
};
