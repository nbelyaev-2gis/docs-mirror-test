import { memo } from 'react';
import { Button } from '@shared/uiKit/Button';
import { cn } from '@shared/utils';
import s from './chatBotFeedbackButton.module.css';

type Props = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

export const ChatBotFeedbackButton = memo<Props>(({ text, isActive, onClick }) => {
  return (
    <Button
      appearance="transparent"
      type="button"
      size={32}
      onClick={onClick}
      className={cn(s.button, isActive && s.active)}
    >
      {text}
    </Button>
  );
});
ChatBotFeedbackButton.displayName = 'ChatBotFeedbackButton';
