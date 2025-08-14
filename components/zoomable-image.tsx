'use client';

// components/members/common/zoomable-image.tsx
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
// import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface ZoomableImageProps
  extends Omit<
    DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    'width' | 'height'
  > {
  src: string;
  alt: string;
  priority?: boolean;
  quality?: number;
  preserveAspectRatio?: boolean;
}

export default function ZoomableImage({
  src,
  alt,
  className,
  priority = false,
  preserveAspectRatio = true,
  ...props
}: ZoomableImageProps) {
  if (!src) return null;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={src}
          alt={alt || ''}
          sizes="100vw"
          className={className}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: preserveAspectRatio ? 'contain' : 'cover',
          }}
          width={500}
          height={300}
          priority={priority}
          {...props}
        />
      </DialogTrigger>
      <DialogContent
        className="w-screen h-screen max-w-none border-0 bg-black/95 p-2 sm:p-4 md:p-8"
        style={{ width: '100vw', height: '100vh', maxWidth: '100vw' }}
        onPointerDownOutside={(e) => {
          e.preventDefault();
          if (typeof document !== 'undefined') {
            document.dispatchEvent(
              new KeyboardEvent('keydown', { key: 'Escape' })
            );
          }
        }}
      >
        <DialogTitle className="sr-only">{alt || 'Image'}</DialogTitle>
        <div className="relative w-full h-full flex items-center justify-center overflow-auto">
          <img
            src={src}
            alt={alt || ''}
            className="min-w-[80vw] min-h-[80vh] w-auto h-auto"
            style={{ objectFit: 'contain', maxWidth: 'none' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
