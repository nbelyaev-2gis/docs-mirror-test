import { memo, PropsWithChildren } from 'react';
import s from './NoInvert.module.css';

export const NoInvert = memo<PropsWithChildren>(({ children }) => {
  return <div className={s.noInvert}>{children}</div>;
});
NoInvert.displayName = 'NoInvert';
