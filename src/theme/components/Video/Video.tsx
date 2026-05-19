import { memo, VideoHTMLAttributes } from 'react';

type Props = VideoHTMLAttributes<HTMLVideoElement>;

export const Video = memo<Props>(({ src, width, ...elseProps }) => {
  return (
    <video
      src={src}
      controls
      muted
      loop
      style={{ maxWidth: width === undefined ? '100%' : `min(${width}, 100%)` }}
      {...elseProps}
    />
  );
});
Video.displayName = 'Video';
