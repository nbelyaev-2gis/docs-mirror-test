import React, {
  memo,
  MemoExoticComponent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import s from './searchButton.module.css';
import { Icon } from '@shared/icons';
import { createPortal } from 'react-dom';
import { useOs } from '@shared/hooks/useOS';
import Translate from '@docusaurus/Translate';
import { cn } from '@shared/utils';
import type { SearchModalProps } from './SearchModal';
import { SearchShortcut } from './SearchShortcut';
import { modalActiveClass } from '../model/constants';

let DocSearchModal: MemoExoticComponent<({ onClose }: SearchModalProps) => ReactNode> | null = null;

interface Props {
  variant: 'primary' | 'secondary';
  size?: 'compact' | 'default';
  showShortcut?: boolean;
  inputClassName?: string;
}

export const SearchButton = memo(
  ({ variant = 'primary', size = 'compact', showShortcut = false, inputClassName }: Props) => {
    const { os } = useOs();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const searchContainer = useRef<HTMLDivElement | null>(null);

    const importDocSearchModalIfNeeded = useCallback(() => {
      if (DocSearchModal) {
        return Promise.resolve();
      }

      return Promise.all([
        import('./SearchModal') as Promise<typeof import('./SearchModal')>,
        import('./searchModal.module.css'),
      ]).then(([{ SearchModal }]) => {
        DocSearchModal = SearchModal;
      });
    }, []);

    const onOpen = useCallback(() => {
      importDocSearchModalIfNeeded().then(() => {
        if (!document.body.classList.contains(modalActiveClass)) {
          const container = document.createElement('div');
          document.body.insertBefore(container, document.body.firstChild);
          searchContainer.current = container;
          setIsModalOpen(true);
        }
      });
    }, [importDocSearchModalIfNeeded]);

    const onClose = useCallback(() => {
      setIsModalOpen(false);
      searchContainer.current?.remove();
      searchContainer.current = null;
    }, []);

    useEffect(() => {
      if (!os) return;

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.code !== 'KeyK') return;

        if ((os === 'macos' && event.metaKey) || event.ctrlKey) {
          event.preventDefault();
          if (!document.body.classList.contains(modalActiveClass)) onOpen();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [onOpen, os]);

    const searchBar = useMemo(
      () =>
        size === 'compact' ? (
          <button className={s.compact} onClick={onOpen}>
            <Icon name="magnifier" size={24} />
          </button>
        ) : (
          <button className={cn(s.wrapper, s[variant])} onClick={onOpen}>
            <Icon name="magnifier" size={24} className={s.icon} />
            <div className={cn(s.input, inputClassName)}>
              <p className={s.placeholder}>
                <Translate>Поиск</Translate>
              </p>
            </div>
            {showShortcut && <SearchShortcut />}
          </button>
        ),
      [onOpen, size, variant, showShortcut, inputClassName],
    );

    return (
      <>
        {searchBar}

        {isModalOpen &&
          DocSearchModal &&
          searchContainer.current &&
          createPortal(<DocSearchModal onClose={onClose} />, searchContainer.current)}
      </>
    );
  },
);

SearchButton.displayName = 'SearchButton';
