import { ClassRef } from './refs/class';
import { MethodRef } from './refs/method';
import { InterfaceRef } from './refs/interface';
import { TypeAliasRef } from './refs/typeAlias';
import { EnumerationRef } from './refs/enumeration';
import { ExtensionRef } from './refs/extension';
import { StructRef } from './refs/struct';

export type Reference =
  | TypeAliasRef
  | InterfaceRef
  | MethodRef
  | ClassRef
  | EnumerationRef
  | ExtensionRef
  | StructRef;

export interface ReferencesMap {
  /**
   * urlPath - путь, по которому будет открываться Reference.
   * Например, "/ru/reference/geocoder".
   * @deprecated urlPath. Пути страниц определяет плагин.
   */
  [urlPath: string]: Reference;
}

export interface SdkReference {
  /**
   * Конфиг для автосборки референса
   * Дополняется по мере развития проекта
   */
  config: {
    /**
         * Как обрабатывать текст в таких блоках как
           "описание метода" - markdown или готовый HTML
         */
    textProvider: 'html' | 'md';
  };

  /**
   * Карта вида "путь до reference -> конфиг reference",
   * Пример:
   * {
   *  "/ru/reference/geocoder": { type: 'typeAlias' }
   * }
   */
  refMap: ReferencesMap;
}
