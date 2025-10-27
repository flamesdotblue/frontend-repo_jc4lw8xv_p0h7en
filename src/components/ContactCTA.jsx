import React from 'react';

const ContactCTA = () => {
  return (
    <section id="contact" className="relative w-full bg-neutral-980 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center backdrop-blur sm:p-12">
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to build something great?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">
            Tell us about your vision and we’ll propose a path to launch — from discovery to delivery.
          </p>
          <form className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-0 focus:border-teal-400/40 focus:bg-white/10"
              required
            />
            <input
              type="email"
              placeholder="Work email"
              className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-0 focus:border-teal-400/40 focus:bg-white/10"
              required
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-0 focus:border-teal-400/40 focus:bg-white/10 sm:col-span-2"
            />
            <textarea
              placeholder="Project brief"
              rows={4}
              className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-0 focus:border-teal-400/40 focus:bg-white/10 sm:col-span-2"
            />
            <button
              type="submit"
              className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-teal-400 px-6 py-3 font-medium text-neutral-900 shadow-lg shadow-teal-400/30 transition hover:bg-teal-300"
            >
              Request a consultation
            </button>
          </form>
          <p className="mt-4 text-xs text-white/60">We’ll get back within 1–2 business days.</p>
        </div>
        <div className="mt-10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Your IT Company. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
