import React from 'react';
import { Users, Target, Zap, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously evolve our tools to meet the latest industry standards and user needs.'
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Every feature is designed with our users in mind, ensuring the best possible experience.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Our tools deliver accurate, reliable results that professionals can depend on.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about creating tools that make your work easier and more efficient.'
    }
  ];

  const stats = [
    { number: '94+', label: 'Tools Available' },
    { number: '50K+', label: 'Happy Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center animate-slide-in-up">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-[#B22429]">About Tech</span><span className="text-[#032F65]">-Hub Tools</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize access to professional-grade tools. 
            <span className="text-[#B22429]">Tech</span><span className="text-[#032F65]">-Hub Tools</span> brings together the most essential utilities for developers, 
            designers, marketers, and creators in one beautiful, unified platform.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto animate-slide-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Our Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-[#B22429]">Tech</span><span className="text-[#032F65]">-Hub Tools</span> was born out of frustration with the fragmented landscape of online tools. 
                  As developers and creators ourselves, we found ourselves constantly switching between 
                  dozens of different websites to accomplish basic tasks.
                </p>
                <p>
                  We envisioned a single platform where all essential tools could coexist, 
                  each with a beautiful, consistent interface and lightning-fast performance. 
                  After months of development, <span className="text-[#B22429]">Tech</span><span className="text-[#032F65]">-Hub Tools</span> emerged as the ultimate productivity companion.
                </p>
                <p>
                  Today, we're proud to serve thousands of users worldwide with our growing collection 
                  of 94+ tools, each carefully crafted to save time and streamline workflows.
                </p>
              </div>
            </div>
            <div className="glass p-8 rounded-3xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto animate-slide-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Our Values</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl text-center hover:bg-white/8 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center animate-slide-in-up">
          <h2 className="text-4xl font-bold mb-6">
            Built by <span className="text-[#B22429]">Tech</span><span className="text-[#032F65]">-Hub</span> Developers
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We're a passionate team of developers, designers, and product enthusiasts 
            who believe that great tools should be accessible to everyone. Our diverse 
            backgrounds in technology, design, and user experience come together to create 
            something truly special.
          </p>
          <div className="glass p-8 rounded-3xl">
            <p className="text-lg text-muted-foreground mb-6">
              "Our goal isn't just to build tools, but to craft experiences that make 
              your work more enjoyable and productive. Every pixel, every interaction, 
              and every feature is designed with care and attention to detail."
            </p>
            <p className="text-sm font-semibold"><span className="text-black">- The </span><span className="text-[#B22429]">Tech</span><span className="text-[#032F65]">-Hub Tools</span><span className="text-black"> Team</span></p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
          <div className="glass p-12 rounded-3xl">
            <h2 className="text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who have already discovered the power of <span className="text-[#B22429]">Tech</span><span className="text-[#032F65]">-Hub Tools</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild className="px-8 py-4 text-lg">
                <Link to="/tools">
                  Explore Tools <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild className="px-8 py-4 text-lg">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
