/**
 * Записывает данные из строки в файл с указанным именем и сразу скачивает этот файл
 * @param content Данные для записи в файл
 * @param fileName Имя файла
 */
export const saveToJsonFile = (content: string, fileName: string) => {
  const link = document.createElement('a');
  const file = new Blob([content], { type: 'application/json' });
  link.href = URL.createObjectURL(file);
  const safeFileName = fileName.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.json';
  link.setAttribute('download', safeFileName);
  link.click();
  URL.revokeObjectURL(link.href);
  link.remove();
};
