import { memo } from 'react';
import Translate from '@docusaurus/Translate';
import { cn } from '@shared/utils';
import { Button } from '@shared/uiKit/Button';
import s from './chatBotError.module.css';

type Props = {
  text: string;
  onClick: () => void;
  className?: string;
};

export const ChatBotError = memo<Props>(({ text, onClick, className }) => {
  return (
    <div className={cn(s.wrapper, className)}>
      <p className={s.text}>{text}</p>
      <Button appearance="primary" size={32} onClick={onClick}>
        <Translate>Повторить</Translate>
      </Button>
    </div>
  );
});
ChatBotError.displayName = 'ChatBotError';
