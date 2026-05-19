import { memo, useState, Fragment } from 'react';
import { translate } from '@docusaurus/Translate';
import { cn } from '@shared/utils';
import { type NavMenuData } from '@config/hooks/useNavMenuData';

import { DropdownShell } from './DropdownShell';
import { Card } from './Card';
import s from './ApiPlatformDropdown.module.css';

import { Management } from '../../../Management';
import { AllServicesLink } from '../../../AllServicesLink';

interface ApiPlatformDropdownProps {
  data: NavMenuData;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const ApiPlatformDropdown = memo<ApiPlatformDropdownProps>(
  ({ data, onClose, onMouseEnter, onMouseLeave }) => {
    const [activeService, setActiveService] = useState(data.apiPlatformServiceKeys[0]);

    const { serviceApis, servicesInfo, managementByPlatform } = data;

    const sections = serviceApis[activeService];

    return (
      <DropdownShell onClose={onClose} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className={s.content}>
          <div className={s.serviceSidebar}>
            <span className={s.sidebarLabel}>{translate({ message: 'Сервисы' })}</span>
            <div className={s.sidebarButtons}>
              {data.apiPlatformServiceKeys.map((key) => {
                const info = servicesInfo[key];
                return (
                  <button
                    key={key}
                    type="button"
                    className={cn(s.sidebarButton, activeService === key && s.sidebarButtonActive)}
                    onClick={() => setActiveService(key)}
                  >
                    {info.title}
                  </button>
                );
              })}
              <AllServicesLink />
            </div>
          </div>
          <div className={s.divider}></div>
          <div className={s.main}>
            {sections.map((section, i) => (
              <Fragment key={i}>
                {i > 0 && <div className={s.sectionDivider} />}
                <div className={s.sectionGroup}>
                  <span className={s.sectionLabel}>{section.title}</span>
                  <div className={s.sectionCards}>
                    {section.items
                      .filter((item) => item.tag !== 'deprecated')
                      .map((item) => (
                        <Card
                          key={item.title}
                          href={item.link}
                          title={item.title}
                          description={item.description}
                          onClick={onClose}
                        />
                      ))}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
          <div /> {/* пустой разделитель */}
          <div className={s.management}>
            <Management data={managementByPlatform.API_PLATFORM} />
          </div>
        </div>
      </DropdownShell>
    );
  },
);

ApiPlatformDropdown.displayName = 'ApiPlatformDropdown';
