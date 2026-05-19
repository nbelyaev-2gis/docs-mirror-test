import axios from 'axios';
import type { SearchResponse } from 'typesense/lib/Typesense/Documents';
import type { Document } from '../types';
import { searchPathname } from '../model/constants';

type Params = {
  q: string;
  lang: string;
};

type Options = {
  onError: (error: any) => void;
};

export const getSearch = async ({ q, lang }: Params, { onError }: Options) => {
  const url = new URL(searchPathname, window.location.origin);

  url.searchParams.set('q', q);
  url.searchParams.set(
    'query_by',
    'hierarchy.lvl0,hierarchy.lvl1,hierarchy.lvl2,hierarchy.lvl3,hierarchy.lvl4,hierarchy.lvl5',
  );
  url.searchParams.set('filter_by', `language:${lang}`);
  url.searchParams.set('group_by', `url_without_anchor`);
  url.searchParams.set('group_limit', `1`);

  return axios
    .get<SearchResponse<Document>>(url.toString())
    .then((res) => res.data)
    .catch((error) => onError(error));
};
