import { memo } from 'react';
import { TabItem } from './TabItem';
import s from './Tabs.module.css';
import { TabsList } from '@uiKit/Tabs/types';

interface Props {
  tabsList: TabsList;
  onClick: ({ id, label }: { id: string; label: string }) => void;
  currentTabId?: string;
}

export const Tabs = memo<Props>(({ tabsList, onClick, currentTabId }) => {
  return (
    <div className={s.tabsContainer}>
      {tabsList.map(({ label, isDisabled, id }) => (
        <TabItem
          key={id}
          label={label}
          isActive={currentTabId === id}
          isDisabled={isDisabled}
          id={id}
          onClick={onClick}
        />
      ))}
    </div>
  );
});

Tabs.displayName = 'Tabs';
