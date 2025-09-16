import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toolsData } from '@/data/toolsData';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const suggestions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [] as typeof toolsData;
    return toolsData
      .filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [searchQuery]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none"></div>

          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-up">
              <span className="gradient-text">All Tools</span>
              <span className='text-[#032F65]'>{' '}You'll Ever Need</span>
              <br />
              <span className="text-foreground">in One Place</span>
            </h1>

            <p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Discover 94+ powerful tools for web development, design, file conversion,
              and productivity. Streamline your workflow with our futuristic platform.
            </p>

            {/* Hero Search Bar with Suggestions (Home page only) */}
            <div className="max-w-2xl mx-auto mb-8 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative" ref={containerRef}>
                <img src="https://share.google/images/XnttWrv7k0H6HOK3e" alt="" aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60" />
                <Input
                  type="text"
                  placeholder="Search for any tool..."
                  value={searchQuery}
                  onFocus={() => suggestions.length > 0 && setOpen(true)}
                  onChange={(e) => {
                    const v = e.target.value;
                    setSearchQuery(v);
                    setOpen(v.trim().length > 0);
                  }}
                  className="pl-12 pr-4 py-4 text-lg glass border-white/20 focus:border-primary/50 rounded-2xl"
                />

                {open && suggestions.length > 0 && (
                  <div
                    role="listbox"
                    className="absolute left-0 right-0 mt-2 bg-white shadow-2xl border border-gray-200 rounded-2xl z-[60] overflow-hidden"
                  >
                    <ul className="max-h-80 overflow-y-auto py-2">
                      {suggestions.map((tool) => {
                        const Icon = tool.icon;
                        return (
                          <li
                            key={tool.id}
                            role="option" tabIndex={0}
                            className="flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 focus:bg-gray-50 transition-colors"
                            onClick={() => {
                              setOpen(false);
                              navigate(`/tools/${tool.id}`);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                setOpen(false);
                                navigate(`/tools/${tool.id}`);
                              }
                            }}
                          >
                            <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 text-gray-700">
                              <Icon className="h-5 w-5" aria-hidden="true" />
                            </div>
                            <div className="text-left">
                              <div className="font-medium text-gray-900 leading-tight">{tool.name}</div>
                              <div className="text-sm text-gray-600">{tool.description}</div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {!(open && suggestions.length > 0) && (
              <div className="flex justify-center animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
                <Button variant="hero" size="lg" asChild className="px-8 py-4 text-lg">
                  <Link to="/tools">
                    Explore All Tools <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
          <div className="glass p-12 rounded-3xl mt-20">
            <h2 className="text-4xl font-bold mb-6">
              Ready to <span className="text-[#032F65]">Supercharge</span> Your Workflow?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who trust TechHubSystems for their daily productivity needs.
              Start exploring our comprehensive toolkit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="px-8 py-4 text-lg bg-blue-900 hover:bg-blue-800">
                <Link to="/tools">
                  Start Using Tools <Zap className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild className="px-8 py-4 text-lg bg-blue-900/10 hover:bg-blue-900/20">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
