import { memo, useCallback } from 'react';
import s from './DownloadButton.module.css';
import { saveToJsonFile } from '../../lib/saveToJsonFile';
import { useOpenapiJson } from '../../model/useOpenapiJson';
import Translate from '@docusaurus/Translate';
import { Button } from '@uiKit/Button';

type Props = {
  id: string;
};

export const DownloadButton = memo<Props>(({ id }) => {
  const openapi = useOpenapiJson(id);

  const handleDownloadClick = useCallback(() => {
    if (!openapi?.spec) {
      return;
    }

    try {
      saveToJsonFile(JSON.stringify(openapi.spec, null, 2), id);
    } catch (error) {
      console.error('Failed to save JSON file:', error);
    }
  }, [openapi]);

  return (
    <div>
      <div className={s.block}>
        <span className={s.text}>
          <Translate>Спецификация OpenAPI</Translate>
        </span>
        <Button onClick={handleDownloadClick} size={32} appearance={'outline'}>
          <Translate>Скачать</Translate>
        </Button>
      </div>
    </div>
  );
});
DownloadButton.displayName = 'DownloadButton';
