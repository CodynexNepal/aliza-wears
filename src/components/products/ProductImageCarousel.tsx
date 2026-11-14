"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface ProductImageCarouselProps {
  images: string[];
  productName: string;
}

export function ProductImageCarousel({
  images,
  productName,
}: ProductImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const displayImages = images && images.length > 0 ? images : ["/placeholder.png"];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % displayImages.length);
  }, [displayImages.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  }, [displayImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape" && lightboxOpen) setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, lightboxOpen]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    const swipeThreshold = 45; // 45px swipe threshold
    if (diff > swipeThreshold) {
      handleNext();
    } else if (diff < -swipeThreshold) {
      handlePrev();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <div className="w-full select-none">
      {/* Main Showcase Image Container */}
      <div
        className="group relative aspect-square w-full overflow-hidden rounded-none border border-black/10 bg-[#F7F7F5]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={displayImages[currentIndex]}
          alt={`${productName} - Angle ${currentIndex + 1} of ${displayImages.length}`}
          className="h-full w-full object-cover transition-transform duration-300 ease-out"
          loading="eager"
        />

        {/* Counter Badge */}
        <div className="absolute bottom-3 right-3 rounded-none bg-[#0E0F0C] px-2.5 py-1 text-xs font-medium tabular-nums text-white">
          {currentIndex + 1} / {displayImages.length}
        </div>

        {/* Expand / Lightbox Button */}
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center bg-white/90 text-[#0E0F0C] opacity-0 transition-opacity hover:bg-white group-hover:opacity-100"
          aria-label="View full image"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </button>

        {/* Left Arrow Button */}
        {displayImages.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center bg-white text-[#0E0F0C] shadow-sm transition-all hover:bg-[#9FE870] active:scale-95 disabled:opacity-30"
            aria-label="Previous image"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Right Arrow Button */}
        {displayImages.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center bg-white text-[#0E0F0C] shadow-sm transition-all hover:bg-[#9FE870] active:scale-95 disabled:opacity-30"
            aria-label="Next image"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Thumbnail Strip */}
      {displayImages.length > 1 && (
        <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
          {displayImages.map((img, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Select product angle ${idx + 1}`}
                className={`relative h-20 w-20 shrink-0 overflow-hidden border-2 transition-all ${
                  isActive
                    ? "border-[#9FE870] ring-1 ring-[#9FE870]"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-6 top-6 rounded-none bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close fullscreen view"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative max-h-[85vh] max-w-[85vw]">
            <img
              src={displayImages[currentIndex]}
              alt={`${productName} Fullscreen`}
              className="max-h-[85vh] max-w-[85vw] object-contain"
            />
            {displayImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-[-50px] top-1/2 -translate-y-1/2 p-2 text-white hover:text-[#9FE870]"
                  aria-label="Previous image"
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-[-50px] top-1/2 -translate-y-1/2 p-2 text-white hover:text-[#9FE870]"
                  aria-label="Next image"
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
