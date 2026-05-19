import { memo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import s from './withAnchorButton.module.css';

type Props = {
  anchor: string;
  children: React.ReactNode;
};

/**
 * Компонент, который позволяет добавить кнопку-якорь в компонент CodeBlock
 */
export const WithAnchorButton = memo<Props>(({ anchor, children }) => {
  const [targetElement, setTargetElement] = useState<Element | null>(null);

  useEffect(() => {
    setTimeout(() => {
      // Экранируем разрешённые в sanitizeRefNameForUrl спец. символы, иначе получим невалидный селектор
      const escapedAnchor = anchor.replace(/([./])/g, '\\$1');
      const anchorElements = document.querySelectorAll(`#${escapedAnchor}`);

      const buttonsContainerSelector = '[class^="buttonGroup_"]';
      const initialButtonsLength = 2; // исходно есть только кнопки переноса строк и копирования

      /**
       * dirty hack для случая, когда у класса есть несколько методов с одинаковым именем (перегрузки)
       * см. пример /ios/sdk/reference/stable/interface#iimagefactory - 4 метода make()
       * Понимания как с этим быть пока нет, поэтому данная реализация лишь гарантирует, что в каждом
       * из этих методов будет своя кнопка-якорь
       */
      if (anchorElements.length) {
        const target = Array.from(anchorElements).find((el) => {
          const buttons = el.querySelector(buttonsContainerSelector);

          return buttons && buttons.children.length === initialButtonsLength;
        });

        if (target) {
          setTargetElement(target.querySelector(buttonsContainerSelector));
        }
      }
    }, 100); // ждем, пока Docusaurus отрендерит CodeBlock и кнопки
  }, [anchor, targetElement]);

  return (
    <div className={s.container}>
      {children}
      {targetElement &&
        createPortal(
          <a href={'#' + anchor} className={s.hashButton}>
            #
          </a>,
          targetElement,
        )}
    </div>
  );
});

WithAnchorButton.displayName = 'WithAnchorButton';
