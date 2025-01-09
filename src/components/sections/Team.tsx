import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12">Wer sind wir</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 relative rounded-xl overflow-hidden">
            <img
              src="https://i.ibb.co/Jdb3jF7/Portr-t-4kx4k-comp.png"
              alt="Max Mundhenke"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">Max Mundhenke</h3>
            <div className="prose prose-lg text-gray-600">
              <p>
                Als selbstständiger KI-Berater und Entwickler sucht Max Mundhenke kontinuierlich nach 
                sinnvollen Anwendungsfällen für künstliche Intelligenz. Mit seiner Erfahrung als 
                ehemaliger Autor (unter dem Pseudonym Tom Kraftwerk) und Unternehmensberater für 
                digitale Kommunikation verbindet er kreatives Denken mit technologischer Expertise.
              </p>
              <p>
                Dieses ehrenamtliche Projekt ist ein Beispiel dafür, wie KI genutzt werden kann, 
                um komplexe politische Inhalte zugänglich zu machen und Menschen zu einer 
                informierten politischen Teilhabe zu motivieren. Seine Arbeit konzentriert sich 
                darauf, Brücken zwischen technologischen Möglichkeiten und gesellschaftlichem 
                Nutzen zu bauen.
              </p>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/in/tomkraftwerk" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/tomkraftwerk" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-600 hover:text-pink-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="mailto:hallo@bundestagswahl.ai"
                 className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}