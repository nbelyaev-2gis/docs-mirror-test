# Video в MDX

[[_TOC_]]

## Общее

Используй React-компонент `<Video />`.

- Хорошо. React-компонент.

  ```tsx
  <Video src="path_to_static_file" />
  ```

- Плохо. Html-тег `video`.

  ```tsx
  <video src="path_to_static_file" />
  ```

## Reference

### `src`

Путь до статичного файла.

### `width`

Масимальная ширина блока. Свойство учитывает адаптивность родительского контейнера.

```tsx
<Video src="path_to_static_file" width="900px" />
```

### Другие свойства

См. атрибуты html-тега `video`, https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video. Используй их в нотации React.
