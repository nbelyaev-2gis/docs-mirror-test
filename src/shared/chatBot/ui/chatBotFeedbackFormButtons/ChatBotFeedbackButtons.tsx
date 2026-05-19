import { memo, useMemo } from 'react';
import { ChatBotFeedbackButton } from '../chatBotFeedbackButton/ChatBotFeedbackButton';
import { feedbackItems } from '../../model/feedback';
import { ScoreFeedback } from '../../types/api';
import s from './chatBotFeedbackFormButtons.module.css';

type Props = {
  value: ScoreFeedback[];
  onClick: (value: ScoreFeedback) => void;
};

export const ChatBotFeedbackFormButtons = memo<Props>(({ value, onClick }) => {
  const onClickHandlers = useMemo(() => {
    return Object.fromEntries(feedbackItems.map(({ type }) => [type, () => onClick(type)]));
  }, [onClick]);

  return (
    <div className={s.wrapper}>
      {feedbackItems.map(({ text, type }, idx) => (
        <ChatBotFeedbackButton
          key={idx}
          text={text}
          isActive={value.includes(type)}
          onClick={onClickHandlers[type]}
        />
      ))}
    </div>
  );
});
ChatBotFeedbackFormButtons.displayName = 'ChatBotFeedbackFormButtons';
