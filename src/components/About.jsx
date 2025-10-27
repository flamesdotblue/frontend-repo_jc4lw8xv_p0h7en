import React from 'react';

const stats = [
  { label: 'Projects Delivered', value: '120+' },
  { label: 'Uptime Across Managed Platforms', value: '99.95%' },
  { label: 'Avg. Time to First Release', value: '4 weeks' },
  { label: 'Client Satisfaction', value: '4.9/5' }
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">We build with clarity, speed, and care</h2>
            <p className="mt-4 text-white/70">
              We’re a team of engineers, designers, and product leaders obsessed with quality. Our approach blends product thinking with battle‑tested engineering to deliver reliable, scalable systems.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-teal-400" />
                Outcome‑driven process focused on business goals
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-teal-400" />
                Senior talent across frontend, backend, mobile, and cloud
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-teal-400" />
                Transparent communication and predictable delivery
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
                <div className="text-3xl font-extrabold tracking-tight text-teal-300">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
