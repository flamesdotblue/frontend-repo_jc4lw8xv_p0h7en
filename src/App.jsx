import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ContactCTA from './components/ContactCTA';

function App() {
  const [open, setOpen] = useState(false);

  const NavLinks = (
    <nav className="flex flex-col gap-4 text-sm text-white/80 sm:flex-row sm:items-center sm:gap-6">
      <a href="#services" onClick={() => setOpen(false)} className="hover:text-white">Services</a>
      <a href="#about" onClick={() => setOpen(false)} className="hover:text-white">About</a>
      <a href="#contact" onClick={() => setOpen(false)} className="hover:text-white">Contact</a>
    </nav>
  );

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      {/* Top nav with mobile menu */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <a href="#" className="font-semibold tracking-tight">Techatronix</a>

            <div className="hidden sm:block">{NavLinks}</div>

            <div className="hidden sm:inline-flex">
              <a href="#contact" className="rounded-md bg-teal-400 px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-teal-300">
                Get started
              </a>
            </div>

            <button
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-white/80 backdrop-blur hover:bg-white/10 sm:hidden"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile dropdown */}
          {open && (
            <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:hidden">
              {NavLinks}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-teal-400 px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-teal-300">
                Get started
              </a>
            </div>
          )}
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
