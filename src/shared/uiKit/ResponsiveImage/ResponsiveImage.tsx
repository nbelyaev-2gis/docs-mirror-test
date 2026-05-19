import React, { memo } from 'react';

export type SourceItem = {
  media?: string;
  srcSet: string;
  type?: string;
  sizes?: string;
};

export type ResponsiveImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  sources?: SourceItem[];
  pictureClassName?: string;
};

export const ResponsiveImage = memo<ResponsiveImageProps>(
  ({ src, alt, srcSet, sizes, sources = [], loading = 'lazy', pictureClassName, ...imgProps }) => {
    const image = (
      <img src={src} alt={alt} srcSet={srcSet} sizes={sizes} loading={loading} {...imgProps} />
    );

    if (sources.length > 0) {
      return (
        <picture className={pictureClassName}>
          {sources.map((s, i) => (
            <source
              key={i}
              media={s.media}
              srcSet={s.srcSet}
              type={s.type}
              sizes={s.sizes ?? sizes}
            />
          ))}
          {image}
        </picture>
      );
    }

    return image;
  },
);
ResponsiveImage.displayName = 'ResponsiveImage';
