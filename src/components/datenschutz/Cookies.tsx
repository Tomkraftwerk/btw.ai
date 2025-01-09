import React from 'react';

export default function Cookies() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Reichweitenmessung & Cookies</h2>
      <div className="space-y-4">
        <p>
          Diese Website verwendet Cookies zur pseudonymisierten Reichweitenmessung, die entweder von unserem Server oder dem Server Dritter an den Browser des Nutzers übertragen werden. Bei Cookies handelt es sich um kleine Dateien, welche auf Ihrem Endgerät gespeichert werden. Ihr Browser greift auf diese Dateien zu. Durch den Einsatz von Cookies erhöht sich die Benutzerfreundlichkeit und Sicherheit dieser Website.
        </p>
        <p>
          Falls Sie nicht möchten, dass Cookies zur Reichweitenmessung auf Ihrem Endgerät gespeichert werden, können Sie dem Einsatz dieser Dateien hier widersprechen:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="http://optout.networkadvertising.org/?c=1#!/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
              Cookie-Deaktivierungsseite der Netzwerkwerbeinitiative
            </a>
          </li>
          <li>
            <a href="http://optout.aboutads.info/?c=2#!/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
              Cookie-Deaktivierungsseite der US-amerikanischen Website
            </a>
          </li>
          <li>
            <a href="http://optout.networkadvertising.org/?c=1#!/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
              Cookie-Deaktivierungsseite der europäischen Website
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}