import React from 'react';
import VisionGrid from '../components/VisionGrid';
import About from '../components/sections/About/index';
import FAQ from '../components/sections/FAQ';
import Team from '../components/sections/Team';
import Info from '../components/sections/Info';

export default function Home() {
  return (
    <main className="flex-grow">
      <section id="home">
        <VisionGrid />
      </section>
      <About />
      <FAQ />
      <Team />
      <Info />
    </main>
  );
}