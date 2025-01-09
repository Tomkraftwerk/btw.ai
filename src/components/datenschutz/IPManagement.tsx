import React from 'react';

export default function IPManagement() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Impressum-Privatschutz (IP-Management)</h2>
      <div className="space-y-4">
        <p>
          Wir verwenden für die Verwaltung der an uns gesendeten Post die Dienstleistungen der IMPRESSUMPRIVATSCHUTZ GmbH, Ludwig-Erhard-Str. 18, 20459 Hamburg. Dieser Dienstleister bietet eine sichere und zuverlässige Postanschrift für unser Projekt (z.B. Impressum, Datenschutzerklärung, Widerrufsbelehrung und ggf. weitere Bereiche). Dies stellt auch unser berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO dar.
        </p>
        <p>
          Wir haben mit Impressum-Privatschutz einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung dieser Dienstleistung vollständig um. Weitere Informationen über Datenschutz bei Impressum-Privatschutz GmbH finden Sie hier:{' '}
          <a 
            href="https://impressumprivatschutz.de/datenschutzerklaerung/"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://impressumprivatschutz.de/datenschutzerklaerung/
          </a>
        </p>
      </div>
    </section>
  );
}