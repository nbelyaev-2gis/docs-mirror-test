import { memo } from 'react';
import s from './chatBotToast.module.css';

type Props = {
  text: string;
};

export const ChatBotToast = memo<Props>(({ text }) => {
  return <div className={s.toast}>{text}</div>;
});
ChatBotToast.displayName = 'ChatBotToast';
