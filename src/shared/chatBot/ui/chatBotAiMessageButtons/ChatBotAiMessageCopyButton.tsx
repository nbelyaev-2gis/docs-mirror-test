import { memo, useCallback } from 'react';
import { translate } from '@docusaurus/Translate';
import { useTrackGAEvent } from '@shared/analytics';
import { useChatBotToast } from '../chatBotToast';
import { ChatBotIconButton } from '../chatBotIconButton/ChatBotIconButton';

type Props = {
  text: string;
};

export const ChatBotAiMessageCopyButton = memo<Props>(({ text }) => {
  const toast = useChatBotToast();

  const trackCopy = useTrackGAEvent('chat_bot_copy_answer_click');

  const handleCopy = useCallback(() => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({ text: translate({ message: 'Скопировано' }) });
      })
      .catch(() => {
        toast({ text: translate({ message: 'Ошибка копирования' }) });
      });

    trackCopy();
  }, [toast, text, trackCopy]);

  return <ChatBotIconButton icon="copy" onClick={handleCopy} />;
});
ChatBotAiMessageCopyButton.displayName = 'ChatBotAiMessageCopyButton';
