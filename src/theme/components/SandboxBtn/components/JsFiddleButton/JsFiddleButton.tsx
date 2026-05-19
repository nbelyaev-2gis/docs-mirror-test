import React, { memo } from 'react';
import { Button } from '@shared/uiKit/LegacyButton';
import { insertSandboxDataIntoJs, decomposeHtml } from '@shared/utils';

export interface Props {
  /** Готовый html к работе, без шаблонизации */
  html: string;
  className?: string;
  onClick?: () => void;
}

export const JsFiddleButton = memo<Props>(({ html: originHtml, className, onClick }) => {
  const decomposedHtml = decomposeHtml(originHtml);
  // @ts-expect-error @todo GEFEST-2002
  decomposedHtml.js = insertSandboxDataIntoJs(
    decomposedHtml.js,
    `\
// API key can be used on jsfiddle.net only!
// You can get more info on https://docs.2gis.com/`,
  );

  const { title, description, html, js, css } = decomposedHtml;

  return (
    <form method="POST" action="https://jsfiddle.net/api/post/library/pure/" target="_blank">
      <Button
        style={{ height: '40px', paddingTop: 0, paddingBottom: 0 }}
        className={className}
        onClick={onClick}
      >
        Edit in JSFiddle
      </Button>
      <input type="text" value={title || '2GIS'} name="title" hidden readOnly />
      {description && <input type="text" value={description} name="description" hidden readOnly />}
      {html && <textarea hidden name="html" value={html} readOnly />}
      {js && <textarea hidden name="js" value={js} readOnly />}
      {css && <textarea hidden name="css" value={css} readOnly />}
    </form>
  );
});
JsFiddleButton.displayName = 'JsFiddleButton';
