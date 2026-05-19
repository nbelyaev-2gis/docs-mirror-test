import React, { useCallback, useMemo } from 'react';
import { cn } from '@shared/utils';
import { Code } from '@shared/uiKit/Code';
import { Button } from '@shared/uiKit/Button';
import { SandboxBtn } from '../SandboxBtn';
import s from './SrcCode.module.css';
import { Icon } from '@shared/icons';
import { translate } from '@docusaurus/Translate';

type Props = {
  html: string;
  className?: string;
  codeClassname?: string;
};

const appendDoctype = (html: string) => {
  if (!html) return html;
  const doctype = '<!DOCTYPE html>';
  if (html.includes(doctype)) {
    return html;
  }

  return `${doctype}` + html;
};

export const SrcCode = React.memo(({ html: htmlProp, className, codeClassname }: Props) => {
  const html = useMemo(() => {
    return appendDoctype(htmlProp);
  }, [htmlProp]);
  const copiedText = translate({ message: 'Исходный код был скопирован в буфер обмена' });
  const copyFailedText = translate({ message: 'Буфер обмена недоступен!' });

  const copyToClipboard = useCallback(async () => {
    if (!html) {
      return;
    }

    try {
      await navigator.clipboard.writeText(html);
      alert(copiedText);
    } catch {
      alert(copyFailedText);
    }
  }, [html]);

  return (
    <div className={cn(s.wrapper, className)}>
      <div className={s.controls}>
        {html && (
          <div className={s.controlsItem}>
            <SandboxBtn type="codepen" html={html} className={s.controlItem} />
          </div>
        )}
        <div className={s.controlsItem}>
          <Button
            title={translate({ message: 'Копировать в буфер обмена' })}
            onClick={copyToClipboard}
            size={32}
            appearance="outline"
            startIcon={<Icon name="copy" size={24} />}
            className={s.controlItem}
          />
        </div>
      </div>
      <Code codeString={html} lang="html" isFullWidth className={codeClassname} />
    </div>
  );
});
SrcCode.displayName = 'SrcCode';
