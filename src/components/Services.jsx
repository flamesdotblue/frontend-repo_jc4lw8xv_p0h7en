import React from 'react';
import { Cpu, Cloud, Shield, Code, Server } from 'lucide-react';

const services = [
  {
    title: 'Product Engineering',
    icon: Code,
    desc: 'Design, development, and delivery of modern web and mobile applications with performance and accessibility at the core.'
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    desc: 'Cloud-native architectures, CI/CD, observability, and cost optimization across AWS, GCP, and Azure.'
  },
  {
    title: 'AI & Data',
    icon: Cpu,
    desc: 'LLM integrations, MLOps, analytics pipelines, and data platforms that unlock intelligence at scale.'
  },
  {
    title: 'Platform & APIs',
    icon: Server,
    desc: 'Secure, scalable backends, microservices, and high-throughput APIs built for reliability and growth.'
  },
  {
    title: 'Security & Compliance',
    icon: Shield,
    desc: 'Security reviews, threat modeling, and governance to keep your products safe and compliant.'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-neutral-980 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to ship great software</h2>
          <p className="mt-4 text-white/70">
            A full-stack partner from strategy to launch. We plug into your team and deliver outcomes that matter.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300 ring-1 ring-inset ring-teal-400/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
