import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Facebook, Instagram, Linkedin, Phone } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Tools', href: '/tools' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Contact', href: '/contact' },
  ];

  const popularTools = [
    { name: 'JSON Formatter', href: '/tools/json-formatter' },
    { name: 'QR Code Generator', href: '/tools/qr-generator' },
    { name: 'Image Resize', href: '/tools/image-resize' },
    { name: 'Color Picker', href: '/tools/color-picker' },
    { name: 'Password Generator', href: '/tools/password-generator' },
    { name: 'Word Counter', href: '/tools/word-counter' },
    { name: 'Unit Converter', href: '/tools/unit-converter' },
    { name: 'Text Encrypt / Decrypt', href: '/tools/text-encrypt' },
  ];

  const submitNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.info('Newsletter subscribe:', email);
    setEmail("");
  };

  return (
    <footer className="mt-20 bg-background">
      <div className="h-px bg-primary/50" />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand/About */}
            <div>
              <div className="mb-6">
                <h1 className="text-xl font-bold text-secondary">Tech-Hub</h1>
                <p className="text-sm text-muted-foreground">Faisalabad</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tech-Hub is a multi-tools platform offering developer and productivity tools, inspired by the
                Tech-Hub Innovation Center brand colors (#B22429 and #032F65).
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.name}>
                    <Link to={l.href} className="flex items-center gap-2 group transition-all">
                      <ArrowRight className="w-4 h-4 text-secondary transition-transform group-hover:translate-x-1" />
                      <span>{l.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tools */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Popular Tools</h3>
              <ul className="space-y-3">
                {popularTools.map((t) => (
                  <li key={t.name}>
                    <Link to={t.href} className="flex items-center gap-2 group transition-all">
                      <ArrowRight className="w-4 h-4 text-secondary transition-transform group-hover:translate-x-1" />
                      <span>{t.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter + Socials */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Stay Updated with Tools</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to get updates about new tools, improvements, and tips.
              </p>
              <form onSubmit={submitNewsletter} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <button
                  type="submit"
                  className="h-10 px-4 rounded-md bg-secondary text-secondary-foreground inline-flex items-center gap-2 hover:bg-secondary/90"
                  aria-label="Subscribe"
                >
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-6">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/Techhubfsd/" target="_blank" rel="noreferrer" aria-label="Facebook"
                     className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/techhub_innovation/" target="_blank" rel="noreferrer" aria-label="Instagram"
                     className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/tech-hub-systems-pvt-limited-faisalabad/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                     className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://wa.me/923006622815" target="_blank" rel="noreferrer" aria-label="WhatsApp"
                     className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors">
                    <Whatsapp className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* NAVTTC badge */}
          <div className="bg-secondary rounded-lg p-6 mb-8 text-center text-secondary-foreground">
            <h3 className="text-xl font-bold mb-1">Official NAVTTC Partner - IT Academy in Faisalabad</h3>
            <p className="text-sm">National Vocational & Technical Training Commission - Government of Pakistan approved diploma in IT Faisalabad programs</p>
          </div>

          {/* Rights */}
          <div className="border-t border-muted/20 pt-8 text-center">
            <div className="text-sm text-muted-foreground">© {currentYear} Tech-Hub Faisalabad. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
