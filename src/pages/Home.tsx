import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
          </div>

          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-up">
              <span className="gradient-text">All Tools You'll Ever Need</span>
              <br />
              <span className="text-foreground">in One Place</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              Discover 94+ powerful tools for web development, design, file conversion, 
              and productivity. Streamline your workflow with our futuristic platform.
            </p>

            {/* Hero Search Bar */}
            <div className="max-w-2xl mx-auto mb-8 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for any tool..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg glass border-white/20 focus:border-primary/50 rounded-2xl"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
              <Button variant="hero" size="lg" asChild className="px-8 py-4 text-lg">
                <Link to="/tools">
                  Explore All Tools <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" className="px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass p-12 rounded-3xl">
            <h2 className="text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Supercharge</span> Your Workflow?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who trust TechHubSystems for their daily productivity needs.
              Start exploring our comprehensive toolkit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild className="px-8 py-4 text-lg">
                <Link to="/tools">
                  Start Using Tools <Zap className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild className="px-8 py-4 text-lg">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
