import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Blog = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto animate-slide-in-up">
          <header className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-[#B22429]">Tech</span>
              <span className="text-[#032F65]">-Hub Tools</span> Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and best practices to get the most out of our 94+ developer and productivity tools.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4"/> January 2025</span>
              <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4"/> 6 min read</span>
            </div>
          </header>

          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <h2>Build Faster with a Unified Toolbox</h2>
            <p>
              Switching between dozens of websites to format JSON, compress images, test APIs, or generate QR codes slows teams down. 
              Tech-Hub Tools brings 94+ utilities into a single, consistent experience—so you can stay in flow and ship faster.
            </p>

            <h3>Three Ways Tech-Hub Tools Speeds You Up</h3>
            <ol>
              <li><strong>One Interface, Zero Learning Curve:</strong> Every tool shares the same layout, shortcuts, and theming.</li>
              <li><strong>Privacy by Default:</strong> Most tools run fully in your browser, keeping your data on your device.</li>
              <li><strong>Built for Everyday Work:</strong> JSON formatter, QR generator, color utilities, text converters, and more—ready when you are.</li>
            </ol>

            <h3>Popular Workflows</h3>
            <p>
              Here are quick wins our users love:
            </p>
            <ul>
              <li><strong>Debug APIs:</strong> Pretty‑print JSON, validate schemas, and test endpoints without leaving the page.</li>
              <li><strong>Ship Assets Faster:</strong> Resize and optimize images, then copy ready‑to‑use color tokens.</li>
              <li><strong>Polish Content:</strong> Convert case, count characters, and generate secure passwords in seconds.</li>
            </ul>

            <h3>Tips for Power Users</h3>
            <ul>
              <li>Use the global search on the Tools page to jump directly to any utility.</li>
              <li>Star your most used tools in your browser for instant access.</li>
              <li>Try dark mode for late‑night sessions; all tools support theme switching.</li>
            </ul>

            <h3>What’s Next</h3>
            <p>
              We’re continuously adding new tools and enhancements. If you have a suggestion, reach out on the Contact page—we read every message.
            </p>

            <div className="not-prose mt-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Hash className="w-4 h-4"/>productivity</span>
              <span className="inline-flex items-center gap-1"><Hash className="w-4 h-4"/>web‑dev</span>
              <span className="inline-flex items-center gap-1"><Hash className="w-4 h-4"/>tooling</span>
            </div>

            <div className="not-prose mt-10">
              <Button asChild size="lg" className="bg-[#032F65] hover:bg-[#032457] text-white">
                <Link to="/tools">Explore Tools <ArrowRight className="ml-2 w-5 h-5"/></Link>
              </Button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Blog;
