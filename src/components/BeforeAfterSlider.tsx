import React, { useState, useRef } from 'react';
import { cn } from '../lib/utils';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  className?: string;
}

export default function BeforeAfterSlider({ before, after, className }: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden cursor-ew-resize select-none rounded-xl', className)}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Background) */}
      <img src={after} alt="After" className="w-full aspect-video object-cover" />
      
      {/* Before Image (Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img src={before} alt="Before" className="w-full aspect-video object-cover max-w-none" style={{ width: containerRef.current?.offsetWidth }} />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0.5 h-4 bg-charcoal rounded-full" />
            <div className="w-0.5 h-4 bg-charcoal rounded-full" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-[10px] uppercase tracking-widest text-white">Before</div>
      <div className="absolute bottom-4 right-4 bg-electric-blue/50 backdrop-blur-sm px-2 py-1 rounded text-[10px] uppercase tracking-widest text-white">After</div>
    </div>
  );
}
