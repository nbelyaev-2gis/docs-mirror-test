# Button в MDX

[[_TOC_]]

## Общее

Для CTA-кнопок используй React-компонент `<CtaButton />`.

- Хорошо. Внутренняя ссылка.

  ```tsx
  <CtaButton to="/pro/overview">Начать</CtaButton>
  ```

- Хорошо. Внешняя абсолютная ссылка.

  ```tsx
  <CtaButton href="https://platform.2gis.ru" target="_blank">
    Перейти в кабинет
  </CtaButton>
  ```

- Хорошо. Ссылка на сервис (с auto-resolve домена).

  ```tsx
  <CtaButton to="/playground" service="plm">
    Перейти в кабинет
  </CtaButton>
  ```

  Резолвится в `https://platform.2gis.ru/playground` (или `https://platform.urbi.ae/playground` для урби)

- Плохо. Обычная ссылка, если нужен CTA-стиль кнопки.

  ```tsx
  <a href="https://platform.2gis.ru">Перейти в кабинет</a>
  ```

## Reference

### `to` / `href` / `service`

Обязательный параметр. Используй один из вариантов:

- **`to`** — внутренний путь документации (например, `/pro/overview`).

  - Если задан `service`, к базовому URL из маппинга сервиса добавляется путь `to`. Итоговый URL: `{serviceUrl}{to}`.
  - Если `service` не задан, будет обработана как внутренняя ссылка Docusaurus.

- **`href`** — абсолютный URL, не обрабатывается (используется как есть).

- **`service`** — опциональный ключ из реестра сервисов (`ServiceKey`). Используется только вместе с `to`. Полный URL берётся из маппинга `SERVICES_BY_BRAND` по текущему бренду. Доступные ключи: `plm`.

По умолчанию страницы открываются в новой вкладке.

### `appearance`

Вариант оформления кнопки. Поддерживаются:

- `primary`
- `outline`
- `lightFill`
- `transparent`

По умолчанию: `primary`.

### `size`

Размер кнопки. Поддерживаются: `32`, `40`, `48`.

По умолчанию: `40`.

### `target`, `rel`

Опциональные параметры ссылки.

Для `target="_blank"` безопасный `rel="noopener noreferrer"` подставляется автоматически, если не задан вручную.
