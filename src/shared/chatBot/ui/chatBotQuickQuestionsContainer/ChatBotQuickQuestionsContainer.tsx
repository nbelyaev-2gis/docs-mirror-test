import { memo, useMemo } from 'react';
import { ChatBotQuickQuestion } from '../chatBotQuickQuestion/ChatBotQuickQuestion';
import { quickQuestions } from '../../model/quickQuestions';
import s from './chatBotQuickQuestionsContainer.module.css';

type Props = {
  onClick: (question: string) => void;
};

export const ChatBotQuickQuestionsContainer = memo<Props>(({ onClick }) => {
  const clickHandlers = useMemo(() => {
    return quickQuestions.reduce<Record<string, () => void>>((acc, question) => {
      acc[question] = () => onClick(question);
      return acc;
    }, {});
  }, [onClick]);

  return (
    <div className={s.wrapper}>
      {quickQuestions.map((question) => (
        <ChatBotQuickQuestion key={question} text={question} onClick={clickHandlers[question]} />
      ))}
    </div>
  );
});
ChatBotQuickQuestionsContainer.displayName = 'ChatBotQuickQuestionsContainer';
