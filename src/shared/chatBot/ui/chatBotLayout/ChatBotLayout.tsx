import { memo, forwardRef, useRef } from 'react';
import { ChatBotHeader } from '../chatBotHeader/ChatBotHeader';
import { useChatBotStore } from '../../model/store';
import { ChatBotInput } from '../chatBotInput/ChatBotInput';
import { ChatBotDialog } from '../chatBotDialog/ChatBotDialog';
import { ChatBotToastProvider } from '../chatBotToast';
import { cn } from '@shared/utils';
import s from './chatBotLayout.module.css';

export const ChatBotLayout = memo(
  forwardRef<HTMLDivElement>((_, ref) => {
    const isMaximized = useChatBotStore((s) => s.isMaximized);
    const status = useChatBotStore((s) => s.status.value);

    const toastContainerRef = useRef<HTMLDivElement>(null);

    return (
      <div ref={ref} className={cn(s.layout, isMaximized && s.layoutWide)}>
        <ChatBotToastProvider toastContainerRef={toastContainerRef}>
          <ChatBotHeader />
          <ChatBotDialog />
          {status !== 'fetchHistoryError' && status !== 'fetchingHistory' && (
            <ChatBotInput toastContainerRef={toastContainerRef} />
          )}
        </ChatBotToastProvider>
      </div>
    );
  }),
);
ChatBotLayout.displayName = 'ChatBotLayout';
