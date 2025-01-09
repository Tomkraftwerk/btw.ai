import React from 'react';

export default function Newsletter() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Newsletter-Abonnement</h2>
      <div className="space-y-4">
        <p>
          Der Websitebetreiber bietet Ihnen einen Newsletter an, in welchem er Sie über aktuelle Geschehnisse und Angebote informiert. Möchten Sie den Newsletter abonnieren, müssen Sie eine valide E-Mail-Adresse angeben.
        </p>
        <p>
          Widerruf und Kündigung: Ihre Einwilligung zum Erhalt des Newsletter können Sie jederzeit widerrufen und somit das Newsletter-Abonnement kündigen. Nach Ihrer Kündigung erfolgt die Löschung Ihre personenbezogenen Daten. Ihre Einwilligung in den Newsletterversand erlischt gleichzeitig. Am Ende jedes Newsletters finden Sie den Link zur Kündigung.
        </p>
      </div>
    </section>
  );
}