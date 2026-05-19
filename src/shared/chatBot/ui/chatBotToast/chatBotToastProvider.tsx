import {
  createContext,
  useContext,
  memo,
  useState,
  PropsWithChildren,
  useEffect,
  RefObject,
} from 'react';
import { createPortal } from 'react-dom';
import { ChatBotToast } from './ChatBotToast';

type ToastParams = {
  text: string;
  timeout?: number;
};

type ChatBotContextValue = (params: ToastParams) => void;

const chatBotToastContext = createContext<ChatBotContextValue | undefined>(undefined);

type Props = PropsWithChildren<{
  toastContainerRef: RefObject<HTMLElement | null>;
}>;

export const ChatBotToastProvider = memo<Props>(({ children, toastContainerRef }) => {
  const [toastParams, setToastParams] = useState<ToastParams>();

  useEffect(() => {
    if (!toastParams) return;

    const t = setTimeout(() => {
      setToastParams(undefined);
    }, toastParams.timeout || 2500);

    return () => clearTimeout(t);
  }, [toastParams]);

  return (
    <chatBotToastContext.Provider value={setToastParams}>
      {children}

      {toastParams &&
        toastContainerRef.current &&
        createPortal(<ChatBotToast text={toastParams.text} />, toastContainerRef.current)}
    </chatBotToastContext.Provider>
  );
});
ChatBotToastProvider.displayName = 'ChatBotToastProvider';

export const useChatBotToast = () => {
  const useToast = useContext(chatBotToastContext);
  if (!useToast) {
    throw new Error('useChatBotToast must be used within a ChatBotToastProvider');
  }
  return useToast;
};
