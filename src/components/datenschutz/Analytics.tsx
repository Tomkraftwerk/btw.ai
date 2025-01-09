import React from 'react';

export default function Analytics() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Google Analytics</h2>
      <div className="space-y-4">
        <p>
          Diese Website nutzt aufgrund unserer berechtigten Interessen zur Optimierung und Analyse unseres Online-Angebots im Sinne des Art. 6 Abs. 1 lit. f. DSGVO den Dienst „Google Analytics", welcher von der Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) angeboten wird.
        </p>
        <p>
          Google LLC hält das europäische Datenschutzrecht ein und ist unter dem Privacy-Shield-Abkommen zertifiziert:{' '}
          <a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
            Privacy Shield
          </a>
        </p>
        <p>
          Auf dieser Website greift die IP-Anonymisierung. Die IP-Adresse der Nutzer wird innerhalb der Mitgliedsstaaten der EU und des Europäischen Wirtschaftsraum und in den anderen Vertragsstaaten des Abkommens gekürzt.
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Weitere Informationen</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a href="https://policies.google.com/privacy/partners?hl=de" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                Daten, die von Google-Partnern erhoben werden
              </a>
            </li>
            <li>
              <a href="https://adssettings.google.de/authenticated" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                Einstellungen über Werbung
              </a>
            </li>
            <li>
              <a href="https://policies.google.com/technologies/ads?hl=de" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                Verwendung von Cookies in Anzeigen
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}