export const getMarkdownLanguageFromClass = (className: string) => {
  const match = /language-(\w+)/.exec(className);
  return match && match[1];
};
