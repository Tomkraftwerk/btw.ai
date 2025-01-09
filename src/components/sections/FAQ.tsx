auptimport React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => (
  <div className="border-b border-gray-200">
    <button
      className="w-full py-4 flex justify-between items-center text-left"
      onClick={onToggle}
    >
      <span className="font-medium">{question}</span>
      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
    {isOpen && (
      <div className="pb-4 text-gray-600">
        {answer}
      </div>
    )}
  </div>
);

const faqs = [
  {
    question: "Wie wurden die Zukunftsvisionen erstellt?",
    answer: "Die Visionen wurden in einem zweistufigen KI-Prozess erstellt: Zuerst wurden die offiziellen Wahlprogramme der Parteien in ChatGPT eingespeist, mit der Frage, wie unsere Zukunft aussähe, wenn diese Programme zu 100% umgesetzt würden. Anschließend wurden diese Beschreibungen verwendet, um mit DALL-E die entsprechenden Bilder zu generieren."
  },
  {
    question: "Sind die Bilder manipuliert oder bearbeitet?",
    answer: "Nein, die Bilder sind unbearbeitet und werden genau so gezeigt, wie sie von der KI generiert wurden. Es wurden keine nachträglichen Änderungen vorgenommen, um die Authentizität der KI-Interpretation zu bewahren."
  },
  {
    question: "Stellen die Visionen eine Wahlempfehlung dar?",
    answer: "Nein, absolut nicht. Die Visionen dienen ausschließlich dazu, Dir die Parteiprogramme zu veranschaulichen und Dich zur kritischen Auseinandersetzung mit den politischen Zielen anzuregen. Sie sind keine Wahlempfehlung und ersetzen nicht Deine eigenständige politische Meinungsbildung."
  },
  {
    question: "Warum sehen die Visionen so unterschiedlich aus?",
    answer: "Die Unterschiede in den Visionen spiegeln die verschiedenen Schwerpunkte und Ziele der Parteiprogramme wider. Die KI interpretiert diese Unterschiede und übersetzt sie in visuelle Elemente, wodurch die charakteristischen Merkmale der jeweiligen politischen Ausrichtungen deutlich werden."
  },
  {
    question: "Wie objektiv sind diese KI-generierten Visionen?",
    answer: "Die Visionen basieren auf den offiziellen Wahlprogrammen, aber wie jede Interpretation - ob durch Menschen oder KI - können sie nicht vollständig objektiv sein. Sie sind als kreative Visualisierung zu verstehen, die Dich zum Nachdenken und zur Diskussion über verschiedene politische Zukunftsvorstellungen anregen soll."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8">Informationen / FAQ</h2>
        
        {/* Methodology Section */}
        <div className="bg-white rounded-lg p-6 mb-12 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Methodik</h3>
          <p className="text-gray-600">
            Für dieses Projekt wurde KI-gestützter Ansatz gewählt:
          </p>
          <ol className="list-decimal list-inside mt-4 space-y-2 text-gray-600">
            <li>Die offiziellen Wahlprogramme der Parteien wurden in ChatGPT eingespeist</li>
            <li>Der Haupt-Prompt war: "Wie würde unsere Zukunft aussehen, wenn 100% der Inhalte dieses Programms umgesetzt werden?"</li>
            <li>Die resultierenden Beschreibungen wurden verwendet, um mit DALL-E die entsprechenden Visualisierungen zu generieren</li>
            <li>Manchmal gab ChatGPT einen Error zurück oder verbaute Artefakte in den Bildern, in diesen Fällen wurde der Prompt wiederholt.</li>
            
          </ol>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-6">Häufig gestellte Fragen</h3>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
