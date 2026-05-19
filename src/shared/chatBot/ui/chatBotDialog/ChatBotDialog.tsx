import { memo, useRef, ReactNode } from 'react';
import { useDialogScrollToBottom } from '../../lib/useDialogScrollToBottom';
import { ChatBotDialogHistoryLoader } from '../chatBotDialogHistoryLoader/ChatBotDialogHistoryLoader';
import { useChatBotStore } from '../../model/store';
import { ChatBotHistoryError } from '../chatBotError/ChatBotHistoryError';
import { ChatBotMessageError } from '../chatBotError/ChatBotMessageError';
import { ChatBotDialogMessages } from '../chatBotDialogMessages/ChatBotDialogMessages';
import { ChatBotMessageLoader } from '../chatBotMessageLoader/ChatBotMessageLoader';
import s from './chatBotDialog.module.css';

export const ChatBotDialog = memo(() => {
  const messages = useChatBotStore((s) => s.messages);

  const statusObj = useChatBotStore((s) => s.status);
  const status = statusObj.value;
  const feedbackFormMessageId =
    statusObj.value === 'feedbackFormOpen' ? statusObj.payload.messageId : undefined;

  const ref = useRef<HTMLDivElement>(null);

  useDialogScrollToBottom({ ref, messages, feedbackFormMessageId, status: statusObj });

  const renderByStatus: Record<typeof status, ReactNode> = {
    fetchingHistory: <ChatBotDialogHistoryLoader />,
    fetchHistoryError: <ChatBotHistoryError />,
    sendError: (
      <>
        <ChatBotDialogMessages />
        <ChatBotMessageError />
      </>
    ),
    waitingForResponse: (
      <>
        <ChatBotDialogMessages />
        <ChatBotMessageLoader />
      </>
    ),
    idle: <ChatBotDialogMessages />,
    feedbackFormOpen: <ChatBotDialogMessages />,
  };

  return (
    <div className={s.wrapper} ref={ref}>
      {renderByStatus[status]}
    </div>
  );
});
ChatBotDialog.displayName = 'ChatBotDialog';
