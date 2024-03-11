import React from 'react';
import HeaderSection from './components/Header';
import FooterSection from './components/Footer'
import SinglePageSections from './components/SinglePageSections';

export default function Home() {
  return (
    <div>
        <HeaderSection />
      <main className="relative">
        <SinglePageSections />
      </main>
        <FooterSection />
    </div>
  );
}
