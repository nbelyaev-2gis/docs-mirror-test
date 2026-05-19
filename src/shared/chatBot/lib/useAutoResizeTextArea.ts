import { useEffect, RefObject } from 'react';

type Params = {
  value: string;
  ref: RefObject<HTMLTextAreaElement | null>;
  maxRows: number;
};

export const useAutoResizeTextArea = ({ ref, maxRows, value }: Params) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Предполагаем, что по умолчанию TextArea пустая
    const initialHeight = el.scrollHeight;
    const maxHeight = initialHeight * maxRows;

    const handleInput = () => {
      // Увеличиваем высоту по мере ввода текста
      if (el.scrollHeight <= maxHeight) {
        el.style.overflowY = 'hidden';
        el.style.height = 'auto';
        el.style.height = el.scrollHeight + 'px';
      } else {
        // Ушли за максимальное количество строк. Включаем скролл
        el.style.overflowY = 'auto';
        el.style.height = maxHeight + 'px';
      }
    };

    el.addEventListener('input', handleInput);
    return () => el.removeEventListener('input', handleInput);
  }, [ref, maxRows]);

  // Сброс высоты при очистке текста
  useEffect(() => {
    const el = ref.current;
    if (!el || value !== '') return;

    el.style.height = 'auto';
  }, [value, ref]);
};
