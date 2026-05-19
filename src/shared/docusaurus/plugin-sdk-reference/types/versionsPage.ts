export type SdkVersion = {
  label: string;
  href?: string;
  isStable?: boolean;
};

export type VersionPageDataProps = {
  versions: SdkVersion[];
};
