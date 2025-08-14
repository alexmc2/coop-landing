'use client';

import { useState } from 'react';
import ZoomableImage from '@/components/zoomable-image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  className?: string;
}

export default function ImageCarousel({ images, className = '' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  if (images.length === 0) {
    return (
      <div className="relative aspect-video w-full bg-slate-900 flex items-center justify-center rounded-xl">
        <p className="text-slate-600">No images available</p>
      </div>
    );
  }

  return (
    <div className={`relative aspect-video w-full overflow-hidden ${className}`}>
      {/* Carousel controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-slate-900/80 hover:bg-slate-800 rounded-full p-2 transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-slate-900/80 hover:bg-slate-800 rounded-full p-2 transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </>
      )}
      
      {/* Sliding carousel container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, idx) => (
          <div key={idx} className="w-full flex-shrink-0 h-full">
            <ZoomableImage
              src={image.src}
              alt={image.alt}
              className="cursor-zoom-in object-cover object-top w-full h-full"
            />
          </div>
        ))}
      </div>
      
      {/* Image indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                idx === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}