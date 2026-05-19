import { useCallback, memo, useMemo, useState, type ComponentType } from 'react';

import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { ApiPlatformServiceKey } from '@config/nav/types';
import { getApiPlatformServicesInfo, getApiPlatformManagementInfo } from '@config/nav';
import { TAB_QUERY_PARAM } from '@config/nav/api-platform';
import type { Locale } from '@config/i18n/types';

import Layout from '@theme/Layout';
import MDXContent from '@theme/MDXContent';
import { ApiPlatformData } from '@theme/components/ApiPlatformData';
import { ApiPlatformHero } from '@theme/components/ApiPlatformHero';
import { ApiPlatformManage } from '@theme/components/ApiPlatformManage';

import { Icon } from '@shared/icons';
import { useBrand } from '@shared/hooks/useBrand';
import { ScrollableTabs, type ScrollableTabItem } from '@shared/uiKit/ScrollableTabs';

import FaqMapsRu from '@site/docs/maps/_api-platform-page-faq-section-maps.mdx';
import FaqNavigationRu from '@site/docs/api/navigation/_api-platform-page-faq-section-navigation.mdx';
import FaqSearchRu from '@site/docs/api/search/_api-platform-page-faq-section-search.mdx';
import FaqMapsEn from '@site/i18n/en/docusaurus-plugin-content-docs/current/maps/_api-platform-page-faq-section-maps.mdx';
import FaqNavigationEn from '@site/i18n/en/docusaurus-plugin-content-docs/current/api/navigation/_api-platform-page-faq-section-navigation.mdx';
import FaqSearchEn from '@site/i18n/en/docusaurus-plugin-content-docs/current/api/search/_api-platform-page-faq-section_search.mdx';

import s from './index.module.css';
import { useNavMenuData } from '@config/hooks/useNavMenuData';

const FAQ_MAP: Record<ApiPlatformServiceKey, Record<Locale, ComponentType> | undefined> = {
  [ApiPlatformServiceKey.MAPS]: { ru: FaqMapsRu, en: FaqMapsEn },
  [ApiPlatformServiceKey.NAVIGATION]: { ru: FaqNavigationRu, en: FaqNavigationEn },
  [ApiPlatformServiceKey.SEARCH]: { ru: FaqSearchRu, en: FaqSearchEn },
  [ApiPlatformServiceKey.MOBILE_SDK]: undefined,
};

function getInitialTab(apiPlatformServiceKeys: ApiPlatformServiceKey[]): ApiPlatformServiceKey {
  const [defaultTab] = apiPlatformServiceKeys;

  if (typeof window === 'undefined') {
    return defaultTab;
  }

  const param = new URLSearchParams(window.location.search)
    .get(TAB_QUERY_PARAM)
    ?.toUpperCase() as ApiPlatformServiceKey;

  if (param && apiPlatformServiceKeys.includes(param)) {
    return param;
  }

  return defaultTab;
}

const ApiPlatform = memo(() => {
  const brand = useBrand();
  const { apiPlatformServiceKeys } = useNavMenuData();

  const [activeTab, setActiveTab] = useState<ApiPlatformServiceKey>(
    getInitialTab(apiPlatformServiceKeys),
  );
  const servicesInfo = useMemo(() => getApiPlatformServicesInfo(brand), [brand]);
  const managementCards = useMemo(
    () => Object.values(getApiPlatformManagementInfo(brand)),
    [brand],
  );

  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();

  const handleTabChange = useCallback(
    (tabId: string) => {
      if (apiPlatformServiceKeys.includes(tabId as ApiPlatformServiceKey)) {
        setActiveTab(tabId as ApiPlatformServiceKey);
        const url = new URL(window.location.href);
        url.searchParams.set(TAB_QUERY_PARAM, tabId.toLowerCase());
        window.history.replaceState(null, '', url.toString());
      }
    },
    [apiPlatformServiceKeys],
  );

  const tabs = useMemo<ScrollableTabItem[]>(
    () =>
      apiPlatformServiceKeys.map((serviceKey) => {
        const serviceInfo = servicesInfo[serviceKey];

        return {
          id: serviceKey,
          label: serviceInfo.title,
          icon: <Icon className={s.tabIcon} name={serviceInfo.mainPageIconName} size={32} />,
        };
      }),
    [servicesInfo, apiPlatformServiceKeys],
  );

  const FaqComponent = useMemo(
    () => FAQ_MAP[activeTab]?.[currentLocale as Locale],
    [activeTab, currentLocale],
  );

  return (
    <Layout>
      <main className={s.mainWrapper}>
        <ApiPlatformHero />
        <div className={s.mainContent}>
          <div className={s.platformBlock}>
            <ScrollableTabs
              items={tabs}
              activeId={activeTab}
              onChange={handleTabChange}
              className={s.tabs}
            />
            <div className={s.tabContent}>
              <ApiPlatformData serviceKey={activeTab} />
              {FaqComponent && (
                <div>
                  <h3 className={s.faqTitle}>{translate({ message: 'Вопросы и ответы' })}</h3>
                  <div className="theme-doc-markdown markdown">
                    <MDXContent>
                      <FaqComponent />
                    </MDXContent>
                  </div>
                </div>
              )}
            </div>
          </div>
          <ApiPlatformManage cards={managementCards} />
        </div>
      </main>
    </Layout>
  );
});
ApiPlatform.displayName = 'ApiPlatform';

export default ApiPlatform;
