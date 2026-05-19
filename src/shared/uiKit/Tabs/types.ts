export type TabsList = TabItem[];

export interface TabItem {
  label: string;
  isDisabled?: boolean;
  id: string;
  isActive: boolean;
}
