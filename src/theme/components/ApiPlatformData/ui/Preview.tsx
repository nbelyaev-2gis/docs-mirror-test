import { memo } from 'react';
import { getApiPlatformServicesInfo } from '@config/nav';
import { ApiPlatformServiceKey } from '@config/nav/types';
import { makeOverlayImage } from '@config/nav/utils';
import { cn } from '@shared/utils/css/cn';
import { ResponsiveImage } from '@shared/uiKit/ResponsiveImage';

import s from './Preview.module.css';

type Props = {
  serviceInfo: ReturnType<typeof getApiPlatformServicesInfo>[ApiPlatformServiceKey];
};

const baseImage = makeOverlayImage('/img/docs-nav/services/service-maps-view');

export const Preview = memo<Props>(({ serviceInfo }) => {
  const overlayImage = serviceInfo.overlayImage;

  return (
    <div className={s.previewWrap}>
      <div className={s.previewDots}>
        <span className={s.previewDot} />
        <span className={s.previewDot} />
        <span className={s.previewDot} />
      </div>
      <div className={s.images}>
        <ResponsiveImage
          pictureClassName={s.previewPicture}
          className={cn(s.previewImage, overlayImage && s.blurredImage)}
          src={baseImage.src}
          alt={serviceInfo.title}
          sources={baseImage.sources}
        />
        {overlayImage && (
          <ResponsiveImage
            pictureClassName={cn(s.previewPicture, s.overlayPicture)}
            className={s.overlayImage}
            src={overlayImage.src}
            alt={serviceInfo.title}
            sources={overlayImage.sources}
          />
        )}
      </div>
    </div>
  );
});
Preview.displayName = 'Preview';
