export type RagDocument = {
  id: string;
  filename: string;
  source: string;
  title: string;
  created_at: string;
};

type DocumentsResponseObject = {
  job_id: string | null;
  s3_file_key: string | null;
  filename: string;
  status: 'pending' | 'error';
  error: string | null;
};

export type DocumentsResponse = DocumentsResponseObject[];

export type Job = {
  id: string;
  created: string;
  completed: string | null;
  status: 'pending' | 'active' | 'completed' | 'error';
  error: string | null;
  result: string | null;
  filename: string | null;
};

export type RefToUpload = {
  filename: string;
  reference: Blob;
};
