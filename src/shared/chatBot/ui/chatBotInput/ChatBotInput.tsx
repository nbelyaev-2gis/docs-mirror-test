import { memo, useState, RefObject, useCallback } from 'react';
import { ChatBotInputTextArea } from '../chatBotInputTextArea/ChatBotInputTextArea';
import { ChatBotSendMessageButton } from '../chatBotSendMessageButton/ChatBotSendMessageButton';
import { ChatBotQuickQuestionsContainer } from '../chatBotQuickQuestionsContainer/ChatBotQuickQuestionsContainer';
import { useChatBotStore } from '../../model/store';
import { ChatBotFeedbackForm } from '../chatBotFeedbackForm/ChatBotFeedbackForm';
import { ChatBotDisclaimer } from '../chatBotDisclaimer/ChatBotDisclaimer';
import { useTrackGAEvent } from '@shared/analytics';
import s from './chatBotInput.module.css';

type Props = {
  toastContainerRef: RefObject<HTMLDivElement | null>;
};

export const ChatBotInput = memo<Props>(({ toastContainerRef }) => {
  const messages = useChatBotStore((s) => s.messages);
  const sendMessage = useChatBotStore((s) => s.sendMessage);
  const status = useChatBotStore((s) => s.status.value);

  const trackSendMessage = useTrackGAEvent('chat_bot_send_message');
  const trackQuickQuestionClick = useTrackGAEvent('chat_bot_send_message_quick_question');

  const [message, setMessage] = useState('');

  const trimmedMessage = message.trim();
  const canSendMessage =
    trimmedMessage.length > 0 && status !== 'waitingForResponse' && status !== 'sendError';

  const shouldRenderQuickQuestions = messages.length === 0;

  const handleSendMessage = useCallback(() => {
    if (!canSendMessage) return;

    sendMessage(trimmedMessage);
    setMessage('');

    trackSendMessage();
  }, [canSendMessage, sendMessage, trimmedMessage, trackSendMessage]);

  const handleSendQuickQuestion = useCallback(
    (text: string) => {
      sendMessage(text);
      setMessage('');
      trackQuickQuestionClick();
    },
    [sendMessage, trackQuickQuestionClick],
  );

  return (
    <div className={s.wrapper}>
      {shouldRenderQuickQuestions && (
        <ChatBotQuickQuestionsContainer onClick={handleSendQuickQuestion} />
      )}

      {status === 'feedbackFormOpen' && <ChatBotFeedbackForm />}
      <ChatBotDisclaimer />
      <div className={s.textAreaWrapper}>
        <label className={s.textAreaWithButton}>
          <ChatBotInputTextArea value={message} onChange={setMessage} onEnter={handleSendMessage} />
          <ChatBotSendMessageButton disabled={!canSendMessage} onClick={handleSendMessage} />
        </label>

        <div ref={toastContainerRef} className={s.toastContainer} />
      </div>
    </div>
  );
});
ChatBotInput.displayName = 'ChatBotInput';
