import React, { memo } from 'react';
import { insertSandboxDataIntoJs, decomposeHtml } from '@shared/utils';
import { Button } from '@uiKit/Button';
import { useEnvConfig } from '@config/hooks';

export interface Props {
  /** Готовый html к работе, без шаблонизации */
  html: string;
  className?: string;
  onClick?: () => void;
}

export const CodepenButton = memo<Props>(({ html: originHtml, className, onClick }) => {
  const { APIKEY_MAPGL, APIKEY_MAPGL_JSFIDDLE, APIKEY_NAVIGATION, APIKEY_PLACES } = useEnvConfig();
  const decomposedHtml = decomposeHtml(originHtml);
  decomposedHtml.js = insertSandboxDataIntoJs(
    {
      mapgl: {
        common: APIKEY_MAPGL,
        jsFiddle: APIKEY_MAPGL_JSFIDDLE,
      },
      navi: APIKEY_NAVIGATION,
      places: APIKEY_PLACES,
    },
    decomposedHtml.js,
    `\
// API key can be used on codepen.io only!
// You can get more info on https://docs.2gis.com/`,
  );

  const {
    title,
    description,
    htmlParts: { head, body },
    js,
    css,
  } = decomposedHtml;

  return (
    <form method="POST" action="https://codepen.io/pen/define" target="_blank">
      <Button size={32} appearance="outline" type="submit" className={className} onClick={onClick}>
        Codepen
      </Button>
      <input
        type="hidden"
        name="data"
        /** @see https://blog.codepen.io/documentation/prefill/ */
        value={JSON.stringify({
          title,
          description,
          head,
          html: body,
          js,
          css,
          js_pre_processor: 'babel',
        })}
      />
    </form>
  );
});
CodepenButton.displayName = 'CodepenButton';
