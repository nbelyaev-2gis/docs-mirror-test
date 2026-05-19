import { ReactNode } from 'react';
import SearchBar from '@theme/SearchBar';
import s from './About.module.css';
import { dataTestId } from '@tests/helpers/locator';
import { aboutLocator } from '../locators';

interface Props {
  title: ReactNode;
  description: ReactNode;
  withSearch?: boolean;
}

export function About({ title, description, withSearch }: Props) {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.description}>{description}</div>
      {withSearch && (
        <div className={s.searchBarWrapper}>
          <SearchBar
            variant="primary"
            size="default"
            {...dataTestId(aboutLocator.mainSearchButton)}
          />
        </div>
      )}
    </div>
  );
}
