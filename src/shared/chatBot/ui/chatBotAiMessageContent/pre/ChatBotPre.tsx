import { memo, useMemo, HTMLAttributes } from 'react';
import { ExtraProps } from 'react-markdown';
import { SandboxBtn } from '@theme/components/SandboxBtn';
import { getMarkdownLanguageFromClass } from '@shared/utils';
import { useTrackGAEvent } from '@shared/analytics';
import s from './chatBotPre.module.css';

type Props = HTMLAttributes<HTMLElement> & ExtraProps;

export const ChatBotPre = memo<Props>(({ node, ...rest }) => {
  const trackCodepen = useTrackGAEvent('chat_bot_codepen_click');

  const html = useMemo(() => {
    const child = node?.children?.[0];
    const isCode = child?.type === 'element' && child.tagName === 'code';

    if (!isCode) return;

    const classNameProp = child.properties.className;
    const classes = Array.isArray(classNameProp) ? classNameProp.join(' ') : '';
    const language = getMarkdownLanguageFromClass(classes);

    if (language !== 'html') return;

    return child.children[0].type === 'text' ? child.children[0].value : undefined;
  }, [node]);

  return (
    <>
      {html && (
        <div className={s.sandboxButtonWrapper}>
          <SandboxBtn
            type="codepen"
            html={html}
            className={s.sandboxButton}
            onClick={trackCodepen}
          />
        </div>
      )}

      <pre {...rest} />
    </>
  );
});
ChatBotPre.displayName = 'ChatBotPre';
