import React from 'react';

export default function BlogHeader() {
  return (
    <div className="bg-white border-b">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-gray-600">
          Updates über Ausstellungen, KI-Projekte und Einblicke in unsere Arbeit
        </p>
      </div>
    </div>
  );
}