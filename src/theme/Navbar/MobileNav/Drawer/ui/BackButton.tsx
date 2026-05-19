import { memo, PropsWithChildren } from 'react';

import { Icon } from '@shared/icons';
import { Button } from '@shared/uiKit/Button';

import s from './BackButton.module.css';

export const BackButton = memo<PropsWithChildren<{ onClick: () => void }>>(
  ({ onClick, children }) => {
    return (
      <Button
        wide
        onClick={onClick}
        size={48}
        appearance="outline"
        className={s.wrapper}
        startIcon={<Icon name="arrowLeft" size={24} />}
      >
        {children}
      </Button>
    );
  },
);
BackButton.displayName = 'BackButton';
