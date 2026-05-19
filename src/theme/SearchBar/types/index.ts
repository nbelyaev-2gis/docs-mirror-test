export type Document = {
  /**
   * Ключи — иерархия, заданная в конфиге скраппера. Например, "lvl0", "lvl1".
   * Значения — найденные строки в документе.
   */
  hierarchy: Record<string, string | null>;

  /**
   * Значение иерархии, по которому был найден документ.
   * `lvl0` — самый верхний уровень иерархии.
   *
   * Как правило, здесь записывается самый низкий уровень иерархии в найденном документе.
   *
   * @example "lvl0"
   */
  type?: string;

  /**
   * @example "http://example.com#anchor"
   */
  url: string;

  /**
   * @example "http://example.com"
   */
  url_without_anchor: string;

  /**
   * ID объекта в БД
   * @example "98782dd842c17eb13f8c97784a2ffe41c87463b5"
   */
  objectID: string;
};

export type Suggest = {
  id: string;
  name: string;
  hierarchy: string[];
  url: string;
  highlight: string | undefined;
};

export type SearchHistoryElement = Pick<Suggest, 'url' | 'highlight' | 'name' | 'hierarchy'>;

export type SuggestItem = {
  id: string;
  name: string;
  hierarchy: string[];
  url: string;
  highlight: string | undefined;
};
