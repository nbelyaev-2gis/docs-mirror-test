import { getApiPlatformManagementInfo } from '@config/nav/manage';

export type ManageCard = ReturnType<typeof getApiPlatformManagementInfo>[
  | 'PLATFORM_MANAGER'
  | 'ON_PREMISE'];
