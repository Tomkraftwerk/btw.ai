import React, { useState } from 'react';
import { visions } from '../data/visions';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function VisionGrid() {
  const [expandedVision, setExpandedVision] = useState<string | null>(null);
  const [expandedChallenges, setExpandedChallenges] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Zukunftsvisionen 2025</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          "Wie würde unsere Zukunft aussehen, wenn 100% der jeweiligen Wahlprogramme vollständig umgesetzt werden?"
        </p>
        
        <div className="bg-gray-50 rounded-lg p-6 text-gray-600 max-w-3xl mx-auto">
          <p className="mb-4">
            Eine KI wurde mit den offiziellen Wahlprogrammen (
            <a 
              href="https://www.bundestagswahl-bw.de/bundestagswahl-wahlprogramme" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Link
            </a>
            ) der jeweiligen Parteien gefüttert und zeigt, wie unsere Zukunft aussehen würde, wenn die Inhalte der Wahlprogramme jeweils zu 100% umgesetzt werden würden.
          </p>
          <p className="mb-4">
            Im Nachhinein wurde die KI gebeten, die Bilder zu beschreiben und zu erklären, welche Inhalte der Wahlprogramme schwer zu visualisieren waren.
          </p>
          <p>
            Die Ergebnisse sind unbearbeitet und basieren alle auf den gleichen Prompts. Sie sollen veranschaulichen und stellen keine Wahlempfehlung dar.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {visions.map((vision) => (
          <div key={vision.party} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <div className="relative aspect-w-16 aspect-h-9">
              <img
                src={vision.imageUrl}
                alt={`Vision ${vision.party}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <span className="font-semibold">{vision.party}</span>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <button
                  onClick={() => setExpandedVision(expandedVision === vision.party ? null : vision.party)}
                  className="w-full flex items-center justify-between text-left hover:text-blue-600 transition-colors"
                >
                  <span className="font-semibold text-lg">KI Erklärung</span>
                  {expandedVision === vision.party ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {expandedVision === vision.party && (
                  <div className="mt-4 prose prose-sm max-w-none text-gray-600">
                    <p>{vision.description}</p>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setExpandedChallenges(expandedChallenges === vision.party ? null : vision.party)}
                  className="w-full flex items-center justify-between text-left hover:text-blue-600 transition-colors"
                >
                  <span className="font-semibold text-lg">Was war schwer darzustellen?</span>
                  {expandedChallenges === vision.party ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {expandedChallenges === vision.party && (
                  <div className="mt-4 space-y-6">
                    {vision.challenges.map((challenge, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-900 mb-2">{challenge.category}</h4>
                        <ul className="space-y-2 text-gray-600">
                          {challenge.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start">
                              <span className="block w-1.5 h-1.5 mt-2 mr-2 rounded-full bg-gray-400 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}