import Link from '@docusaurus/Link';
import { Icon } from '@shared/icons';
import { Button } from '@shared/uiKit/Button';

import s from './PlatformHeader.module.css';
import { DropdownPlatformInfo } from '@config/nav/types';

export function PlatformHeader({
  title,
  description,
  logoPath,
  logoAlt,
  iconName,
  controlButtons,
}: Omit<DropdownPlatformInfo, 'mainSectionInfoBlocks'>) {
  return (
    <div className={s.header}>
      <div className={s.content}>
        <div className={s.meta}>
          <Icon name={iconName} size={48} className={s.logoIcon} />
          <h2 className={s.title}>{title}</h2>
          <p className={s.description}>{description}</p>
        </div>
        {controlButtons.length > 0 && (
          <div className={s.actions}>
            {controlButtons.map((button) => (
              <Link key={button.label} href={button.link} className={s.actionButton}>
                <Button asChild appearance={button.type} size={48}>
                  {button.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className={s.logoWrap}>
        <img src={logoPath} alt={logoAlt} className={s.logoImage} />
      </div>
    </div>
  );
}
