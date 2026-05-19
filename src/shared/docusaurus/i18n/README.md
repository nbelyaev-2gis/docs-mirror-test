# I18n (Internationalization)

[[_TOC_]]

## Запуск проекта на другом языке

Для запуска проекта на английском введите команду `npm run start -- --locale en` в терминал.  
На момент написания документации доступно два языка: en и ru. Если в дальнейшем появятся другие локали, замените en на необходимое значение.  
Для запуска проекта в русской локали запустите команду `npm run start`

## Как работаем с переводами в проекте

### Работа в рамках React

#### Работа в простом компоненте

Для любого React-кода, который вы написали сами: страницы, компоненты и т. д. — используйте API docusaurus для перевода.  
Все тексты в React-коде, которые будут видны пользователям, должны быть помечены с помощью API перевода.  
Существует два типа API:  
Компонент `<Translate>` — оборачивает строку в JSX-элемент. Подробнее о компоненте:  
<https://docusaurus.io/docs/docusaurus-core#translate>

Пример:

```jsx
<Translate
  values={{
    blogLink: (
      <Link to="https://docusaurus.io/blog">
        <Translate>Блог</Translate>
      </Link>
    ),
  }}
>
  {'Можете перейти по ссылке {blogLink}'}
</Translate>
```

Функция `translate()` — принимает сообщение и возвращает строку. Подробнее о функции:  
<https://docusaurus.io/docs/docusaurus-core#translate-imperative>

Пример:

```jsx
<img
  src="/img/home.png"
  alt={translate({
    message: 'Иконка домой',
  })}
/>
```

Указывать id и description необходимости нет. В качестве id по умолчанию будет использоваться текст из message.

Используйте тот вариант, который лучше всего подходит по смыслу в конкретном контексте.  
Например, `<Translate>` можно использовать в качестве дочернего элемента в JSX, тогда как для пропсов, ожидающих строку, лучше подойдёт функция `translate()`.

#### Работа в компоненте с рендерингом из массива

Текст всегда должен быть статичным, т.к. команда `write-translations` в Docusaurus использует только статический анализ кода.  
Она не запускает ваш сайт. Поэтому динамические сообщения не могут быть извлечены.

Пример:

**Плохо:**

```jsx
const items = [
  { id: 1, title: 'Привет' },
  { id: 2, title: 'Мир' },
];

function ItemsList() {
  return (
    <ul>
      {/* ТАК ДЕЛАТЬ НЕ НАДО: не работает с write-translations */}
      {items.map((item) => (
        <li key={item.id}>
          <Translate>{item.title}</Translate>
        </li>
      ))}
    </ul>
  );
}
```

**Хорошо:**

```jsx
const items = [
  { id: 1, title: <Translate>Привет</Translate> },
  { id: 2, title: <Translate>Мир</Translate> },
];

function ItemsList() {
  return (
    <ul>
      {/* Теперь заголовки уже переведены при рендеринге! */}
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```

## Добавление новых переводов

### Добавление переводов для React компонентов

