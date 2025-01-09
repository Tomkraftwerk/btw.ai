import React from 'react';
import Exhibition from './Exhibition';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8">Über das Projekt</h2>
        
        <div className="prose prose-lg text-gray-600 space-y-6">
          <p>
            Dieses Projekt verfolgt ein wichtiges Ziel: 
            Menschen dazu zu motivieren, sich intensiver mit den konkreten Inhalten der Wahlprogramme 
            auseinanderzusetzen – mit einem neuen KI-Ansatz.
          </p>

          <p>
            Wir möchten Dich einladen, Dich mit Deinem Einfluss auf unsere gesellschaftliche 
            Zukunft zu befassen. Deine Stimme bei der Wahl und Deine politische Beteiligung im Allgemeinen 
            sind wichtige Instrumente, um unsere Zukunft aktiv mitzugestalten.
          </p>
          
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-yellow-700">
            <strong>Disclaimer:</strong> Die dargestellten Bilder stellen keine Wahlempfehlung dar.
            KI bildet nicht die Realität ab und kann zudem Fehler machen.
            Bitte setze dich mit den konkreten Forderungen der Parteien zur Bundestagswahl 
            auseinander und informiere dich umfassend. Einige Link-Vorschläge dazu findest du unten.
          </p>
        </div>
          <div className="bg-gray-50 p-6 rounded-lg my-8">
            
            <p className="font-medium text-gray-900 mb-4">
              Wichtig zu beachten:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Die gezeigten Bilder und Texte bilden nicht die Realität ab. Sie stellen demnach
                ausdrücklich keine Wahlempfehlung dar.</li>
              <li>Eine Zukunftsvision, die für Einzelne positiv erscheint, muss nicht zwangsläufig 
                für die gesamte Gesellschaft vorteilhaft sein. Sprich mit anderen darüber, wie sie 
                sich eine positive Zukunft vorstellen.</li>
              <li>Das Projekt dient der Veranschaulichung von Wahlprogrammen und dem Aufzeigen von Möglichkeiten
                von künstlicher Intelligenz. Es wird laufend aktualisiert und weiterentwickelt. 
                Konstruktives Feedback ist daher mehr als willkommen!</li>
            </ul>
          </div>

          <Exhibition />

          <p>
            Das Ziel des Projekts ist es, durch die visualisierten Zukunftsszenarien eine tiefergehende 
            Diskussion über politische Visionen anzuregen und die Bedeutung politischer 
            Partizipation hervorzuheben.
          </p>
        </div>
      </div>
    </section>
  );
}
