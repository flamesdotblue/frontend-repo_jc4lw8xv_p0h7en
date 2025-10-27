import React, { useEffect, useRef, useState } from 'react';

const rawStats = [
  { label: 'Projects Delivered', value: 120 },
  { label: 'Uptime Across Managed Platforms', value: 99.95, suffix: '%' },
  { label: 'Avg. Time to First Release', value: 4, suffix: ' weeks' },
  { label: 'Client Satisfaction', value: 4.9, suffix: '/5' }
];

function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const from = 0;
            const to = target;

            function tick(now) {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
              const next = from + (to - from) * eased;
              setValue(next);
              if (progress < 1) requestAnimationFrame(tick);
            }

            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

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
            {rawStats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function StatCard({ label, value: targetValue, suffix = '' }) {
  const { value, ref } = useCountUp(targetValue, 1200);
  const display = targetValue % 1 === 0 ? Math.round(value) : value.toFixed(2);

  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
      <div className="text-3xl font-extrabold tracking-tight text-teal-300">
        {display}
        {suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{label}</div>
    </div>
  );
}

export default About;
