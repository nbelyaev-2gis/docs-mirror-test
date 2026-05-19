import { useEffect, useState } from 'react';
import useLatest from '@shared/hooks/useLatest';

export const SYNC_STORAGE_EVENT_NAME = 'SYNC_STORAGE_EVENT_NAME';

export type SetState<S> = S | ((prevState?: S) => S);

export interface Options<T> {
  defaultValue?: T | (() => T);
  listenStorageChange?: boolean;
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
  onError?: (error: unknown) => void;
}

export function createUseStorageState(getStorage: () => Storage | undefined) {
  function useStorageState<T>(key: string, options: Options<T> = {}) {
    let storage: Storage | undefined;
    const {
      listenStorageChange = false,
      onError = (e) => {
        console.error(e);
      },
    } = options;

    // https://github.com/alibaba/hooks/issues/800
    try {
      storage = getStorage();
    } catch (err) {
      onError(err);
    }

    const serializer = (value: T) => {
      if (options.serializer) {
        return options.serializer(value);
      }
      return JSON.stringify(value);
    };

    const deserializer = (value: string) => {
      if (options.deserializer) {
        return options.deserializer(value);
      }
      return JSON.parse(value);
    };

    function getStoredValue() {
      try {
        const raw = storage?.getItem(key);
        if (raw) {
          return deserializer(raw);
        }
      } catch (e) {
        onError(e);
      }
      if (options.defaultValue && options.defaultValue instanceof Function) {
        return options.defaultValue();
      }
      return options.defaultValue;
    }

    const [state, setState] = useState<T>(getStoredValue);

    useEffect(() => {
      setState(getStoredValue());
    }, [key]);

    const updateState = (value: SetState<T>) => {
      const currentState = value instanceof Function ? value(state) : value;

      if (!listenStorageChange) {
        setState(currentState);
      }

      try {
        let newValue: string | null;
        const oldValue = storage?.getItem(key);

        if (currentState === undefined) {
          newValue = null;
          storage?.removeItem(key);
        } else {
          newValue = serializer(currentState);
          storage?.setItem(key, newValue);
        }

        dispatchEvent(
          // send custom event to communicate within same page
          // importantly this should not be a StorageEvent since those cannot
          // be constructed with a non-built-in storage area
          new CustomEvent(SYNC_STORAGE_EVENT_NAME, {
            detail: {
              key,
              newValue,
              oldValue,
              storageArea: storage,
            },
          }),
        );
      } catch (e) {
        onError(e);
      }
    };

    // from another document
    useEffect(() => {
      if (!listenStorageChange) return;

      const handler = (event: StorageEvent) => {
        if (event.key === key && event.storageArea === storage) {
          setState(getStoredValue());
        }
      };

      window.addEventListener('storage', handler);
      return () => window.removeEventListener('storage', handler);
    }, [key, storage, listenStorageChange]);

    // from current document
    useEffect(() => {
      if (!listenStorageChange) return;

      const handler = (event: Event) => {
        const customEvent = event as CustomEvent<StorageEvent>;
        const { key: eventKey, storageArea } = customEvent.detail || {};

        if (eventKey === key && storageArea === storage) {
          setState(getStoredValue());
        }
      };

      window.addEventListener(SYNC_STORAGE_EVENT_NAME, handler);
      return () => window.removeEventListener(SYNC_STORAGE_EVENT_NAME, handler);
    }, [key, storage, listenStorageChange]);

    return [state, useLatest(updateState).current as (value: SetState<T>) => void] as const;
  }

  return useStorageState;
}