Перед началом работы изучите инструкцию по работе с [React компонентами](#работа-в-рамках-react)  
После реализации react компонента запустите команду `npm run write-translations-en`.  
В результате выполнения команды в файле [code.json](../../../../i18n/en/code.json) появятся новые строки для перевода.

Пример:

```json
{
  "Блог": {
    "message": "Блог"
  }
}
```

Найти необходимую строку можно по id. id в данном случае будет равен наименованию, например `"Блог"`.

Для перевода замените значение из поля message на переведенное.

Пример после перевода:

```json
{
  "Блог": {
    "message": "Blog"
  }
}
```

### Добавление переводов для navbar (header)

Необходимо, например, после добавления нового элемента в [getNav.ts](../../../config/nav/getNav.ts).  
Запустите команду `npm run write-translations-en`.  
Перейдите в файл [navbar.json](../../../../i18n/en/docusaurus-theme-classic/navbar.json).  
В нем появятся новые строки для перевода.

Пример:

```json
{
  "item.label.Поиск": {
    "message": "Поиск",
    "description": "Navbar item with label Поиск"
  }
}
```

Найти необходимую строку можно по id. Все id элементов navbar будут начинаться с `item.label.`, поэтому поиск лучше осуществлять по наименования, например `Поиск`.

Для перевода замените значение из поля message на нужное.
Пример после перевода:

```json
{
  "item.label.Поиск": {
    "message": "Search",
    "description": "Navbar item with label Search"
  }
}
```

Ссылка на оригинальную доку:  
<https://docusaurus.io/docs/api/themes/configuration#i18n>

### Добавление переводов для footer

Необходимо, например, после добавления нового элемента в footer.  
Запустите команду `npm run write-translations-en`.  
Перейдите в файл [footer.json](../../../../i18n/en/docusaurus-theme-classic/footer.json).  
В нем появятся новые строки для перевода.  
Для перевода замените значение из поля message на нужное.  
Найти необходимую строку можно по id. Все id элементов navbar будут начинаться с `link.title.`, поэтому поиск лучше осуществлять по наименованиям.

Ссылка на оригинальную доку:  
<https://docusaurus.io/docs/api/themes/configuration#i18n>

### Добавление переводов для sidebar

Запустите команду `npm run write-translations-en`.  
Перейдите в файл [docusaurus-plugin-content-docs/current.json](../../../../i18n/en/docusaurus-plugin-content-docs/current.json).  
В нем появятся новые строки для перевода.

Пример:

```json
{
  "sidebar.radar.doc.Обзор": {
    "message": "Обзор",
    "description": "The label for the doc item Обзор in sidebar radar, linking to the doc api/navigation/radar/overview"
  }
}
```

Найти необходимую строку можно по id. Из примера выше:  
`sidebar` — это объект, который находится в [sidebars.ts](../../../../sidebars.ts),  
внутри объекта sidebar есть поле `radar`. Внутри radar есть документ, поэтому обращаемся к `.doc`, далее выбираем название документа `'Обзор'`.

Для перевода замените значение из поля message на нужное.
Пример после перевода:

```json
{
  "sidebar.radar.doc.Обзор": {
    "message": "Overview",
    "description": "The label for the doc item Overview in sidebar radar, linking to the doc api/navigation/radar/overview"
  }
}
```

Дополнительный пример с category:

```json
{
  "sidebar.geocoder.category.Справочник API": {
    "message": "Справочник API",
    "description": "The label for category Справочник API in sidebar geocoder"
  }
}
```

`sidebar` — это объект, который находится в [sidebars.ts](../../../../sidebars.ts),  
внутри объекта sidebar есть поле `geocoder`. Внутри `geocoder` есть объект `category`, поэтому обращаемся к `.category`, из всего списка выбираем нужное название категории `'Справочник API'`.

Пример после перевода:

```json
{
  "sidebar.radar.category.Справочник API": {
    "message": "API Reference",
    "description": "The label for category API Reference in sidebar geocoder"
  }
}
```

Ссылка на оригинальную доку:  
<https://docusaurus.io/docs/api/themes/configuration#i18n>

### Добавление переводов для файлов md

После завершения работы над файлом md скопируйте путь данного файла и по этому же пути поместите новый файл в папку  
[docusaurus-plugin-content-docs/current](../../../../i18n/en/docusaurus-plugin-content-docs/current).

Пример:  
Хотим добавить перевод для файла [examples.mdx](../../../../docs/api/navigation/directions/examples.mdx).  
Смотрим его путь начиная с `/api` и получаем `/api/navigation/directions/examples.mdx`.  
Кладем новый файл в [docusaurus-plugin-content-docs/current](../../../../i18n/en/docusaurus-plugin-content-docs/current) + полученный url.  
В итоге файл должен быть помещен в  
[examples.mdx](../../../../i18n/en/docusaurus-plugin-content-docs/current/api/navigation/directions/examples.mdx).  
Далее переводим файл по этому пути на английский язык.

Ссылка на оригинальную доку:  
<https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#translation-files-location>

### Примечание

Для всех локалей процесс перевода идентичен за исключением замены `en` на любую другую локаль.
