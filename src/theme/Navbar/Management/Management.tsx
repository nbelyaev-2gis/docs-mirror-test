import React, { memo } from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { getApiPlatformManagementInfo } from '@config/nav/manage';

import s from './Management.module.css';
import { Button } from '@shared/uiKit/Button';

type ManagementData = ReturnType<typeof getApiPlatformManagementInfo>;

export const Management = memo(({ data }: { data: ManagementData }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.label}>{translate({ message: 'Управление' })}</div>
      <div className={s.blocks}>
        <div className={s.block}>
          <div className={s.title}>{data.PLATFORM_MANAGER.title}</div>
          <div className={s.description}>{data.PLATFORM_MANAGER.description}</div>
          <div className={s.buttons}>
            <Link href={data.PLATFORM_MANAGER.serviceLink}>
              <Button wide asChild appearance="primary" size={40}>
                {translate({ message: 'В личный кабинет' })}
              </Button>
            </Link>
            <Link href={data.PLATFORM_MANAGER.link}>
              <Button wide asChild appearance="outline" size={40}>
                {translate({ message: 'Документация' })}
              </Button>
            </Link>
          </div>
        </div>
        <div className={s.block}>
          <div className={s.title}>{data.ON_PREMISE.title}</div>
          <div className={s.description}>{data.ON_PREMISE.description}</div>
          <div className={s.buttons}>
            <Link href={data.ON_PREMISE.link}>
              <Button wide asChild appearance="outline" size={40}>
                {translate({ message: 'Документация' })}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

Management.displayName = 'Management';
