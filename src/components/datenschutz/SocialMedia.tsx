import React from 'react';

export default function SocialMedia() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Nutzung von Social-Media-Plugins von Meta</h2>
      <div className="space-y-4">
        <p>
          Aufgrund unseres berechtigten Interesses an der Analyse, Optimierung und dem Betrieb unseres Online-Angebotes (im Sinne des Art. 6 Abs. 1 lit. f. DSGVO), verwendet diese Website das Facebook-Social-Plugin, welches von der Facebook Inc. (1 Hacker Way, Menlo Park, California 94025, USA) betrieben wird.
        </p>
        <p>
          Facebook Inc. hält das europäische Datenschutzrecht ein und ist unter dem Privacy-Shield-Abkommen zertifiziert:{' '}
          <a href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
            Privacy Shield
          </a>
        </p>
        <p>
          Weitere Informationen zum Datenschutz bei Facebook finden Sie hier:{' '}
          <a href="https://www.facebook.com/about/privacy/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
            Facebook Datenschutzrichtlinien
          </a>
        </p>
      </div>
    </section>
  );
}