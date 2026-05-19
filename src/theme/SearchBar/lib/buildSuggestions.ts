import type { SearchResponse } from 'typesense/lib/Typesense/Documents';
import { Document, SuggestItem } from '../types';

export const buildSuggestions = (hits: NonNullable<SearchResponse<Document>['hits']>) => {
  return hits.reduce<SuggestItem[]>((acc, { document, highlight }) => {
    if (!document || !document.type) {
      return acc;
    }

    const { hierarchy, type, url, url_without_anchor: urlWithoutAnchor, objectID } = document;
    const name = hierarchy[type];

    if (!name) {
      return acc;
    }

    const item = {
      id: objectID,
      name,
      url,
      urlWithoutAnchor,
      hierarchy: Object.values(hierarchy).filter((el) => !!el) as string[],
      highlight: (highlight as any)?.[`hierarchy.${type}`]?.snippet,
    };

    acc.push(item);

    return acc;
  }, []);
};
