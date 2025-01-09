import React from 'react';

export default function Exhibition() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg my-8">
      <h3 className="text-xl font-semibold mb-4">KI-Vernissage & Ausstellungen</h3>
      <div className="space-y-4">
        <p>
          Die KI-generierten Bilder wurden bereits im Rahmen der Landtagswahl in Brandenburg
          in Form einer KI-Vernissage in Luckenwalde und Dahme (Mark) ausgestellt. Dabei wurden
          Passanten und Schulklassen durch die Ausstellung geführt und konnten gemeinsam über
          die "Zukunftsvisionen" diskutieren.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="aspect-w-4 aspect-h-3">
            <img
              src="https://i.ibb.co/CHQWVrN/Bild1.jpg"
              alt="KI-Vernissage in historischem Gebäude"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="aspect-w-4 aspect-h-3">
            <img
              src="https://i.ibb.co/LS92Zrw/Bild2.jpg"
              alt="Besucher betrachten KI-generierte Bilder"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>

        <p>
          Diese Möglichkeit besteht weiterhin. Falls Du die
          Bilder selbst ausstellen möchtest, schreib uns einfach und wir stellen dir kostenlos die Druckdaten und eine
          Anleitung zur Verfügung.
        </p>
        <p className="font-medium">
          Interessiert? Kontaktiere uns per{' '}
          <a 
            href="mailto:hallo@bundestagswahl.ai"
            className="text-blue-600 hover:text-blue-800"
          >
            E-Mail
          </a>
          {' '}oder über Social-Media.
        </p>
      </div>
    </div>
  );
}