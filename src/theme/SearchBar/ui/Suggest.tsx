import React, { memo, useCallback } from 'react';
import s from './suggest.module.css';
import { Breadcrumbs } from './Breadcrumbs';
import { SuggestItem } from '../types';
import { useTrackGAEvent } from '@shared/analytics';
import Link from '@docusaurus/Link';

export const Suggest = memo(({ hierarchy, highlight, name, url }: SuggestItem) => {
  const trackSuggestClick = useTrackGAEvent('search_suggester_click');
  const handleSuggestClick = useCallback(() => {
    trackSuggestClick({
      search_suggester_click_highlight: highlight || '',
      search_suggester_click_query: name,
      search_suggester_click_url: url,
    });
  }, [highlight, name, url, trackSuggestClick]);

  return (
    <Link href={url} className={s.suggestLink} onClick={handleSuggestClick}>
      <Breadcrumbs hierarchy={hierarchy} />
      <p className={s.highlight}>
        {highlight ? (
          // Developer provided the HTML, so assume it's safe.
          // eslint-disable-next-line react/no-danger
          <span dangerouslySetInnerHTML={{ __html: highlight }} />
        ) : (
          // Developer provided the HTML, so assume it's safe.
          // eslint-disable-next-line react/no-danger
          <span dangerouslySetInnerHTML={{ __html: name }} />
        )}
      </p>
    </Link>
  );
});
Suggest.displayName = 'Suggest';
