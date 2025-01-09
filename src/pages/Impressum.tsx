import React from 'react';

export default function Impressum() {
  return (
    <div className="flex-grow bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Inhalte gemäß §5 DDG</h2>
            <p>
              Max Mundhenke (Einzelunternehmer)<br />
              c/o IP-Management #3771<br />
              Ludwig-Erhard-Str. 18<br />
              20459 Hamburg
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Kontaktdaten</h2>
            <p>
              E-Mail: max.mundhenke[at]gmx.de<br />
              Telefon: (+49)0174-1883586
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Umsatzsteuer-Identifikationsnummer</h2>
            <p>
              gemäß § 27 a Umsatzsteuergesetz:<br />
              DE355862840
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Redaktionell verantwortlich</h2>
            <p>Max Mundhenke</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a 
                href="https://ec.europa.eu/consumers/odr/"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-2">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}