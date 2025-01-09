import React from 'react';
import { MessageSquare, Share2, Info } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gray-50 min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Wie kann ich dir helfen?
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <input
                type="text"
                placeholder="Wie würde unsere Zukunft aussehen, wenn dieses Wahlprogramm zu 100% umgesetzt wird?"
                className="w-full p-4 text-lg border rounded-lg"
              />
              
              <div className="flex justify-center space-x-6 mt-4">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <MessageSquare size={24} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Share2 size={24} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Info size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}