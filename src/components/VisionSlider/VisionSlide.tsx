import React from 'react';

interface VisionSlideProps {
  imageUrl: string;
  party: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

export default function VisionSlide({ imageUrl, party, description, isActive, onClick }: VisionSlideProps) {
  return (
    <div
      onClick={onClick}
      className={`
        relative transition-all duration-500 ease-in-out cursor-pointer
        ${isActive ? 'w-[60%] opacity-100 z-20' : 'w-[20%] opacity-60 hover:opacity-80 z-10'}
      `}
    >
      <div className="h-[600px] relative overflow-hidden">
        <img
          src={imageUrl}
          alt={`Vision ${party}`}
          className="w-full h-full object-cover"
        />
        {isActive && (
          <div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-full shadow-lg">
            <span className="font-bold text-lg">{party}</span>
          </div>
        )}
      </div>
    </div>
  );
}