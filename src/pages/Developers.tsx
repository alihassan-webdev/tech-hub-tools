import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, Rocket, Wrench, Sparkles, LayoutTemplate, Gauge, Zap, Image as ImageIcon, Layers } from 'lucide-react';

const StepCard: React.FC<{ icon: React.ElementType; title: string; desc: string; index: number }> = ({ icon: Icon, title, desc, index }) => (
  <div className="relative bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-glow transition-all hover:-translate-y-1 hover:shadow-hover">
    <div className="absolute -left-3 top-6 h-6 w-6 rounded-full bg-[#032F65] text-white flex items-center justify-center text-sm font-bold shadow-glow">{index}</div>
    <div className="flex items-start gap-4">
      <div className="h-12 w-12 rounded-xl bg-[#032F65]/10 text-[#032F65] flex items-center justify-center">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{desc}</p>
      </div>
    </div>
  </div>
);

export const Developers: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Designed and Developed by <span className="text-[#032F65]">Hammad</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            This project was crafted with modern web technologies to deliver a fast, reliable, and delightful experience.
          </p>
        </div>
      </section>

      {/* Tech overview */}
      <section className="px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-2 text-[#032F65]"><Code className="h-5 w-5" /><h3 className="font-semibold">Languages & Frameworks</h3></div>
            <p className="text-sm text-muted-foreground">TypeScript, React 18, React Router, Tailwind CSS, Shadcn UI (Radix), TanStack Query.</p>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-2 text-[#032F65]"><LayoutTemplate className="h-5 w-5" /><h3 className="font-semibold">Architecture</h3></div>
            <p className="text-sm text-muted-foreground">Component-driven UI, utility-first styling, reusable hooks, and accessible primitives.</p>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-2 text-[#032F65]"><Gauge className="h-5 w-5" /><h3 className="font-semibold">Performance</h3></div>
            <p className="text-sm text-muted-foreground">Optimized assets, code-splitting, and responsive layout for smooth UX across devices.</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2"><Rocket className="h-6 w-6 text-[#032F65]" /> Development Timeline</h2>
          <div className="relative grid md:grid-cols-2 gap-6">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block" />
            <StepCard index={1} icon={Code} title="Project Setup" desc="Bootstrapped with Vite + React + TypeScript. Configured Tailwind and shadcn UI components." />
            <StepCard index={2} icon={LayoutTemplate} title="Core Layout & Navigation" desc="Built responsive Navbar, Footer, and routing structure with HashRouter." />
            <StepCard index={3} icon={Wrench} title="Tools & UI Components" desc="Implemented reusable UI, utilities, and interactive tools with accessible patterns." />
            <StepCard index={4} icon={Rocket} title="Optimizations" desc="Improved bundle size, animations, and usability across mobile, tablet, and desktop." />
          </div>
        </div>
      </section>

      {/* Enhancements by Awais */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-accent/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2"><Sparkles className="h-6 w-6 text-[#032F65]" /> Optimized and Enhanced by Awais</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-glow">
              <div className="h-12 w-12 rounded-xl bg-[#032F65]/10 text-[#032F65] flex items-center justify-center mb-3"><Zap className="h-6 w-6" /></div>
              <h3 className="font-semibold text-lg mb-1">UX Polish</h3>
              <p className="text-sm text-gray-600">Refined spacing, color accents, and micro-interactions for a cleaner, modern look.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-glow">
              <div className="h-12 w-12 rounded-xl bg-[#032F65]/10 text-[#032F65] flex items-center justify-center mb-3"><Layers className="h-6 w-6" /></div>
              <h3 className="font-semibold text-lg mb-1">Component Reuse</h3>
              <p className="text-sm text-gray-600">Improved component composition and consistency to streamline future updates.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-glow">
              <div className="h-12 w-12 rounded-xl bg-[#032F65]/10 text-[#032F65] flex items-center justify-center mb-3"><Wrench className="h-6 w-6" /></div>
              <h3 className="font-semibold text-lg mb-1">Performance Touches</h3>
              <p className="text-sm text-gray-600">Tweaked visuals and loading behavior for smoother navigation and responsiveness.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Developers;
