// @ts-expect-error не разобрался, откуда берется пакет
import ApiDocMDX from '@theme/ApiDocMdx';
import { memo } from 'react';
import { DownloadButton } from '../downloadButton/DownloadButton';

type Props = {
  /** ID openapi из общего json всех схем */
  id: string;
  withDownload?: boolean;
  url?: string;
};

export const OpenAPI = memo<Props>(({ id, url, withDownload = false }) => {
  const apiDocMDXProps = url ? { url } : { id };

  return (
    <div>
      {withDownload && <DownloadButton id={id} />}
      <ApiDocMDX {...apiDocMDXProps} />
    </div>
  );
});
OpenAPI.displayName = 'OpenAPI';
