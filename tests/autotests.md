## Автотесты

### Установка зависимостей

```bash
npm ci
```

```bash
npx playwright install
```

### Запуск тестов

```bash
npm run test:ui
```

### Особенности тестов

- в данный момент представлены только скриншот-тесты
- для проверки верстки всех элементов используется специально-подготовленная страница [overview.mdx](../docs/test/overview.mdx)

### Обновление эталонных скриншотов

- Можно обновлять эталонные скриншоты через джобу в GitLab `update snapshots`, которая запускается вручную
- Либо локально через докер:

  1. Билдим образ с playwright:

  ```bash
  docker build -t playwright-docs -f ./docker/Dockerfile.playwright .
  ```

  1. Экспортируем переменную APP_URL. Со значением демки или стейджинга:

  ```bash
  export APP_URL=https://kit-docs-gefest-2783-scree-75coc9.web-staging.2gis.ru
  ```

  1. Запускаем команду обновления эталонов:

  ```bash
  docker run --rm --ipc=host \
  -v ./tests:/app/tests \
  -v ./src:/app/src \
  -v ./tsconfig.json:/app/tsconfig.json \
  -v ./playwright.config.ts:/app/playwright.config.ts \
  -v ./playwright-report:/app/playwright-report \
  -e APP_URL=${APP_URL} \
  -e CI=true \
  playwright-docs \
  npm run screen:test:update
  ```

### Дебаг скринтестов в докере

- Заранее нужно собрать и поднять приложение

  ```bash
    npm run start
  ```

  1. Билдим образ с playwright
  2. В поднятом контейнере запускаем UI-mode для дебага:

  ```bash
    docker exec -it docker-playwright-* npx playwright test --ui --ui-host 0.0.0.0 --ui-port 8888
  ```
