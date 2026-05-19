const SERVICES_BY_BRAND = {
  '2gis': {
    plm: 'https://platform.2gis.ru',
  },
  urbi: {
    plm: 'https://platform.urbi.ae',
  },
} as const;

type BrandKey = keyof typeof SERVICES_BY_BRAND;
export type ServiceKey = keyof (typeof SERVICES_BY_BRAND)[BrandKey];

export const getServiceUrl = (brandId: string, service: ServiceKey) => {
  const services = SERVICES_BY_BRAND[brandId as BrandKey];

  if (!services || !(service in services)) {
    return '';
  }

  return services[service];
};
