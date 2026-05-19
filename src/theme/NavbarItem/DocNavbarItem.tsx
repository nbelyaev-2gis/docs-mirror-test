import React from 'react';
import DocNavbarItem from '@theme-original/NavbarItem/DocNavbarItem';
import type DocNavbarItemType from '@theme/NavbarItem/DocNavbarItem';
import type { WrapperProps } from '@docusaurus/types';
import { translate } from '@docusaurus/Translate';
import { useBrand } from '@shared/hooks/useBrand';

type Props = WrapperProps<typeof DocNavbarItemType>;

export default function DocNavbarItemWrapper({ label, ...props }: Props) {
  const brand = useBrand();

  const translatedLabel =
    typeof label === 'string' ? translate({ message: label }, { brand: brand.label }) : label;

  return <DocNavbarItem label={translatedLabel} {...props} />;
}
