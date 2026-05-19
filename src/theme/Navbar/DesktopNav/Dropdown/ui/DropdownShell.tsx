import { memo, PropsWithChildren } from 'react';
import s from './DropdownShell.module.css';

interface Props {
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const DropdownShell = memo<PropsWithChildren<Props>>(
  ({ children, onClose, onMouseEnter, onMouseLeave }) => (
    <>
      <div className={s.backdrop} onClick={onClose} />
      <div className={s.overlay} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
      </div>
    </>
  ),
);

DropdownShell.displayName = 'DropdownShell';
