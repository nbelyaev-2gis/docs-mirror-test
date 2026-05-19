export function formatRefItemName(name: string): string {
  return name.split('.').pop() ?? '';
}
