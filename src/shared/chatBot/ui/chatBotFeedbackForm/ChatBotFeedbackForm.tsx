import { memo, useState, useCallback } from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import { ChatBotIconButton } from '../chatBotIconButton/ChatBotIconButton';
import { Button } from '@shared/uiKit/Button';
import { ChatBotFeedbackFormTextArea } from '../chatBotFeedbackFormTextArea/ChatBotFeedbackFormTextArea';
import { ChatBotFeedbackFormButtons } from '../chatBotFeedbackFormButtons/ChatBotFeedbackButtons';
import { useChatBotToast } from '../chatBotToast';
import { ScoreFeedback } from '../../types/api';
import { useChatBotStore } from '../../model/store';
import { useTrackGAEvent } from '@shared/analytics';
import s from './chatBotFeedbackForm.module.css';

export const ChatBotFeedbackForm = memo(() => {
  const toast = useChatBotToast();

  const giveFeedback = useChatBotStore((s) => s.giveFeedback);
  const feedbackFormMessageId = useChatBotStore((s) =>
    s.status.value === 'feedbackFormOpen' ? s.status.payload.messageId : undefined,
  );
  const closeFeedbackForm = useChatBotStore((s) => s.closeFeedbackForm);

  const trackSendFeedback = useTrackGAEvent('chat_bot_dislike_feedback_send_click');
  const trackReasonClick = useTrackGAEvent('chat_bot_dislike_reason_click');

  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackButtonsValue, setFeedbackButtonsValue] = useState<ScoreFeedback[]>([]);

  const handleClickFeedbackButton = useCallback(
    (value: ScoreFeedback) => {
      setFeedbackButtonsValue((prev) => {
        if (prev.includes(value)) {
          return prev.filter((item) => item !== value);
        }
        return [...prev, value];
      });
      trackReasonClick();
    },
    [trackReasonClick],
  );

  const trimmedFeedbackText = feedbackText.trim();
  const isSendButtonEnabled = trimmedFeedbackText.length > 0 || feedbackButtonsValue.length > 0;

  const handleCloseWithToast = useCallback(() => {
    toast({ text: translate({ message: 'Спасибо за оценку' }) });
    closeFeedbackForm();
  }, [closeFeedbackForm, toast]);

  const handleSendFeedback = useCallback(() => {
    if (!feedbackFormMessageId) return;

    handleCloseWithToast();
    giveFeedback({
      messageId: feedbackFormMessageId,
      type: 'dislikeComment',
      feedback: feedbackButtonsValue.length > 0 ? feedbackButtonsValue : undefined,
      comment: trimmedFeedbackText || undefined,
    });
    trackSendFeedback();
  }, [
    trimmedFeedbackText,
    feedbackButtonsValue,
    feedbackFormMessageId,
    giveFeedback,
    handleCloseWithToast,
    trackSendFeedback,
  ]);

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <Translate>Расскажите подробнее</Translate>
        <ChatBotIconButton icon="windowControl" onClick={handleCloseWithToast} />
      </div>

      <div className={s.sendWrapper}>
        <ChatBotFeedbackFormButtons
          value={feedbackButtonsValue}
          onClick={handleClickFeedbackButton}
        />
        <ChatBotFeedbackFormTextArea value={feedbackText} onChange={setFeedbackText} />

        <Button
          wide
          size={32}
          appearance={isSendButtonEnabled ? 'primary' : 'outline'}
          className={s.sendButton}
          disabled={!isSendButtonEnabled}
          onClick={handleSendFeedback}
        >
          <Translate>Отправить</Translate>
        </Button>
      </div>
    </div>
  );
});
ChatBotFeedbackForm.displayName = 'ChatBotFeedbackForm';
