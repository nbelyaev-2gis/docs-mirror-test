import React, { memo, MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Downshift from 'downshift';
import { useLocalStorageState } from '@shared/hooks/useLocalStorageState';
import { useDebouncedFn } from '@shared/hooks/useDebounceFn';
import { useCustomFields } from '@config/hooks/useCustomFields';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import s from './searchModal.module.css';
import { Icon } from '@shared/icons';
import Translate, { translate } from '@docusaurus/Translate';
import { SearchHistory } from './SearchHistory';
import { SearchAiInfoBlock } from './SearchAiInfoBlock';
import { getSearch } from '../api/getSearch';
import { buildSuggestions } from '../lib/buildSuggestions';
import { Suggest } from './Suggest';
import { SearchHistoryElement, SuggestItem } from '../types';
import { maxSearchQueryLength, modalActiveClass } from '../model/constants';
import { useTrackGAEvent } from '@shared/analytics';
import { useChatBotStore } from '@shared/chatBot';
import { dataTestId } from '@tests/helpers/locator';
import { searchModalLocator } from '../locators';

export type SearchModalProps = {
  onClose: () => void;
};

const searchHistoryLocalStorageKey = 'pl6_docs_search-history';

export const SearchModal = memo(({ onClose }: SearchModalProps) => {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const { isChatBotEnabled } = useCustomFields();

  const trackSearchEvent = useTrackGAEvent('search_query_sent');
  const trackChatBotOpen = useTrackGAEvent('chat_bot_search_click');
  const setChatBotIsOpen = useChatBotStore((s) => s.setIsOpen);

  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState<SuggestItem[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [searchHistory, setSearchHistory] = useLocalStorageState<SearchHistoryElement[]>(
    searchHistoryLocalStorageKey,
    { defaultValue: [] },
  );

  const searchInputPlaceholder = translate({ message: 'Поиск' });

  const updateSearchHistory = useCallback(
    (value: SearchHistoryElement) => {
      setSearchHistory((prev) => {
        const copy = [...(prev ?? [])];
        const duplicateIndex = copy.findIndex(
          (el) =>
            el.highlight === value.highlight && el.hierarchy.join('') === value.hierarchy.join(''),
        );

        if (duplicateIndex !== -1) copy.splice(duplicateIndex, 1);
        if (copy.length === 10) copy.pop();

        copy.unshift(value);
        return copy;
      });
    },
    [setSearchHistory],
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const isEmptyResult = !isLoading && suggestions?.length === 0;
  const showSearchHistory =
    suggestions === undefined && searchHistory?.length && !searchValue.trim();

  const handleOpenChatBot = useCallback(() => {
    onClose();

    setChatBotIsOpen(true);
    trackChatBotOpen();
  }, [onClose, setChatBotIsOpen, trackChatBotOpen]);

  const menuComponent = useMemo(() => {
    if (isError)
      return (
        <div className={s.error}>
          <span className={s.errorText}>
            <Translate>Произошла ошибка</Translate>
          </span>
          <Translate>Обновите страницу и попробуйте еще раз</Translate>
        </div>
      );

    if (isEmptyResult)
      return (
        <>
          <div className={s.notFound}>
            <Translate>Результаты не найдены</Translate>
          </div>
          {isChatBotEnabled && (
            <SearchAiInfoBlock onClick={handleOpenChatBot}>
              <Translate>Попробуйте спросить AI‑ассистента своими словами</Translate>
            </SearchAiInfoBlock>
          )}
        </>
      );

    if (showSearchHistory) return <SearchHistory searchHistory={searchHistory} />;

    return null;
  }, [
    handleOpenChatBot,
    isError,
    isEmptyResult,
    searchHistory,
    showSearchHistory,
    isChatBotEnabled,
  ]);

  const fetchSuggester = useCallback(
    async (q: string) => {
      try {
        const onError = (e: any) => {
          setIsError(true);
          console.error(e);
        };

        const data = await getSearch({ q, lang: currentLocale }, { onError });

        if (typeof data?.found !== 'number') {
          setIsError(true);
          return;
        }

        const hits = data?.grouped_hits?.flatMap((hit) => hit.hits);

        setSuggestions(hits ? buildSuggestions(hits) : []);
        setIsError(false);
      } catch {
        setIsError(true);
      } finally {
        trackSearchEvent({ search_query_sent_query: q.trim() });
        setIsLoading(false);
      }
    },
    [currentLocale, trackSearchEvent],
  );

  const handleSearch = useDebouncedFn(
    (q: string) => {
      if (!q.length) {
        setSuggestions(undefined);
        setIsError(false);
        return;
      }
      fetchSuggester(q);
    },
    { wait: 700 },
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let query = e.target.value;
      if (query.length > maxSearchQueryLength) query = query.slice(0, maxSearchQueryLength);
      const trimmed = query.trim();

      if (searchValue.trim() !== trimmed) {
        setIsLoading(true);
        setSuggestions(undefined);
        handleSearch.run(query);
      }
      setSearchValue(query);

      if (trimmed.length === 0) setIsLoading(false);
    },
    [handleSearch, searchValue],
  );

  const handleInputClear = useCallback(() => {
    setSearchValue('');
    setSuggestions(undefined);
    setIsLoading(false);
    setIsError(false);
    handleSearch.cancel();
  }, [handleSearch]);

  const handleOuterClick = useCallback(
    (event: MouseEvent<HTMLDivElement> | KeyboardEvent) => {
      event.stopPropagation();
      onClose();
    },
    [onClose],
  );

  const handlePageRedirect = useCallback(
    (item: SuggestItem | null) => {
      if (!item?.url) return;

      updateSearchHistory({
        url: item.url,
        highlight: item.highlight || item.name,
        name: item.name,
        hierarchy: item.hierarchy,
      });

      window.location.assign(item.url);
      onClose();
    },
    [onClose, updateSearchHistory],
  );

  useEffect(() => {
    document.body.classList.add(modalActiveClass);

    return () => {
      document.body.classList.remove(modalActiveClass);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') handleOuterClick(e);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleOuterClick]);

  return (
    <Downshift onChange={handlePageRedirect} itemToString={(item) => (item ? item.name : '')}>
      {({ getInputProps, getItemProps, getMenuProps, highlightedIndex }) => (
        <div className={s.wrapper} {...dataTestId(searchModalLocator.wrapper)}>
          <div className={s.background} onClick={handleOuterClick} />
          <div className={s.container}>
            <div className={s.inputBlockWrapper}>
              <button className={s.hideSearchBarButton} onClick={onClose}>
                <Icon name="arrowLeft" size={32} />
              </button>
              <label className={s.inputBlock}>
                {isLoading ? (
                  <Icon name="loader" size={24} className={s.loaderIcon} />
                ) : (
                  <Icon name="magnifier" size={24} className={s.magnifierIcon} />
                )}
                <input
                  ref={inputRef}
                  placeholder={searchInputPlaceholder}
                  {...getInputProps({ onChange: handleInputChange, value: searchValue })}
                  className={s.input}
                  autoFocus
                />
                {searchValue && (
                  <button type="button" className={s.clearBtn} onClick={handleInputClear}>
                    <Icon name="cross" size={24} />
                  </button>
                )}
              </label>
            </div>

            {isChatBotEnabled && !isEmptyResult && !suggestions && !isError && (
              <SearchAiInfoBlock onClick={handleOpenChatBot}>
                <Translate>Спросите AI-ассистента — он подскажет решение</Translate>
              </SearchAiInfoBlock>
            )}

            {menuComponent ||
              (suggestions ? (
                <ul {...getMenuProps({ className: s.suggesterList })}>
                  {suggestions.map((item, i) => (
                    // getItemProps уже прокидает key, поэтому дизейблим правило jsx-key
                    // eslint-disable-next-line react/jsx-key
                    <li
                      {...getItemProps({
                        key: item.id,
                        index: i,
                        item: item,
                        className: highlightedIndex === i ? s.highlightedElement : undefined,
                      })}
                    >
                      <Suggest {...item} />
                    </li>
                  ))}
                </ul>
              ) : null)}
          </div>
        </div>
      )}
    </Downshift>
  );
});

SearchModal.displayName = 'SearchModal';
