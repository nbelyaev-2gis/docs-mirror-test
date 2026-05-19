import { memo } from 'react';
import { Button } from '@shared/uiKit/Button';
import s from './chatBotQuickQuestion.module.css';

type Props = {
  text: string;
  onClick: () => void;
};

export const ChatBotQuickQuestion = memo<Props>(({ text, onClick }) => {
  return (
    <Button appearance="transparent" size={32} onClick={onClick} className={s.button}>
      {text}
    </Button>
  );
});
ChatBotQuickQuestion.displayName = 'ChatBotQuickQuestion';
