import React, { useState } from 'react';
import VisionSlide from './VisionSlide';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { visions } from '../../data/visions';

export default function VisionSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? visions.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === visions.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-900">
      <div className="max-w-[1800px] mx-auto relative">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slides Container */}
        <div className="flex justify-center items-center min-h-[600px] gap-2 p-8">
          {visions.map((vision, index) => (
            <VisionSlide
              key={vision.party}
              imageUrl={vision.imageUrl}
              party={vision.party}
              description={vision.description}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto px-6 py-12 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">{visions[activeIndex].party}</h2>
        <p className="text-lg mb-8">{visions[activeIndex].description}</p>
        <p className="text-sm opacity-75">
          Die KI wurde mit den offiziellen Wahlprogrammen der jeweiligen Parteien gefüttert und zeigt, 
          wie unsere Zukunft aussehen würde, wenn die Inhalte der Wahlprogramme jeweils zu 100% umgesetzt werden würden.
        </p>
      </div>
    </div>
  );
}