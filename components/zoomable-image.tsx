'use client';

// components/members/common/zoomable-image.tsx
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import { XIcon } from 'lucide-react';
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
        className="w-screen h-screen max-w-none border-0 bg-white/95 dark:bg-black/95 p-4 sm:p-6 md:p-8"
        style={{ width: '100vw', height: '100vh', maxWidth: '100vw' }}
        showCloseButton={false}
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
        <div className="relative w-full h-full">
          <DialogClose className="absolute top-2 right-2 sm:-top-2 sm:-right-2 z-50 rounded-full bg-slate-600 hover:bg-slate-500 p-2.5">
            <XIcon className="h-5 w-5 text-white" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={src}
              alt={alt || ''}
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
