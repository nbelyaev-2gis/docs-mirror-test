function getVariable(variable: string) {
  const value = process.env[variable];
  if (!value) {
    throw new Error(`❌ ${variable} не определён`);
  }
  return value;
}

export const RAG_API_URL = getVariable('RAG_API_URL');
export const RAG_COLLECTION_NAME = getVariable('RAG_COLLECTION_NAME');
export const LOCALE = getVariable('LOCALE');
