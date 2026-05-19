import React, { type ReactNode } from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import type DocSidebarType from '@theme/DocSidebar';
import type { WrapperProps } from '@docusaurus/types';
import s from './searchButton.module.css';
import SearchBar from '@theme/SearchBar';

type Props = WrapperProps<typeof DocSidebarType>;

export default function DocSidebarWrapper(props: Props): ReactNode {
  return (
    <div className={s.wrapper}>
      <div className="padding-top--md">
        <SearchBar variant="secondary" size="default" />
        <DocSidebar {...props} />
      </div>
    </div>
  );
}
