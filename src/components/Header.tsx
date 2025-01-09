import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navigation = [
  { name: 'Startseite', href: '#home' },
  { name: 'Über das Projekt', href: '#about' },
  { name: 'Informationen / FAQ', href: '#faq' },
  { name: 'Wer sind wir', href: '#team' },
  { name: 'Informiere Dich', href: '#info' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-900 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="md:hidden">
            <button
              className="text-gray-900 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-900 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}