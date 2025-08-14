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
        className="w-screen h-screen max-w-none border-0 bg-black/90 p-4 sm:p-4 md:p-8"
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
        <div className="w-full h-full flex flex-col gap-4 pt-8">
          <div className="flex justify-end">
            <DialogClose className="rounded-full bg-white hover:bg-gray-100 p-2 transition-colors shadow-lg">
              <XIcon className="h-6 w-6 text-black" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
          <div className="flex-1 flex items-center justify-center overflow-auto">
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
