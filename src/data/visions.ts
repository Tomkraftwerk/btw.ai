export interface Vision {
  party: string;
  imageUrl: string;
  description: string;
  challenges: {
    category: string;
    points: string[];
  }[];
}

export const visions: Vision[] = [
  {
    party: 'BÜNDNIS 90/DIE GRÜNEN',
    imageUrl: 'https://i.ibb.co/R3QwG3K/GR-NE.webp',
    description: 'Dieses Bild zeigt eine nachhaltige Stadt der Zukunft, inspiriert von der ökologischen und sozialen Vision von Bündnis 90/Die Grünen. Im Mittelpunkt stehen Gebäude mit bepflanzten Fassaden und Solarpaneelen, die Natur und Architektur harmonisch verbinden. Urbane Gärten und Gemeinschaftsflächen fördern die Eigenversorgung und stärken das Miteinander der Bewohnerinnen und Bewohner. Am Stadtrand erzeugen Windturbinen und Solarfelder saubere Energie, während im Stadtzentrum emissionsfreie Verkehrsmittel wie Fahrräder, elektrische Busse und Straßenbahnen eine umweltfreundliche Mobilität gewährleisten. Grüne Parks und Wasserwege schaffen Oasen der Ruhe und laden zu Erholung und Austausch ein. Die Menschen nutzen nachhaltige Technologien, engagieren sich in Recycling-Initiativen und genießen kulturelle Veranstaltungen in offenen, barrierefreien Räumen. Diese Stadt verkörpert die Grundwerte der Grünen: Klimaschutz, soziale Gerechtigkeit und Innovation, getragen von einer Vision, in der Fortschritt und Umwelt in Einklang stehen.',
    challenges: [
      {
        category: 'Finanz- und Verbraucherschutz',
        points: [
          'Transparenz bei Stromkosten: Angabe des durchschnittlichen Strompreises auf Energierechnungen, um Verbrauchern Wechselmöglichkeiten zu zeigen.',
          'Nachhaltige Finanzprodukte: Mindeststandards und Normen für nachhaltige Finanzprodukte sowie Schutz vor „Greenwashing" sind abstrakte regulatorische Ziele.'
        ]
      },
      {
        category: 'Internationale Zusammenarbeit',
        points: [
          'OECD-Zusagen und Klima-Finanzierung: Ziel, 0,7 % des Bruttonationaleinkommens für Entwicklungszusammenarbeit bereitzustellen, ist eher ein finanzielles als visuelles Konzept.',
          'Europäischer Green Deal: Fokus auf die Implementierung von Maßnahmen wie „Fit for 55" ist organisatorisch und nicht direkt bildlich umsetzbar.'
        ]
      },
      {
        category: 'Industrie und Technologie',
        points: [
          'Grüne Leitmärkte: Einführung von Mindestquoten für klimaneutrale Produkte wie Stahl und Zement ist ein marktregulatorisches Ziel.',
          'Klimaschutzverträge: Förderung von CO₂-Einsparung durch finanzielle Anreize und Verträge bleibt ein abstraktes Instrument.'
        ]
      },
      {
        category: 'Demokratische Reformen',
        points: [
          'Bürgerräte: Die Etablierung von Bürgerbeteiligungsgremien zur Förderung demokratischer Prozesse ist schwer visuell darstellbar.',
          'Föderale Reformen: Änderungen an der Aufgabenverteilung zwischen Bund, Ländern und Kommunen sind eher strukturell und administrativ.'
        ]
      },
      {
        category: 'Landwirtschaft und Ernährung',
        points: [
          'Kartellrecht für Lebensmittelhandel: Maßnahmen gegen unfaire Preise in der Lebensmittelproduktion und für kostendeckende Verträge sind juristisch und nicht visuell.',
          'Förderung alternativer Proteine: Entwicklung neuer Märkte wie pflanzliche Proteine oder Hanf als Baumaterial bleibt technologisch und abstrakt.'
        ]
      }
    ]
  },
  {
    party: 'Alternative für Deutschland',
    imageUrl: 'https://i.ibb.co/z5YhfZD/afd.webp',
    description: 'Dieses Bild zeigt eine futuristische Stadt, inspiriert vom Wahlprogramm der AfD. Traditionelle Energiequellen wie Kohlekraftwerke, moderne Gaskraftwerke und Kernkraftanlagen dominieren das Stadtbild, symbolisieren Versorgungssicherheit und Unabhängigkeit. Breite Autobahnen mit Verbrennungsmotorfahrzeugen und moderne Tankstellen verdeutlichen die Priorität des motorisierten Individualverkehrs. Grenzkontrollen mit Barrieren, Kameras und Sicherheitskräften repräsentieren nationale Souveränität und Sicherheit. Urbane Hochhäuser stehen neben familienfreundlichen Wohnvierteln mit Einfamilienhäusern und Gärten, die Tradition und Ordnung betonen. Deutsche Flaggen setzen ein klares Zeichen für nationale Identität und Pragmatismus. Dieses Bild veranschaulicht die Vision der AfD für eine geordnete, traditionelle und souveräne Zukunft.',
    challenges: [
      {
        category: 'Wirtschaft und Finanzpolitik',
        points: [
          'Target-2-Risiken und Forderungen: Die Forderung, deutsche Target-2-Guthaben durch ausländische Sachwerte wie Gold oder Aktien zu monetarisieren, ist komplex und abstrakt.',
          'Ablehnung der Europäischen Bankenunion: Die Forderung nach einer strikten Begrenzung nationaler Bankhaftung lässt sich nur schwer visuell umsetzen.'
        ]
      },
      {
        category: 'Gesellschaftliche und kulturelle Werte',
        points: [
          'Ablehnung von "Gender-Mainstreaming": Die Forderung, gendergerechte Sprache aus öffentlichen Einrichtungen zu entfernen, ist sprachlich und konzeptuell, nicht visuell.',
          'Schutz der deutschen Leitkultur: Das Konzept der Leitkultur ist abstrakt und kulturell symbolisch, aber schwer visuell darstellbar.'
        ]
      },
      {
        category: 'Bildungspolitik',
        points: [
          'Verpflichtende Deutschförderung in Kitas: Die Forderung, Deutsch als Pflichtsprache in Kindergärten durchzusetzen, ist eine bildlich schwer umsetzbare, konzeptuelle Idee.'
        ]
      },
      {
        category: 'Politische Forderungen',
        points: [
          'Rückzug aus supranationalen Organisationen: Die Forderung nach einer „nationalen Souveränität" über internationale Politik hinaus ist schwer zu visualisieren, da sie eher ein politisches Prinzip als ein physisches Konzept darstellt.'
        ]
      },
      {
        category: 'Technologische und digitale Themen',
        points: [
          'Ablehnung von staatlicher Datensammlung: Die Forderung, digitale Souveränität zu stärken und Datenschutz zu priorisieren, ist eher technisch und weniger visuell.'
        ]
      }
    ]
  },
  {
    party: 'SPD',
    imageUrl: 'https://i.ibb.co/SVq6CK2/SPD.webp',
    description: 'Dieses Bild zeigt eine zukunftsorientierte Stadt, die die Vision der SPD für soziale Gerechtigkeit, wirtschaftlichen Fortschritt und ökologische Verantwortung widerspiegelt. Im Mittelpunkt stehen bezahlbare, moderne Wohngebäude, die allen Bürgerinnen und Bürgern ein sicheres Zuhause bieten. Weitläufige Grünflächen und Parks schaffen Erholungsräume und fördern den gesellschaftlichen Zusammenhalt. Zuverlässige öffentliche Verkehrsmittel wie Straßenbahnen und elektrische Busse verbinden die Stadtteile, während Windturbinen und Solarpaneele eine saubere und klimafreundliche Energieversorgung gewährleisten. Schulen, Krankenhäuser und Gemeinschaftszentren stehen für die starke öffentliche Daseinsvorsorge, die im Mittelpunkt der Politik der SPD steht. Menschen engagieren sich in kulturellen Veranstaltungen, nutzen öffentliche Räume für gemeinschaftliche Aktivitäten und genießen den Zugang zu hochwertigen öffentlichen Dienstleistungen. Dieses Bild verkörpert die Grundwerte der SPD: soziale Sicherheit, Chancengleichheit und Fortschritt für alle, getragen von einem starken und gerechten Sozialstaat.',
    challenges: [
      {
        category: 'Kultur und Kreativwirtschaft',
        points: [
          'Förderung von Popkultur und Games: Die SPD plant, Popkultur und Games als gemeinnützige Kulturgüter zu fördern. Sie sieht auch langfristige Förderprogramme für Kinos und kulturelle Einrichtungen vor.',
          'Regulierung von KI und Plattformen: Faire Vergütungsregeln für digitale Inhalte sowie eine Stärkung europäischer Alternativen zu chinesischen und amerikanischen Plattformen.'
        ]
      },
      {
        category: 'Gesellschaftliche und soziale Themen',
        points: [
          'Europäische Sozialunion: Umsetzung europäischer Mindeststandards bei nationalen Grundsicherungen und Schaffung einer Sozialunion. Dies ist eher ein Konzept als ein visuell darstellbares Element.',
          'Faire Entlohnung: Details wie transparente Vergütung im digitalen Musikmarkt oder EU-weite Regelungen sind abstrakte Prinzipien.'
        ]
      },
      {
        category: 'Internationale Zusammenarbeit',
        points: [
          'Just Energy Transition Partnerships (JETPs): Partnerschaften für klimafreundliche Entwicklung in Afrika, Asien und Lateinamerika sind schwer darstellbare, multilaterale Konzepte.',
          'Internationale Klimaclubs: Förderung von globalen Netzwerken für Klimaschutz, was mehr ein politisches Instrument als ein physisches Element ist.'
        ]
      },
      {
        category: 'Verteidigungs- und Sicherheitspolitik',
        points: [
          'Modernisierung der Bundeswehr: Viele Vorschläge, wie z. B. die Attraktivitätssteigerung der Bundeswehr als Arbeitgeber, sind abstrakt und organisatorischer Natur.'
        ]
      },
      {
        category: 'Staatliche Effizienz',
        points: [
          'Digitalisierung der Verwaltung: Die Vision eines bürgernahen, digitalen und modernen Staates ist mehr ein Verwaltungsziel als ein visuell darstellbarer Zustand.'
        ]
      }
    ]
  },
  {
    party: 'CDU/CSU',
    imageUrl: 'https://i.ibb.co/4Ykkv0Z/Union.webp',
    description: 'Dieses Bild zeigt eine starke, innovative Stadt, die die Vision der Union (CDU/CSU) für Deutschland 2025 verkörpert. Breite Autobahnen, moderne Schienennetze und Ladestationen für Elektroautos stehen für eine fortschrittliche und pragmatische Mobilität. Eine ausgewogene Energieversorgung, die Kernkraft, Wind- und Solaranlagen kombiniert, symbolisiert Versorgungssicherheit und Nachhaltigkeit. Familienfreundliche Viertel mit bezahlbarem Wohnraum, Grünflächen, Schulen und Kitas stehen für den sozialen Zusammenhalt. Märkte und Gewerbezonen unterstreichen die Stärke der sozialen Marktwirtschaft. Traditionelle und moderne Architektur verbinden kulturelles Erbe mit Innovation. Ordnung und Sicherheit prägen die öffentlichen Räume. Diese Vision vereint wirtschaftliche Stärke, Fortschritt und gesellschaftliche Stabilität.',
    challenges: [
      {
        category: 'Steuer- und Finanzpolitik',
        points: [
          'Schutz deutscher Sparer: Absage an die Haftung Deutschlands für Schulden anderer EU-Staaten ist ein regulatorisches Konzept, das nicht visuell darstellbar ist.',
          'Schuldenbremse und Haushaltsdisziplin: Das Konzept der langfristigen Schuldenbegrenzung und Haushaltskonsolidierung ist finanzieller Natur und schwer zu visualisieren.'
        ]
      },
      {
        category: 'Bürokratieabbau',
        points: [
          'Reduktion von Klagemöglichkeiten bei Infrastrukturprojekten: Der Abbau von Verbandsklagerechten und die Verkürzung von Instanzenwegen sind rechtliche Maßnahmen und nicht physisch sichtbar.',
          'Genehmigungsfiktionsregelung: Die automatische Erteilung von Genehmigungen nach Ablauf bestimmter Fristen bleibt ein verwaltungstechnisches Konzept.'
        ]
      },
      {
        category: 'Europapolitik',
        points: [
          'Ein Europa der Wettbewerbsfähigkeit: Die Schaffung von marktwirtschaftlich orientierten Strukturen und Regelungen in der EU ist konzeptionell und schwer bildlich umsetzbar.',
          'Kritik an zentralistischen EU-Strukturen: Die Forderung nach einer dezentralen EU-Governance ist eine abstrakte politische Debatte.'
        ]
      },
      {
        category: 'Soziale Werte und Familienpolitik',
        points: [
          'Förderung der Leitkultur: Die Idee einer „deutschen Leitkultur" ist kulturell und politisch symbolisch, jedoch schwierig visuell darstellbar.',
          'Aktivrente und Frühstartrente: Individuelle Rentenmodelle mit steuerlichen Vorteilen bleiben abstrakte finanzpolitische Maßnahmen.'
        ]
      },
      {
        category: 'Digitalisierung und Innovation',
        points: [
          'Einführung digitaler Fahrzeugakten: Die Digitalisierung von Verwaltungsprozessen wie Kfz-Anmeldungen ist technisch-administrativ und nicht visuell greifbar.',
          'Forschung und Entwicklung: Steuerliche Anreize und Innovationsoffensiven bleiben wirtschaftliche Ziele und schwer direkt darstellbar.'
        ]
      }
    ]
  },
  {
    party: 'FDP',
    imageUrl: 'https://i.ibb.co/tPsYTbJ/fdp.webp',
    description: 'Dieses Bild zeigt eine fortschrittliche, innovative Stadt, die die Vision der FDP für Deutschland 2025 verkörpert. Eine lebendige Innovationszone mit modernen Glasgebäuden, Start-up-Hubs und Märkten spiegelt wirtschaftliche Dynamik wider. Fortschrittliche Mobilität wird durch autonome Busse, E-Bikes und Ladestationen für Elektrofahrzeuge dargestellt. Die Stadt ist digital vernetzt, mit sichtbarer 5G-Infrastruktur und Smart-City-Technologien, die das Leben vereinfachen. Nachhaltigkeit zeigt sich in urbanen Gärten, begrünten Dächern und Gebäuden mit integrierten Solaranlagen. Dieses Bild vereint die Kernelemente der FDP-Politik: Freiheit, wirtschaftliche Innovation und technologische Exzellenz in einer zukunftsorientierten, lebenswerten Stadt.',
    challenges: [
      {
        category: 'Steuer- und Finanzpolitik',
        points: [
          'Schlanke Staatsfinanzen: Die Forderung nach einer Schuldenbremse und Haushaltskonsolidierung ist eher ein politisches Prinzip als ein visuelles Konzept.',
          'Rückführung von Subventionen: Die Idee, Subventionen zu reduzieren und private Investitionen zu fördern, ist abstrakt und schwer greifbar.'
        ]
      },
      {
        category: 'Digitalisierung und Verwaltungsreformen',
        points: [
          'KI-Bürgerassistent: Unterstützung durch künstliche Intelligenz bei Behördengängen ist digital und nicht visuell.',
          'Digitale Wallets: Sichere, digitale Dokumentenspeicherung ist eine technische Lösung und schwer darzustellen.'
        ]
      },
      {
        category: 'Europapolitik',
        points: [
          'Ablehnung von EU-Schuldenfonds: Die Forderung nach einer Begrenzung der Verschuldungskompetenz der EU bleibt ein abstraktes finanzpolitisches Ziel.'
        ]
      },
      {
        category: 'Energie und Technologie',
        points: [
          'Kernfusion und neue Kernkraftwerkstechnologien: Förderung von Thorium- und Dual-Fluid-Reaktoren bleibt eine technologische Vision ohne aktuelle physische Beispiele.',
          'Marktwirtschaftlicher Klimaschutz: Einsatz des CO₂-Zertifikatehandels als zentraler Mechanismus ist eine wirtschaftliche Strategie und nicht visuell greifbar.'
        ]
      },
      {
        category: 'Bildung und Forschung',
        points: [
          'Lebenslanges Lernen: Die Förderung neuer Bildungsmodelle und Exzellenzstrategien bleibt organisatorisch und schwer konkret darstellbar.'
        ]
      }
    ]
  },
  {
    party: 'Bündnis Sahra Wagenknecht',
    imageUrl: 'https://i.ibb.co/x1MjPGz/bsw.webp',
    description: 'Dieses Bild zeigt eine moderne Stadt, inspiriert von der Vision der BSW (Bündnis Sahra Wagenknecht) für Deutschland 2025. Im Zentrum steht eine pragmatische Energiepolitik: Saubere Gaskraftwerke und Biogasanlagen sind sichtbar in die Stadt integriert und symbolisieren eine nachhaltige, bezahlbare Energieversorgung. Die Stadt vereint funktionale Wohnkonzepte wie moderne Wohnkomplexe mit grünen Dächern und Eigenheime mit Gärten, die ein familienfreundliches und individuelles Leben ermöglichen. Ein Kran im Stadtbild deutet auf die aktive Entwicklung und den Ausbau von bezahlbarem Wohnraum sowie die kontinuierliche Modernisierung der Infrastruktur hin. Öffentliche Einrichtungen wie barrierefreie Kliniken und Schulen spiegeln die Priorität der BSW auf soziale Gerechtigkeit und Zugänglichkeit wider. Dieses Bild zeigt eine zukunftsfähige Stadt, die soziale Balance, Nachhaltigkeit und Pragmatismus vereint.',
    challenges: [
      {
        category: 'Demokratie und Mitbestimmung',
        points: [
          'Einführung von Referenden auf Bundesebene: Direkte Mitbestimmung durch Volksentscheide und Vetos gegen parlamentarische Entscheidungen ist konzeptionell und abstrakt.',
          'Absenkung des Wahlalters auf 16 Jahre: Ein strukturelles Ziel ohne physische Darstellungsmöglichkeit.'
        ]
      },
      {
        category: 'Sozialpolitik',
        points: [
          'Sozial gestaffelte Energiepreise: Einführung von Sockeltarifen für Strom und Heizung, die nach Verbrauch steigen, ist ein finanztechnisches Modell, nicht visuell.',
          'Energie-Soli für Reiche: Zuschlag auf Einkommens- und Kapitalertragssteuer als vorübergehende Maßnahme ist eine finanzpolitische Idee.'
        ]
      },
      {
        category: 'Wirtschaft und Regulierung',
        points: [
          'Kartellrecht im Lebensmittelhandel: Maßnahmen gegen Monopole und Einführung von Mindesterzeugerpreisen bleiben juristische und wirtschaftliche Konzepte.',
          'Deckelung von Dispozinsen: Zinssätze für Überziehungskredite begrenzen ist ein regulatorisches Ziel und schwer darstellbar.'
        ]
      },
      {
        category: 'Internationale Solidarität',
        points: [
          'Schuldenschnitt für den globalen Süden: Einführung eines Staateninsolvenzverfahrens und nachhaltige Entschuldungsinitiativen für hochverschuldete Länder sind eher politisch-strategische Ziele.'
        ]
      },
      {
        category: 'Gesundheit und Bildung',
        points: [
          'Kommunale Versorgungszentren: Ein Konzept für integrierte Gesundheitsversorgung ist schwer darzustellen.',
          'Tarifverträge für studentische Beschäftigte: Förderung von Arbeitsrechten bleibt abstrakt und nicht physisch darstellbar.'
        ]
      }
    ]
  },
  {
    party: 'Volt',
    imageUrl: 'https://i.ibb.co/vxhRZ1r/volt.webp',
    description: 'Dieses Bild zeigt eine moderne, europäisch geprägte Stadt der Zukunft, die Volts Vision einer vernetzten und nachhaltigen Gesellschaft widerspiegelt. Innovative Mobilitätskonzepte wie autonome Fahrzeuge und ein ausgebautes öffentliches Verkehrsnetz verbinden die Stadtteile. Moderne Architektur mit integrierten Solarpanelen und begrünten Fassaden symbolisiert die Verbindung von Technologie und Nachhaltigkeit. Digitale Infrastruktur und Smart-City-Lösungen prägen das Stadtbild, während öffentliche Plätze und Kultureinrichtungen den europäischen Gemeinschaftsgedanken betonen. Die Stadt verkörpert Volts Kernwerte: europäische Integration, digitale Innovation und nachhaltige Entwicklung.',
    challenges: [
      {
        category: 'Europäische Integration',
        points: [
          'Harmonisierung von Verwaltungsstrukturen: Die Angleichung verschiedener nationaler Systeme ist komplex',
          'Grenzüberschreitende Zusammenarbeit: Koordination zwischen verschiedenen Verwaltungsebenen'
        ]
      },
      {
        category: 'Digitale Transformation',
        points: [
          'E-Government-Lösungen: Integration verschiedener digitaler Verwaltungssysteme',
          'Datenschutz und Cybersicherheit: Balance zwischen Digitalisierung und Privatsphäre'
        ]
      },
      {
        category: 'Bildung und Mobilität',
        points: [
          'Europäischer Bildungsraum: Vereinheitlichung von Bildungsstandards',
          'Grenzüberschreitende Mobilität: Harmonisierung von Verkehrssystemen'
        ]
      },
      {
        category: 'Wirtschaft und Innovation',
        points: [
          'Paneuropäische Startup-Förderung: Koordination verschiedener nationaler Fördersysteme',
          'Digitaler Binnenmarkt: Integration unterschiedlicher nationaler Märkte'
        ]
      },
      {
        category: 'Klimaschutz und Energie',
        points: [
          'Europäisches Energienetz: Koordination nationaler Energiesysteme',
          'Grenzüberschreitender Klimaschutz: Harmonisierung verschiedener Umweltstandards'
        ]
      }
    ]
  }
];