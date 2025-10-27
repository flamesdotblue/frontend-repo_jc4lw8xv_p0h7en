import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950 text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle top-to-bottom gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/40 to-neutral-950/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center md:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur">
          <Rocket className="h-4 w-4 text-teal-300" />
          Techatronix — building the future of tech
        </span>
        <h1 className="mt-6 font-extrabold tracking-tight text-4xl leading-tight sm:text-5xl md:text-6xl">
          Your End‑to‑End Technology Partner
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
          We design, build, and scale modern digital products — from cloud infrastructure and mobile apps to AI solutions and enterprise platforms.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-teal-400 px-6 py-3 font-medium text-neutral-900 shadow-lg shadow-teal-400/30 transition hover:bg-teal-300"
          >
            Start a project
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Explore services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
