import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, Palette, FileText, Video, Brain, Shield, 
  TrendingUp, Calculator, ArrowRight, Check, Star 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development Tools',
      description: 'Complete suite of development utilities for modern web developers',
      features: [
        'HTML/CSS/JS Formatters & Minifiers',
        'JSON Validator & Beautifier',
        'Regex Testing & Validation',
        'API Request Testing',
        'Code Quality Analysis',
        'UUID & Hash Generators'
      ],
      toolCount: '15+ tools',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'SEO & Marketing Suite',
      description: 'Boost your online presence with professional SEO and marketing tools',
      features: [
        'Meta Tag Generation',
        'SEO Performance Analysis',
        'Keyword Research & Analysis',
        'Backlink Monitoring',
        'Sitemap Generation',
        'Website Speed Testing'
      ],
      toolCount: '12+ tools',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FileText,
      title: 'File Processing',
      description: 'Comprehensive file conversion and manipulation services',
      features: [
        'PDF Creation & Conversion',
        'Document Format Converting',
        'File Compression & Optimization',
        'Batch File Processing',
        'Archive Management',
        'File Security & Encryption'
      ],
      toolCount: '20+ tools',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Palette,
      title: 'Design & Creative Tools',
      description: 'Professional design utilities for creators and designers',
      features: [
        'Advanced Color Palette Generation',
        'Gradient Design Studio',
        'Image Processing & Enhancement',
        'Logo & Mockup Creation',
        'Typography Tools',
        'Design Asset Optimization'
      ],
      toolCount: '18+ tools',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Video,
      title: 'Media Processing',
      description: 'Complete video and audio processing capabilities',
      features: [
        'Video Format Conversion',
        'Audio Processing & Conversion',
        'Media Compression',
        'Subtitle Management',
        'Video Editing Tools',
        'GIF Creation & Optimization'
      ],
      toolCount: '14+ tools',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence tools for modern workflows',
      features: [
        'Intelligent Text Summarization',
        'AI Content Generation',
        'Smart Image Enhancement',
        'Automated Code Analysis',
        'Natural Language Processing',
        'Machine Learning Utilities'
      ],
      toolCount: '10+ tools',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Calculator,
      title: 'Productivity Calculators',
      description: 'Essential calculators and utilities for daily productivity',
      features: [
        'Financial Calculators',
        'Unit Conversions',
        'Time Zone Management',
        'Health & Fitness Calculators',
        'Mathematical Utilities',
        'Statistical Analysis Tools'
      ],
      toolCount: '16+ tools',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Comprehensive security tools for data protection and privacy',
      features: [
        'Password Generation & Validation',
        'Data Encryption & Decryption',
        'Hash Generation & Verification',
        'Security Auditing Tools',
        'Privacy Protection Utilities',
        'Secure File Sharing'
      ],
      toolCount: '8+ tools',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const benefits = [
    {
      title: 'All-in-One Platform',
      description: 'Access every tool you need from a single, unified interface'
    },
    {
      title: 'Lightning Fast',
      description: 'Optimized for speed with instant results and real-time processing'
    },
    {
      title: 'Professional Quality',
      description: 'Enterprise-grade tools trusted by professionals worldwide'
    },
    {
      title: 'Always Updated',
      description: 'Regular updates with new features and improved functionality'
    },
    {
      title: 'Secure & Private',
      description: 'Your data stays private with client-side processing when possible'
    },
    {
      title: 'Free to Use',
      description: 'Most tools are completely free with no hidden costs'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover our comprehensive suite of professional tools designed to streamline 
            your workflow and boost productivity across every aspect of your digital work.
          </p>
          <div className="flex items-center justify-center gap-2 text-accent">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <span className="ml-2 text-foreground">Trusted by 50,000+ professionals</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass p-8 rounded-3xl hover:bg-white/8 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{service.title}</h3>
                    <span className="text-accent font-medium">{service.toolCount}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="glass" className="w-full" asChild>
                  <Link to="/tools">
                    Explore Tools <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">ToolsHub?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience the difference with our comprehensive platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl hover:bg-white/8 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass p-12 rounded-3xl">
            <h2 className="text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Boost Your Productivity?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start using our professional-grade tools today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild className="px-8 py-4 text-lg">
                <Link to="/tools">
                  Start Using Tools <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild className="px-8 py-4 text-lg">
                <Link to="/contact">
                  Get Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};