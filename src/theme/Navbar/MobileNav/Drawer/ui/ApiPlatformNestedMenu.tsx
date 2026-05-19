import { memo } from 'react';

import { type NavMenuData } from '@config/hooks/useNavMenuData';
import { Accordion, AccordionItem } from '@theme/components/Accordion';

import { BackButton } from './BackButton';
import s from './ApiPlatformNestedMenu.module.css';

import { ApiPlatformSections } from './ApiPlatformSections';
import { Management } from '../../../Management';
import { AllServicesLink } from '../../../AllServicesLink';

interface ApiPlatformNestedMenuProps {
  data: NavMenuData;
  onBack: () => void;
  onClose: () => void;
}

export const ApiPlatformNestedMenu = memo<ApiPlatformNestedMenuProps>(
  ({ data, onBack, onClose }) => {
    const {
      serviceApis,
      servicesInfo,
      platformsInfo,
      managementByPlatform,
      apiPlatformServiceKeys,
    } = data;

    return (
      <div className={s.wrapper}>
        <BackButton onClick={onBack}>{platformsInfo.API_PLATFORM.title}</BackButton>

        <div>
          <Accordion>
            {apiPlatformServiceKeys.map((serviceKey) => {
              const info = servicesInfo[serviceKey];
              const sections = serviceApis[serviceKey];

              return (
                <AccordionItem
                  key={serviceKey}
                  title={info.title}
                  iconVariant="chevron"
                  triggerClassName={s.accordionTrigger}
                  contentClassName={s.accordionContent}
                  divider={false}
                >
                  <ApiPlatformSections
                    sections={sections}
                    brand={data.brand.id}
                    onClose={onClose}
                  />
                </AccordionItem>
              );
            })}
          </Accordion>
          <AllServicesLink />

          <Management data={managementByPlatform.API_PLATFORM} />
        </div>
      </div>
    );
  },
);
ApiPlatformNestedMenu.displayName = 'ApiPlatformNestedMenu';
