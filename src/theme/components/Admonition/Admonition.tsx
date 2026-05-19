import React from 'react';
import Admonition from '@theme-original/Admonition';
import type { Props as AdmonitionProps } from '@theme/Admonition';
import { Icon } from '@shared/icons';

type IconName = 'guide' | 'bulb' | 'strike' | 'brickError' | 'attention';

const admonitionTypeToIconMap: Record<AdmonitionProps['type'], IconName> = {
  note: 'guide',
  tip: 'bulb',
  info: 'attention',
  warning: 'strike',
  danger: 'brickError',
} as const;

export function AdmonitionWrapper(props: AdmonitionProps) {
  const iconName = admonitionTypeToIconMap[props.type];

  return <Admonition {...props} icon={<Icon name={iconName} size={24} />} />;
}
