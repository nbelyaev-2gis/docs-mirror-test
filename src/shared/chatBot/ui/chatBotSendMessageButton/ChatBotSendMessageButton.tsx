import { memo } from 'react';
import { Icon } from '@shared/icons';
import { Button } from '@shared/uiKit/Button';
import s from './chatBotSendMessageButton.module.css';

type Props = {
  disabled: boolean;
  onClick: () => void;
};

export const ChatBotSendMessageButton = memo<Props>(({ disabled, onClick }) => {
  return (
    <Button
      size={40}
      appearance="transparent"
      className={s.button}
      disabled={disabled}
      onClick={onClick}
    >
      <Icon size={24} name="sendMessage" />
    </Button>
  );
});
ChatBotSendMessageButton.displayName = 'ChatBotSendMessageButton';
