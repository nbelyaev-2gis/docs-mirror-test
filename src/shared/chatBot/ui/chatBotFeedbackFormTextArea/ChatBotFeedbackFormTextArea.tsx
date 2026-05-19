import { memo, useCallback, ChangeEvent } from 'react';
import { translate } from '@docusaurus/Translate';
import { MAX_FEEDBACK_COMMENT_LENGTH } from '../../model/constants';
import { ChatBotBaseTextarea } from '../chatBotBaseTextarea/ChatBotBaseTextarea';
import s from './chatBotFeedbackFormTextArea.module.css';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const ChatBotFeedbackFormTextArea = memo<Props>(({ value, onChange }) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <div className={s.wrapper}>
      <ChatBotBaseTextarea
        value={value}
        onChange={handleChange}
        className={s.textarea}
        placeholder={translate({ message: 'Сообщение...' })}
        maxLength={MAX_FEEDBACK_COMMENT_LENGTH}
        name="chat-bot-feedback-input"
        autoComplete="off"
      />
    </div>
  );
});
ChatBotFeedbackFormTextArea.displayName = 'ChatBotFeedbackFormTextArea';
