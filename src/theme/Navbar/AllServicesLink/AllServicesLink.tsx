import { memo } from 'react';

import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { Icon } from '@shared/icons';

import s from './AllServicesLink.module.css';

export const AllServicesLink = memo(() => (
  <Link href="/api-platform" className={s.wrapper}>
    {translate({ message: 'Все сервисы' })}
    <Icon name="chevronDown" size={24} />
  </Link>
));

AllServicesLink.displayName = 'AllServicesLink';
