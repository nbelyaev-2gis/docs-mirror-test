import { FC, useMemo } from 'react';
import { icons24, icons32, icons48 } from '@shared/icons/model';
import { IconName24, IconName32, IconName48 } from '@shared/icons';

type IconCommonProps = {
  className?: string;
};

export type IconProps = IconCommonProps &
  (
    | {
        name: IconName24;
        size: 24;
      }
    | {
        name: IconName32;
        size: 32;
      }
    | {
        name: IconName48;
        size: 48;
      }
  );

export const Icon: FC<IconProps> = ({ name, size, ...props }) => {
  const SvgIcon = useMemo(() => {
    switch (size) {
      case 24:
        return icons24[name];
      case 32:
        return icons32[name];
      case 48:
        return icons48[name];
    }
  }, [name, size]);

  return <SvgIcon {...props} />;
};

Icon.displayName = 'Icon';
