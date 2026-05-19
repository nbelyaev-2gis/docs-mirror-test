import { FC } from 'react';
import { cn } from '@shared/utils';
import s from './TabItem.module.css';
import { TabItem as TabItemProps } from '@uiKit/Tabs/types';

type Props = TabItemProps & { onClick: ({ id, label }: { id: string; label: string }) => void };

export const TabItem: FC<Props> = ({ label, id, isActive, isDisabled, onClick }) => (
  <div
    className={cn(s.tabItem, isActive && s.tabItemActive, isDisabled && s.tabItemDisabled)}
    onClick={() => onClick({ label, id })}
  >
    <span>{label}</span>
  </div>
);

TabItem.displayName = 'MenuItem';
