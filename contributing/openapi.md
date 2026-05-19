# OpenAPI

OpenAPI-документация отображается с помощью [Redocusaurus](https://redocusaurus.vercel.app/), используя компонент `ApiDocMdx`.

## Как добавить новый OpenAPI-документ

1. Откройте файл `src/config/openApi/openApiData.ts`. В нем представлен массив `openApiData`. Добавьте в любое место массива новый объект по типу:

   ```json
   {
     "id": "DirectionsAPI", // уникальный идентификатор
     "openapiUrl": {
       "private": {
         "en": "https://navi-swagger-ui.web-staging.2gis.ru/public_schemas/DirectionsAPI_en.json", // ссылка на private схему для английского языка
         "ru": "https://navi-swagger-ui.web-staging.2gis.ru/public_schemas/DirectionsAPI_ru.json" // ссылка на private схему для русского языка
       },
       "public": {
         "en": "http://traffic.gitlab-pages.2gis.io/navi-schema-registry/DirectionsAPI_en.json", // ссылка на public схему для английского языка
         "ru": "http://traffic.gitlab-pages.2gis.io/navi-schema-registry/DirectionsAPI_ru.json" // ссылка на public схему для русского языка
       }
     }
   }
   ```

2. Навигация на сайте строится по файловой структуре в папке `docs`, поэтому перейдите в директорию, которую хотите преобразовать, внутри папки `docs/`.

3. Создайте новый `.mdx` файл с названием в формате: `{название}.mdx` например `DirectionsAPI.mdx`

4. Внутри созданного файла добавьте следующую структуру:

   ```mdx
   ---
   title: POST /carrouting/6.0.1/global
   ---

   import ApiDocMdx from '@theme/ApiDocMdx';

   <ApiDocMdx id="DirectionsAPI" />
   ```

   Объяснение полей:  
   title — поле, которое будет отображаться в левом боковом меню и в верхней части страницы в качестве заголовка.  
   id — уникальный идентификатор OpenAPI-документа. Он должен совпадать с id из пункта 1.
