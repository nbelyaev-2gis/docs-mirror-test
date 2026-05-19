import { useTrackEvent } from './useTrackEvent';
import { GAEventsMap } from './types';

export const useTrackGAEvent = <E extends keyof GAEventsMap>(event: E) => {
  const trackEvent = useTrackEvent<GAEventsMap[E]>(event);
  return trackEvent;
};
