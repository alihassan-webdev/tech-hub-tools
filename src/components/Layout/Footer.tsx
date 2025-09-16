import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Tools', href: '/tools' },
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
    <footer className="mt-20 bg-black text-white">
      <div className="pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand/About */}
            <div>
              <div className="mb-6">
                <h1 className="text-xl font-bold text-white">Tech-Hub</h1>
                <p className="text-sm text-white">Faisalabad</p>
              </div>
              <p className="text-sm text-white leading-relaxed text-left">
                Tech-Hub is a multi-tools platform offering developer and productivity tools. Explore code formatters, image utilities, SEO helpers, converters, and more — all fast, secure, and easy to use. Build faster with a unified interface, instant results, and zero learning curve — accessible anytime, on any device.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.name}>
                    <Link to={l.href} className="flex items-center gap-2 group transition-all duration-300 ease-out">
                      <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 ease-out group-hover:translate-x-1" />
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
                      <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 ease-out group-hover:translate-x-1" />
                      <span>{t.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter + Socials */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Stay Updated with IT Courses</h3>
              <p className="text-sm text-white/80 mb-4">
                Subscribe to get updates about new professional IT courses in Faisalabad, events, and career opportunities.
              </p>
              <form onSubmit={submitNewsletter} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-lg border border-white/30 bg-transparent px-4 text-white placeholder-white/70 focus:border-white/70 focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-12 w-full rounded-lg bg-[#0B4AA1] text-white inline-flex items-center justify-center gap-2 hover:bg-[#0A3F8C] transition-all duration-300 ease-out transform hover:-translate-y-0.5"
                  aria-label="Subscribe"
                >
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-6">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/Techhubfsd/" target="_blank" rel="noreferrer" aria-label="Facebook"
                     className="w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center transition-colors hover:bg-[#1877F2]">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/techhub_innovation/" target="_blank" rel="noreferrer" aria-label="Instagram"
                     className="w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center transition-colors hover:bg-[#E1306C]">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/tech-hub-systems-pvt-limited-faisalabad/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                     className="w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center transition-colors hover:bg-[#0A66C2]">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://wa.me/923006622815" target="_blank" rel="noreferrer" aria-label="WhatsApp"
                     className="w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center transition-colors hover:bg-[#25D366]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
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
          <div className="border-t border-gray-500 pt-6 text-center">
            <div className="text-sm py-2 flex items-center justify-center gap-2 flex-wrap">
              <span>Developed by</span>
              <Button asChild variant="glass" className="px-3 py-1 rounded-lg shadow-glow hover:-translate-y-0.5 transition-all bg-black text-white border-0 hover:bg-black/90">
                <Link to="/developers" aria-label="Tech-Hub Developers">Tech-Hub Developers</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
