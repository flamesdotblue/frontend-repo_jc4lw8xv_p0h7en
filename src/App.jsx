import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      {/* Simple top nav */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <a href="#" className="font-semibold tracking-tight">NovaTech</a>
            <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            <a href="#contact" className="hidden rounded-md bg-teal-400 px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-teal-300 sm:inline-flex">
              Get started
            </a>
          </div>
        </div>
      </header>

      <main className="w-full">
        <Hero />
        <Services />
        <About />
        <ContactCTA />
      </main>
    </div>
  );
}

export default App;
