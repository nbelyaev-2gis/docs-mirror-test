import { memo } from 'react';
import { Icon } from '@shared/icons';
import { Button } from '@shared/uiKit/Button';
import { cn } from '@shared/utils';
import { useChatBotStore } from '../../model/store';
import s from './chatBotFab.module.css';

type Props = {
  onClick: () => void;
};

export const ChatBotFab = memo<Props>(({ onClick }) => {
  const hasUnreadMessage = useChatBotStore(({ messages, lastReadMessageId }) => {
    const lastAiMessage = messages.findLast((msg) => msg.author === 'assistant');
    if (!lastAiMessage) return false;
    return lastReadMessageId !== lastAiMessage.id;
  });

  return (
    <Button
      size={48}
      appearance="primary"
      onClick={onClick}
      className={cn(s.fab, hasUnreadMessage && s.fabWithBadge)}
    >
      <Icon size={24} name="ai" />
    </Button>
  );
});
ChatBotFab.displayName = 'ChatBotFab';
