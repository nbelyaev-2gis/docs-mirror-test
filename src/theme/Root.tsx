import { memo, useEffect } from 'react';
import type { Props } from '@theme/Root';
import Error from '@theme/Error';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { ColorModeProvider } from '@docusaurus/theme-common/internal';
import { logError } from '@shared/log';
import { createHandleGlobalErrorFunc, createHandleRejectionFunc } from '@shared/logger';
import { ChatBot } from '@shared/chatBot';
import { useCustomFields } from '@config/hooks/useCustomFields';

const Root = memo<Props>(({ children }) => {
  const { isChatBotEnabled } = useCustomFields();

  useEffect(() => {
    const handleError = createHandleGlobalErrorFunc();
    const handleRejection = createHandleRejectionFunc();

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);
    return () => {
      window.removeEventListener('unhandledrejection', handleRejection);
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <ErrorBoundary
      fallback={({ error, tryAgain }) => {
        logError({
          message: error.message,
          level: 'error',
          id: 'globe',
          payload: {
            type: 'ErrorBoundaryCatchError',
            stack: error.stack,
          },
        });
        return <Error error={error} tryAgain={tryAgain} />;
      }}
    >
      {children}

      {isChatBotEnabled && (
        <BrowserOnly>
          {() => (
            // Чатбот использует CodeBlock, который нуждается в ColorModeProvider для подсветки темы.
            // Однако провайдер не доступен в Root, он объявляется в Layout.
            // Почему чат не в Layout? Потому что он может размаунтиться при переходе на разделы документации,
            // в отличие от Root. Поэтому дублируем провайдер здесь.
            <ColorModeProvider>
              <ChatBot />
            </ColorModeProvider>
          )}
        </BrowserOnly>
      )}
    </ErrorBoundary>
  );
});
Root.displayName = 'Root';

export default Root;
