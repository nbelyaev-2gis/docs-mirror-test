import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { DocusaurusCustomConfig } from '../docusaurus/types';

export const useCustomFields = () => {
  const { siteConfig } = useDocusaurusContext();
  return siteConfig.customFields as DocusaurusCustomConfig['customFields'];
};
