import React, { memo, useState, useCallback, useRef, useMemo } from 'react';
import { SrcCode } from '../SrcCode';
import s from './htmlExampleWithSrcCode.module.css';
import { mapExampleStyles } from '@theme/constants/styles';
import { compileHtmlTemplate } from '@shared/utils/html/compileHtmlTemplate';
import { useEnvConfig } from '@config/hooks';
import { InView } from '@shared/hooks/useInView';
import { SegmentedControl } from '@uiKit/SegmentedControl';
import Translate from '@docusaurus/Translate';

export interface HtmlExampleWithSrcCodeProps {
  /** Шаблонизированный html-код */
  children: string;
  iframeStyles?: React.CSSProperties;
}

export const HtmlExampleWithSrcCode = memo(
  ({ children, iframeStyles }: HtmlExampleWithSrcCodeProps) => {
    const { APIKEY_MAPGL, APIKEY_MAPGL_JSFIDDLE, APIKEY_NAVIGATION, APIKEY_PLACES } =
      useEnvConfig();
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [isHidden, setIsHidden] = useState(true);

    const inViewHandler = useCallback((entry: boolean) => {
      setIsHidden(!entry);
    }, []);

    const mapStyle = useMemo(
      () => ({
        ...mapExampleStyles,
        ...iframeStyles,
      }),
      [iframeStyles],
    );

    const tabsMap = {
      EXAMPLE: 'example',
      CODE: 'code',
    };

    return (
      <div className={s.wrapper}>
        <SegmentedControl.Root defaultValue={tabsMap.EXAMPLE}>
          <SegmentedControl.List className={s.tabs}>
            <SegmentedControl.Trigger value={tabsMap.EXAMPLE} className={s.tabButton}>
              <Translate>Интерактивный пример</Translate>
            </SegmentedControl.Trigger>
            <SegmentedControl.Trigger value={tabsMap.CODE} className={s.tabButton}>
              <Translate>Исходный код</Translate>
            </SegmentedControl.Trigger>
          </SegmentedControl.List>
          <div className={s.contentWrapper}>
            <SegmentedControl.Content value={tabsMap.EXAMPLE}>
              <InView onChange={inViewHandler}>
                {isHidden ? (
                  <div style={mapStyle}></div>
                ) : (
                  <iframe
                    srcDoc={compileHtmlTemplate(
                      {
                        mapgl: {
                          common: APIKEY_MAPGL,
                          jsFiddle: APIKEY_MAPGL_JSFIDDLE,
                        },
                        navi: APIKEY_NAVIGATION,
                        places: APIKEY_PLACES,
                      },
                      children,
                    )}
                    ref={iframeRef}
                    title="Example"
                    style={mapStyle}
                    frameBorder={0}
                    allow="geolocation"
                  />
                )}
              </InView>
            </SegmentedControl.Content>
            <SegmentedControl.Content value={tabsMap.CODE}>
              <SrcCode html={children} className={s.srcCodeWrapper} codeClassname={s.srcCode} />
            </SegmentedControl.Content>
          </div>
        </SegmentedControl.Root>
      </div>
    );
  },
);
HtmlExampleWithSrcCode.displayName = 'HtmlExampleWithSrcCode';
