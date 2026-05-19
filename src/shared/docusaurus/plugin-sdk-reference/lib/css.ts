export function css(...args: Array<string | false | undefined>) {
  return args.filter((a) => !!a).join(' ');
}
