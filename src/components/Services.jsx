import React, { useMemo, useState } from 'react';
import { Cpu, Cloud, Shield, Code, Server, Sparkles } from 'lucide-react';

const allServices = [
  {
    title: 'Product Engineering',
    icon: Code,
    desc: 'Design, development, and delivery of modern web and mobile applications with performance and accessibility at the core.',
    tags: ['Build', 'Front‑end', 'Mobile']
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    desc: 'Cloud-native architectures, CI/CD, observability, and cost optimization across AWS, GCP, and Azure.',
    tags: ['Cloud', 'Ops']
  },
  {
    title: 'AI & Data',
    icon: Cpu,
    desc: 'LLM integrations, MLOps, analytics pipelines, and data platforms that unlock intelligence at scale.',
    tags: ['AI', 'Data']
  },
  {
    title: 'Platform & APIs',
    icon: Server,
    desc: 'Secure, scalable backends, microservices, and high-throughput APIs built for reliability and growth.',
    tags: ['Backend', 'APIs']
  },
  {
    title: 'Security & Compliance',
    icon: Shield,
    desc: 'Security reviews, threat modeling, and governance to keep your products safe and compliant.',
    tags: ['Security']
  },
  {
    title: 'Innovation Sprints',
    icon: Sparkles,
    desc: 'Rapid prototypes and proofs‑of‑concept to validate ideas and de‑risk investments in weeks, not months.',
    tags: ['Build', 'Strategy']
  }
];

const filters = ['All', 'Build', 'Cloud', 'AI', 'Backend', 'Security', 'Strategy'];

const Services = () => {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return allServices;
    return allServices.filter((s) => s.tags.includes(active));
  }, [active]);

  return (
    <section id="services" className="relative w-full bg-neutral-980 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to ship great software</h2>
          <p className="mt-4 text-white/70">
            A full-stack partner from strategy to launch. We plug into your team and deliver outcomes that matter.
          </p>
        </div>

        {/* Interactive filters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-1.5 text-sm transition backdrop-blur ${
                active === f
                  ? 'border-teal-400/40 bg-teal-400/10 text-teal-200'
                  : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(({ title, icon: Icon, desc, tags }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl hover:shadow-teal-400/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300 ring-1 ring-inset ring-teal-400/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
