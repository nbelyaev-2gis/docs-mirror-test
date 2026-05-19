import { useMemo } from 'react';
import { useBrand } from '@shared/hooks/useBrand';
import { getApiPlatformServiceApis, getApiPlatformServicesInfo } from '@config/nav/api-platform';
import {
  getApiPlatformManagementInfo,
  getProManagementInfo,
  getCitylensManagementInfo,
  getGeoflowManagementInfo,
} from '@config/nav/manage';
import { getPlatformsInfo } from '@config/nav/platforms';
import { ApiPlatformServiceKey, ManagementMap } from '@config/nav/types';

export const PLATFORM = {
  API_PLATFORM: 'API_PLATFORM',
  PRO: 'PRO',
  CITY_LENS: 'CITY_LENS',
  GEO_FLOW: 'GEO_FLOW',
} as const;

export type PlatformKey = (typeof PLATFORM)[keyof typeof PLATFORM];

export interface PlatformTab {
  key: PlatformKey;
  label: string;
  href?: string;
}

export const apiPlatformServiceKeys: ApiPlatformServiceKey[] = [
  ApiPlatformServiceKey.MAPS,
  ApiPlatformServiceKey.NAVIGATION,
  ApiPlatformServiceKey.SEARCH,
  ApiPlatformServiceKey.MOBILE_SDK,
] as const;

export function useNavMenuData() {
  const brand = useBrand();

  return useMemo(() => {
    const platformsInfo = getPlatformsInfo(brand);
    const serviceApis = getApiPlatformServiceApis(brand);
    const servicesInfo = getApiPlatformServicesInfo(brand);

    const apiPlatformManagement = getApiPlatformManagementInfo(brand);
    const proManagement = getProManagementInfo(brand);
    const citylensManagement = getCitylensManagementInfo(brand);
    const geoflowManagement = getGeoflowManagementInfo(brand);

    const managementByPlatform = {
      [PLATFORM.API_PLATFORM]: apiPlatformManagement,
      [PLATFORM.PRO]: proManagement,
      [PLATFORM.CITY_LENS]: citylensManagement,
      [PLATFORM.GEO_FLOW]: geoflowManagement,
    } satisfies Record<PlatformKey, ManagementMap>;

    return {
      brand,
      platformsInfo,
      serviceApis,
      servicesInfo,
      managementByPlatform,
      apiPlatformServiceKeys,
    };
  }, [brand]);
}

export type NavMenuData = ReturnType<typeof useNavMenuData>;
