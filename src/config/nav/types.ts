import { IconName32, IconName48 } from '@shared/icons';

export enum ApiPlatformServiceKey {
  MAPS = 'MAPS',
  NAVIGATION = 'NAVIGATION',
  SEARCH = 'SEARCH',
  MOBILE_SDK = 'MOBILE_SDK',
}

export type NavBrand = {
  id: '2gis' | 'urbi';
  label: string;
};

export type ManagementCardKey = 'PLATFORM_MANAGER' | 'ON_PREMISE' | 'USER_MANUAL';

export type ApiPlatformTag = 'new' | 'beta' | 'deprecated';

export type OverlayImageData = {
  src: string;
  sources: { srcSet: string }[];
};

interface BaseCardItem {
  title: string;
  description: string;
  link: string;
}

export interface NavCardItem extends BaseCardItem {
  mainPageIconName: IconName32;
}

export interface ApiPlatformServiceInfo extends NavCardItem {
  overlayImage: OverlayImageData | null;
}

export interface ApiPlatformServiceCardItem extends Omit<BaseCardItem, 'link'> {
  link?: string;
  tag?: ApiPlatformTag;
}

type ManagementCardItem = BaseCardItem & {
  mainPageIconName: IconName32 | IconName48;
  docsLink?: string;
};

export type ManagementMap = Partial<Record<ManagementCardKey, ManagementCardItem>>;

type PlatformButtonType = 'primary' | 'outline';

export type PlatformControlButton = {
  label: string;
  link: string;
  type: PlatformButtonType;
  hideInNav: boolean;
};

export type PlatformMainSectionInfoBlock = {
  title?: string;
  items: readonly NavCardItem[];
};

export type DropdownPlatformInfo = {
  title: string;
  description: string;
  logoPath: string;
  logoAlt: string;
  iconName: IconName48;
  controlButtons: readonly PlatformControlButton[];
  mainSectionInfoBlocks: readonly PlatformMainSectionInfoBlock[];
  href?: string;
};

export type LinkPlatformInfo = {
  title: string;
  href: string;
};

export type PlatformsInfo = {
  API_PLATFORM: DropdownPlatformInfo;
  PRO: DropdownPlatformInfo;
  CITY_LENS: DropdownPlatformInfo;
  GEO_FLOW: DropdownPlatformInfo;
  // BLOG: LinkPlatformInfo; @TODO blog
};
