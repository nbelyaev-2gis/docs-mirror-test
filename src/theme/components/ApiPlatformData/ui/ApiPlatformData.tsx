import { memo, useMemo } from 'react';
import { getApiPlatformServiceApis, getApiPlatformServicesInfo } from '@config/nav';
import { ApiPlatformServiceKey } from '@config/nav/types';
import { useBrand } from '@shared/hooks/useBrand';

import { Cards } from './Cards';
import { Preview } from './Preview';

import s from './ApiPlatformData.module.css';

interface ApiPlatformDataProps {
  serviceKey: ApiPlatformServiceKey;
}

export const ApiPlatformData = memo(({ serviceKey }: ApiPlatformDataProps) => {
  const brand = useBrand();
  const servicesInfo = useMemo(() => getApiPlatformServicesInfo(brand), [brand]);
  const servicesGroups = useMemo(() => getApiPlatformServiceApis(brand), [brand]);

  const serviceInfo = useMemo(() => servicesInfo[serviceKey], [serviceKey, servicesInfo]);
  const groups: ReturnType<typeof getApiPlatformServiceApis>[ApiPlatformServiceKey] = useMemo(
    () => servicesGroups[serviceKey],
    [serviceKey, servicesGroups],
  );

  return (
    <section className={s.container}>
      <header className={s.header}>
        <p className={s.description}>{serviceInfo.description}</p>
      </header>

      <Preview serviceInfo={serviceInfo} />

      <Cards groups={groups} />
    </section>
  );
});
ApiPlatformData.displayName = 'ApiPlatformData';
