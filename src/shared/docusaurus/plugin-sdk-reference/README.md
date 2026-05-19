# SDK Reference Plugin

[[_TOC_]]

## Зачем нужен плагин?

Автоматическая генерация страниц справочников API/SDK и сайдбаров к ним. Поддерживает

- Список semver-версий sdk.
- I18n для каждого справочника.

## Настройка плагина

Варианты настроек для каждого элемента справочника хранятся в `shared/docusaurus/plugin-sdk-reference/model/constants.ts`.
Подробное описание структуры объекта смотри в `shared/docusaurus/plugin-sdk-reference/model/types.ts`.

## Использование

### Добавь новый элемент в плагин

В `shared/docusaurus/plugin-sdk-reference/model/constants.ts` в массив `optionsArr` добавь объект с настройками.
Например, для iOS SDK:

```ts
export const optionsArr: PluginOptions[] = [
  //...
  {
    /** Уникалный идентификатор. Если используется несколько сущностей одного плагина, id не должны повторятся. */
    id: 'ios',

    /** JSON с метаинформацией про reference. Контракт JSON ищи в `./types/manifest.ts`. */
    manifestUrl: 'https://artifactory.2gis.dev/artifactory/sdk-docs-ios/manifest.json',

    /**
     * По какому пути в приложении строить ссылки.
     * Переменные
     * - `:version` (required) — версия sdk.
     * - `:type` (required) — тип сущностей в sdk, например, class, enum, struct и пр.
     */
    referenceUrlTemplate: 'ios/reference/:version/:type',
    /** Путь, по которому в приложении будут находиться элементы скачанные с манифеста. */
    referenceDirPath: 'ios/sdk/reference',
    sidebar: {
      /**
       * Уникальный идентификатор, который будет использоваться как placeholder
       * для замены в дереве сайдбаров.
       */
      replaceId: 'iossdk',
      /**
       * Название сайдбара (например, 'mapgljsapi'), в котором будут
       * размещены данные из манифеста.
       */
      fileName: 'iossdk.sidebar.ts',
      /**
       * Флаг, определяющий, нужно ли отображать версии в заголовках категорий.
       * Если true — в названиях категорий будет присутствовать номер версии.
       */
      showVersions: true,
    },
  },
  //...
];
```

### Добавь ссылки в навигации

На примере `iossdk.sidebar.ts`

```ts
import { createSDKSidebar } from './createSDKSidebar';

const sidebars: SidebarsConfig = {
  // ...
  ios: [
    ...createSDKSidebar(
      'iossdk',
    ) /* Обязательный параметр, который должен совпадать с `replaceId` указанный в optionsArr */,
  ],
};
```

### Запуск команды для генерации

Для генерации страниц справочников и сайдбаров необходимо запустить команду:

```bash
npm run "build-sdk-pages-dev" // Отображает только последнюю версию справочника для каждого раздела
```

или

```bash
npm run "build-sdk-pages-prod" / /Отображает все версии справочника для каждого раздела
```

## Особенности работы плагина

Страницы для сдк референсов локально генерируются только для самой последней, "стабильной", версии в каждом из разделов. На стэйджинге сборка происходит для всех версий. При добавлении новых разделов, пожалуйста расширьте список игнорируемых директорий /reference в .gitignore, результат работы скрипта не должен попадать в основной репозиторий.

### Hash-ссылки

В справочнике API есть возможность получить прямую ссылку (с подскроллом) на различные элементы: сущности, методы, свойства.  
Ссылка в этих случаях выглядит следующим образом:

- MapGL:

```
/{platform}/reference/{entityType}#{entityName}/{methodName | propertyName}
```

- iOS и Android

```
/{platform}/sdk/reference/{version}/{entityType}#{entityName}/{methodName | propertyName}
```

Например:

```
/mapgl/reference/class#circle-marker/listener

/ios/sdk/reference/stable/class#checkable-grouped-item/hash

/android/sdk/reference/stable/interface#ru.dgis.sdk.map.map-gesture-recognition-engine/process-motion-event
```

Логику генерации hash-части см в [generateAnchor](./lib/generateAnchor.ts).
