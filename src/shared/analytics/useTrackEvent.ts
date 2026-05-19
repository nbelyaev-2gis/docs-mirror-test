import { useCallback } from 'react';
import { gtag } from './gtag';

type ArrayOrSingle<T> = Array<T> | T;

type TrackFn<T> = T extends undefined ? () => void : (params: T) => void;

/**
 * Возвращает функцию, с помощью которой можно трекнуть событие в Google Analytics одновременно.
 * Данный метод позволяет отправлять контекстную информацию, например id элемента
 *
 * ```
 * const trackEvent = useTrackEvent('something');
 * trackEvent({ value: 123 });
 * ```
 *
 * Это то же самое, что:
 *
 * ```
 * gtag('event', 'something', { value: 123 });
 * ```
 */
export const useTrackEvent = <
  T extends
    | Record<string, ArrayOrSingle<number | boolean | string> | undefined>
    | undefined = undefined,
>(
  eventName: string,
): TrackFn<T> => {
  return useCallback(
    ((params: T) => {
      if (typeof window !== 'undefined') {
        gtag('event', eventName, { ...params });
      }
    }) as TrackFn<T>,
    [eventName],
  );
};
