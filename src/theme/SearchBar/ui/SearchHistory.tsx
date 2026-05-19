import React, { FC, useCallback } from 'react';
import s from './searchHistory.module.css';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import { Breadcrumbs } from './Breadcrumbs';
import { SearchHistoryElement } from '../types';
import { useTrackGAEvent } from '@shared/analytics';

type Props = {
  searchHistory: SearchHistoryElement[];
};

const stripHtmlTags = (html: string) => html?.replace(/<[^>]*>/g, '') ?? '';

export const SearchHistory: FC<Props> = ({ searchHistory }) => {
  const trackSearchHistoryClick = useTrackGAEvent('search_history_click');

  const handleSearchHistoryClick = useCallback(
    (url: string, highlight: string) => () => {
      trackSearchHistoryClick({
        search_history_click_url: url,
        search_history_click_highlight: highlight,
      });
    },
    [trackSearchHistoryClick],
  );

  return (
    <div className={s.searchHistory}>
      <div className={s.searchHistoryHeading}>
        <Translate>История поиска</Translate>
      </div>
      {searchHistory.map((el) => {
        const { url, highlight, name, hierarchy } = el;

        return (
          <div className={s.searchHistoryElement} key={`${url}/${highlight}`}>
            <Link
              href={url}
              className={s.searchHistoryElementLink}
              onClick={handleSearchHistoryClick(url, highlight || '')}
            >
              <Breadcrumbs hierarchy={hierarchy} />
              <div
                className={s.searchHistoryElementText}
                // Developer provided the HTML, so assume it's safe.
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: highlight || name }}
                title={stripHtmlTags(highlight || name)}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
