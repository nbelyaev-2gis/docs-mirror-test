import { memo, useMemo, useCallback, AnchorHTMLAttributes } from 'react';
import Link from '@docusaurus/Link';
import { ExtraProps } from 'react-markdown';
import { useTrackGAEvent } from '@shared/analytics';
import { useChatBotStore } from '../../../model/store';
import { isSmallDevice } from '../../../lib/isSmallDevice';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & ExtraProps;

export const ChatBotLink = memo<Props>(({ node, href, ...rest }) => {
  const setIsOpen = useChatBotStore((s) => s.setIsOpen);

  const { isInternal, normalizedHref } = useMemo(() => {
    let isInternal = false;
    let normalizedHref = href;

    if (href) {
      try {
        isInternal = new URL(href).origin === window.location.origin;
      } catch {
        /** Бот прислал битую ссылку, ничего не поделать */
      }

      if (isInternal) {
        // Делаем из внутренних ссылок относительные, чтобы работала client side навигация
        normalizedHref = href.replace(window.location.origin, '') || '/';
      }
    }

    return { isInternal, normalizedHref };
  }, [href]);

  const trackClick = useTrackGAEvent(
    isInternal ? 'chat_bot_internal_link_click' : 'chat_bot_external_link_click',
  );

  const handleClick = useCallback(() => {
    // На мобилках чат открыт на весь экран.
    // При client side навигации, переход по ссылке не будет заметен, если чат не закрыть
    if (isInternal && isSmallDevice()) {
      setIsOpen(false);
    }

    trackClick();
  }, [isInternal, setIsOpen, trackClick]);

  return <Link {...rest} href={normalizedHref} onClick={handleClick} />;
});
ChatBotLink.displayName = 'ChatBotLink';
