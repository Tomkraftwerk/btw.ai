import React from 'react';
import { ExternalLink } from 'lucide-react';

const resources = [
  {
    title: "Wahlprogramme der Parteien",
    url: "https://www.bundestagswahl-bw.de/bundestagswahl-wahlprogramme",
    description: "Offizielle Wahlprogramme aller Parteien zur Bundestagswahl"
  },
  {
    title: "Bundeszentrale für politische Bildung",
    url: "https://www.bpb.de/politik/wahlen/bundestagswahl-2025",
    description: "Neutrale Informationen zur Bundestagswahl"
  },
  {
    title: "Wahl-O-Mat",
    url: "https://www.wahl-o-mat.de",
    description: "Finde heraus, welche Partei Deinen politischen Überzeugungen am nächsten steht"
  },
  {
    title: "abgeordnetenwatch.de",
    url: "https://www.abgeordnetenwatch.de",
    description: "Verfolge politische Entscheidungen und kommuniziere mit Abgeordneten"
  }
];

export default function Info() {
  return (
    <section id="info" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8">Informiere Dich</h2>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-yellow-700">
            <strong>Wichtiger Hinweis:</strong> Die dargestellten Bilder stellen keine Wahlempfehlung dar. 
            Bitte setze dich mit den konkreten Forderungen der Parteien zur Bundestagswahl 
            auseinander und informiere dich umfassend. Einige Link-Vorschläge dazu findest du unten.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold">{resource.title}</h3>
                <ExternalLink size={16} className="text-gray-400" />
              </div>
              <p className="text-gray-600">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
