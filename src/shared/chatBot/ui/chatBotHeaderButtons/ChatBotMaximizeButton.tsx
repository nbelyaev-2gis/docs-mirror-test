import { memo, useCallback } from 'react';
import { ChatBotIconButton } from '../chatBotIconButton/ChatBotIconButton';
import { useChatBotStore } from '../../model/store';
import { useTrackGAEvent } from '@shared/analytics';
import s from './chatBotHeaderMaximizeButton.module.css';

export const ChatBotMaximizeButton = memo(() => {
  const isMaximized = useChatBotStore((s) => s.isMaximized);
  const toggleIsMaximized = useChatBotStore((s) => s.toggleIsMaximized);

  const trackClick = useTrackGAEvent(
    isMaximized ? 'chat_bot_minimize_click' : 'chat_bot_maximize_click',
  );

  const handleMaximize = useCallback(() => {
    toggleIsMaximized();
    trackClick();
  }, [toggleIsMaximized, trackClick]);

  return (
    <ChatBotIconButton
      className={s.maximizeButton}
      onClick={handleMaximize}
      icon={isMaximized ? 'minimize' : 'maximize'}
    />
  );
});
ChatBotMaximizeButton.displayName = 'ChatBotMaximizeButton';
