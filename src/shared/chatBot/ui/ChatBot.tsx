import { memo, useCallback, useRef } from 'react';
import { ChatBotFab } from './chatBotFab/ChatBotFab';
import { CSSTransition } from 'react-transition-group';
import { ChatBotLayout } from './chatBotLayout/ChatBotLayout';
import { useChatBotStore } from '../model/store';
import { useMount } from '@shared/hooks/useMount';
import { useTrackGAEvent } from '@shared/analytics';
import s from './chatBot.module.css';

export const ChatBot = memo(() => {
  const chatBotLayoutRef = useRef<HTMLDivElement>(null);
  const isOpen = useChatBotStore((s) => s.isOpen);
  const setIsOpen = useChatBotStore((s) => s.setIsOpen);
  const fetchHistory = useChatBotStore((s) => s.fetchHistory);

  const trackOpen = useTrackGAEvent('chat_bot_fab_click');

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    trackOpen();
  }, [setIsOpen, trackOpen]);

  useMount(() => {
    fetchHistory();
  });

  return (
    <>
      <CSSTransition
        in={isOpen}
        nodeRef={chatBotLayoutRef}
        timeout={parseInt(s.timeout)}
        classNames={s}
        unmountOnExit
      >
        <ChatBotLayout ref={chatBotLayoutRef} />
      </CSSTransition>

      {!isOpen && <ChatBotFab onClick={handleOpen} />}
    </>
  );
});
ChatBot.displayName = 'ChatBot';
