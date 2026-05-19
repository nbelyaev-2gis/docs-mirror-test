import { memo } from 'react';
import { Icon } from '@shared/icons';
import { Button } from '@shared/uiKit/Button';
import { IconName24 } from '@shared/icons';
import { cn } from '@shared/utils';
import s from './chatBotIconButton.module.css';

type Props = {
  onClick: () => void;
  icon: IconName24;
  className?: string;
};

export const ChatBotIconButton = memo<Props>(({ onClick, icon, className }) => {
  return (
    <Button
      size={32}
      appearance="transparent"
      className={cn(s.button, className)}
      onClick={onClick}
    >
      <Icon size={24} name={icon} />
    </Button>
  );
});
ChatBotIconButton.displayName = 'ChatBotIconButton';
