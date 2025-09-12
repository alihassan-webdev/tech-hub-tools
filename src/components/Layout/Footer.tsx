import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Zap } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const toolCategories = [
    { name: 'Web Dev Tools', href: '/tools#web-dev' },
    { name: 'SEO Tools', href: '/tools#seo' },
    { name: 'Image Tools', href: '/tools#image' },
    { name: 'File Tools', href: '/tools#file' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="relative mt-20">
      {/* Gradient Border */}
      <div className="h-px bg-gradient-primary opacity-50"></div>
      
      <div className="glass py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">TechHubSystems</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The ultimate collection of 94+ tools for developers, marketers, and creators. 
                Everything you need in one futuristic platform.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground hover:text-secondary" />
                  </a>
                ))}
              </div>
            </div>

            {/* Tool Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Popular Categories</h3>
              <ul className="space-y-2">
                {toolCategories.map((category) => (
                  <li key={category.name}>
                    <Link
                      to={category.href}
                      className="text-muted-foreground hover:text-secondary transition-colors duration-300 text-sm"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-secondary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Get in Touch</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Ready to boost your productivity?</p>
                <p>Explore our tools and start creating amazing things today!</p>
                <Link
                  to="/contact"
                  className="inline-block mt-3 px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg hover:bg-gradient-accent transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {currentYear} TechHubSystems. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground mt-2 md:mt-0">
                Developed by <span className="gradient-text font-semibold">Tech-Hub Developers</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
