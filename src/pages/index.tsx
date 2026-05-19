import Layout from '@theme/Layout';
import s from './index.module.css';
import { useMemo } from 'react';
import { PlatformSection } from '../theme/components/MainPagePlatforms';
import { getPlatformsInfo } from '@config/nav';
import { useBrand } from '@shared/hooks/useBrand';
import { MainPageHero } from '../theme/components/MainPageHero/ui';

export default function Home() {
  const brand = useBrand();
  const platforms = useMemo(() => {
    // скрываем блог с главной страницы
    // @TODO blog: раскомментить после включения блога
    // const { BLOG: _, ...platformsInfo } = getPlatformsInfo(brand);
    const platformsInfo = getPlatformsInfo(brand);
    return Object.values(platformsInfo);
  }, [brand]);

  return (
    <Layout>
      <main className={s.wrapper}>
        <MainPageHero />
        {platforms.map((item) => (
          <PlatformSection
            key={item.title}
            title={item.title}
            description={item.description}
            logoPath={item.logoPath}
            logoAlt={item.logoAlt}
            iconName={item.iconName}
            controlButtons={item.controlButtons}
            mainSectionInfoBlocks={item.mainSectionInfoBlocks}
          />
        ))}
      </main>
    </Layout>
  );
}
