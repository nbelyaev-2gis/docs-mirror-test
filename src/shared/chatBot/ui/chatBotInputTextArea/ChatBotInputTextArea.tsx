import { memo, useRef, useCallback, KeyboardEvent, ChangeEvent } from 'react';
import { translate } from '@docusaurus/Translate';
import { useAutoResizeTextArea } from '../../lib/useAutoResizeTextArea';
import { MAX_USER_MESSAGE_LENGTH } from '../../model/constants';
import { ChatBotBaseTextarea } from '../chatBotBaseTextarea/ChatBotBaseTextarea';
import s from './chatBotInputTextArea.module.css';

type Props = {
  value: string;
  onChange: (text: string) => void;
  onEnter: () => void;
};

export const ChatBotInputTextArea = memo<Props>(({ value, onChange, onEnter }) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useAutoResizeTextArea({ ref, maxRows: 8, value });

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        onEnter();
      }
    },
    [onEnter],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = e.target;
      onChange(value);
    },
    [onChange],
  );

  return (
    <ChatBotBaseTextarea
      ref={ref}
      className={s.textarea}
      placeholder={translate({ message: 'Задайте вопрос...' })}
      onKeyDown={handleKeyDown}
      value={value}
      onChange={handleChange}
      name="chat-bot-input"
      rows={1}
      maxLength={MAX_USER_MESSAGE_LENGTH}
    />
  );
});
ChatBotInputTextArea.displayName = 'ChatBotInputTextArea';
