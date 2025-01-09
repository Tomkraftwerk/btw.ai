import React from 'react';

export default function AccessData() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Zugriffsdaten</h2>
      <p className="mb-4">
        Wir, der Websitebetreiber bzw. Seitenprovider, erheben aufgrund unseres berechtigten Interesses (s. Art. 6 Abs. 1 lit. f. DSGVO) Daten über Zugriffe auf die Website und speichern diese als „Server-Logfiles" auf dem Server der Website ab. Folgende Daten werden so protokolliert:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Besuchte Website</li>
        <li>Uhrzeit zum Zeitpunkt des Zugriffes</li>
        <li>Menge der gesendeten Daten in Byte</li>
        <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
        <li>Verwendeter Browser</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Verwendete IP-Adresse</li>
      </ul>
      <p>
        Die Server-Logfiles werden für maximal 7 Tage gespeichert und anschließend gelöscht. Die Speicherung der Daten erfolgt aus Sicherheitsgründen, um z. B. Missbrauchsfälle aufklären zu können. Müssen Daten aus Beweisgründen aufgehoben werden, sind sie solange von der Löschung ausgenommen bis der Vorfall endgültig geklärt ist.
      </p>
    </section>
  );
}