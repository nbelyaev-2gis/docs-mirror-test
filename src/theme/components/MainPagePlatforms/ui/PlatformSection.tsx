import s from './PlatformSection.module.css';
import { PlatformHeader } from './PlatformHeader';
import { PlatformGroups } from './PlatformGroups';
import { DropdownPlatformInfo } from '@config/nav/types';

export function PlatformSection({
  title,
  description,
  logoPath,
  logoAlt,
  iconName,
  controlButtons,
  mainSectionInfoBlocks,
}: DropdownPlatformInfo) {
  return (
    <div className={s.container}>
      <PlatformHeader
        title={title}
        description={description}
        logoPath={logoPath}
        logoAlt={logoAlt}
        iconName={iconName}
        controlButtons={controlButtons}
      />
      <PlatformGroups groups={mainSectionInfoBlocks} />
    </div>
  );
}
