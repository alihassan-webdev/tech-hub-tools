import {
  Code, FileText, Image, Video, Brain, Shield, Search, Palette,
  Globe, Calculator, Hash, QrCode, Key, Scissors, Download,
  Upload, Zap, Settings, Database, Mail, Phone, Clock,
  BarChart, TrendingUp, Eye, Link2, FileCheck, Wrench,
  Cpu, Monitor, Smartphone, Tablet, Camera, Music,
  PenTool, Type, AlignLeft, Crop, Layers, Filter,
  Lock, Unlock, Fingerprint, ScanLine, RefreshCw, Copy, Volume2,
  Mic, Smile, Users, Keyboard
} from 'lucide-react';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: any;
  isWorking: boolean;
  featured: boolean;
}

export const toolsData: Tool[] = [
  // Web Development / IT Tools
  {
    id: 'html-formatter',
    name: 'HTML Formatter',
    description: 'Format and beautify your HTML code with proper indentation',
    category: 'Web Development',
    icon: Code,
    isWorking: false,
    featured: true
  },
  {
    id: 'css-formatter',
    name: 'CSS Formatter',
    description: 'Format and minify CSS code for better readability',
    category: 'Web Development',
    icon: Code,
    isWorking: false,
    featured: false
  },
  {
    id: 'js-formatter',
    name: 'JavaScript Formatter',
    description: 'Beautify and format JavaScript code with syntax highlighting',
    category: 'Web Development',
    icon: Code,
    isWorking: false,
    featured: false
  },
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format, validate and prettify JSON data',
    category: 'Web Development',
    icon: Database,
    isWorking: true,
    featured: true
  },
  {
    id: 'regex-tester',
    name: 'Regex Tester',
    description: 'Test and validate regular expressions with live matching',
    category: 'Web Development',
    icon: Search,
    isWorking: true,
    featured: false
  },
  {
    id: 'qr-generator',
    name: 'QR Code Generator',
    description: 'Generate custom QR codes for URLs, text, and more',
    category: 'Web Development',
    icon: QrCode,
    isWorking: true,
    featured: true
  },
  {
    id: 'uuid-generator',
    name: 'UUID Generator',
    description: 'Generate unique identifiers for your applications',
    category: 'Web Development',
    icon: Hash,
    isWorking: true,
    featured: false
  },
  {
    id: 'code-beautifier',
    name: 'Code Beautifier',
    description: 'Beautify HTML, CSS, and JavaScript code',
    category: 'Web Development',
    icon: Settings,
    isWorking: true,
    featured: false
  },
  {
    id: 'html-entities',
    name: 'HTML Entities Encoder/Decoder',
    description: 'Encode and decode HTML entities and special characters',
    category: 'Web Development',
    icon: Code,
    isWorking: true,
    featured: false
  },

  // Additional Web Tools
  {
    id: 'html-markdown',
    name: 'HTML ↔ Markdown Converter',
    description: 'Convert between HTML and Markdown formats',
    category: 'Web Development',
    icon: Type,
    isWorking: true,
    featured: false
  },
  {
    id: 'html-table-generator',
    name: 'HTML Table Generator',
    description: 'Generate HTML tables from CSV or JSON input',
    category: 'Web Development',
    icon: Type,
    isWorking: true,
    featured: false
  },
  {
    id: 'serp-snippet',
    name: 'SERP Snippet Preview',
    description: 'Preview how your page appears in search results',
    category: 'SEO',
    icon: Eye,
    isWorking: true,
    featured: false
  },

  // Digital Marketing / SEO Tools
  {
    id: 'meta-generator',
    name: 'Meta Tag Generator',
    description: 'Generate SEO-optimized meta tags for your website',
    category: 'SEO',
    icon: TrendingUp,
    isWorking: true,
    featured: false
  },
  {
    id: 'robots-generator',
    name: 'Robots.txt Generator',
    description: 'Create custom robots.txt files for search engines',
    category: 'SEO',
    icon: Eye,
    isWorking: true,
    featured: false
  },
  {
    id: 'seo-analyzer',
    name: 'SEO Analyzer',
    description: 'Analyze website SEO performance and get recommendations',
    category: 'SEO',
    icon: BarChart,
    isWorking: false,
    featured: false
  },
  {
    id: 'backlink-checker',
    name: 'Backlink Checker',
    description: 'Check and analyze website backlinks',
    category: 'SEO',
    icon: Link2,
    isWorking: false,
    featured: false
  },
  {
    id: 'speed-test',
    name: 'Website Speed Test',
    description: 'Test and analyze website loading performance',
    category: 'SEO',
    icon: Zap,
    isWorking: false,
    featured: false
  },
  {
    id: 'domain-authority',
    name: 'Domain Authority Checker',
    description: 'Check domain authority and website metrics',
    category: 'SEO',
    icon: Shield,
    isWorking: false,
    featured: false
  },
  {
    id: 'keyword-analyzer',
    name: 'Keyword Analyzer',
    description: 'Analyze keyword density and SEO metrics',
    category: 'SEO',
    icon: Search,
    isWorking: false,
    featured: false
  },
  {
    id: 'sitemap-generator',
    name: 'Sitemap Generator',
    description: 'Generate XML sitemaps for your website',
    category: 'SEO',
    icon: FileCheck,
    isWorking: true,
    featured: false
  },

  // File Tools
  {
    id: 'word-to-pdf',
    name: 'Word to PDF',
    description: 'Convert Microsoft Word documents to PDF format',
    category: 'File Conversion',
    icon: FileText,
    isWorking: false,
    featured: true
  },
  {
    id: 'pdf-to-word',
    name: 'PDF to Word',
    description: 'Convert PDF documents to editable Word files',
    category: 'File Conversion',
    icon: FileText,
    isWorking: false,
    featured: false
  },
  {
    id: 'excel-to-pdf',
    name: 'Excel to PDF',
    description: 'Convert Excel spreadsheets to PDF format',
    category: 'File Conversion',
    icon: FileText,
    isWorking: false,
    featured: false
  },
  {
    id: 'pdf-merge',
    name: 'PDF Merge',
    description: 'Combine multiple PDF files into one document',
    category: 'File Tools',
    icon: FileText,
    isWorking: false,
    featured: false
  },
  {
    id: 'pdf-split',
    name: 'PDF Split',
    description: 'Split PDF documents into separate pages',
    category: 'File Tools',
    icon: Scissors,
    isWorking: false,
    featured: false
  },
  {
    id: 'pdf-compress',
    name: 'PDF Compress',
    description: 'Reduce PDF file size while maintaining quality',
    category: 'File Tools',
    icon: Download,
    isWorking: false,
    featured: false
  },
  {
    id: 'zip-extractor',
    name: 'ZIP Extractor',
    description: 'Extract and create ZIP archives online',
    category: 'File Tools',
    icon: Upload,
    isWorking: false,
    featured: false
  },

  // Image Tools
  {
    id: 'background-remover',
    name: 'Background Remover',
    description: 'Remove backgrounds from images using AI technology',
    category: 'Image Tools',
    icon: Image,
    isWorking: false,
    featured: true
  },
  {
    id: 'image-resize',
    name: 'Image Resize',
    description: 'Resize images to custom dimensions while maintaining quality',
    category: 'Image Tools',
    icon: Crop,
    isWorking: true,
    featured: false
  },
  {
    id: 'image-compress',
    name: 'Image Compress',
    description: 'Compress images to reduce file size',
    category: 'Image Tools',
    icon: Download,
    isWorking: true,
    featured: false
  },
  {
    id: 'image-converter',
    name: 'Image Converter',
    description: 'Convert between PNG, JPG and WEBP formats',
    category: 'Image Tools',
    icon: RefreshCw,
    isWorking: true,
    featured: false
  },

  // Video & Audio Tools
  {
    id: 'video-converter',
    name: 'Video Converter',
    description: 'Convert videos between MP4, AVI, WebM formats',
    category: 'Video Tools',
    icon: Video,
    isWorking: false,
    featured: false
  },
  {
    id: 'video-compress',
    name: 'Video Compress',
    description: 'Reduce video file size while maintaining quality',
    category: 'Video Tools',
    icon: Download,
    isWorking: false,
    featured: false
  },
  {
    id: 'audio-converter',
    name: 'Audio Converter',
    description: 'Convert audio files to MP3, WAV, OGG formats',
    category: 'Audio Tools',
    icon: Music,
    isWorking: false,
    featured: false
  },
  {
    id: 'video-to-gif',
    name: 'Video to GIF',
    description: 'Convert video clips to animated GIF format',
    category: 'Video Tools',
    icon: Video,
    isWorking: false,
    featured: false
  },

  // Text Tools
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, and paragraphs in your text',
    category: 'Text Tools',
    icon: Type,
    isWorking: true,
    featured: true
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    description: 'Convert text to uppercase, lowercase, or title case',
    category: 'Text Tools',
    icon: AlignLeft,
    isWorking: true,
    featured: false
  },
  {
    id: 'lorem-generator',
    name: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text for your designs',
    category: 'Text Tools',
    icon: Type,
    isWorking: true,
    featured: false
  },
  {
    id: 'translation-tool',
    name: 'Translation Tool',
    description: 'Translate text between multiple languages',
    category: 'Text Tools',
    icon: Globe,
    isWorking: false,
    featured: false
  },

  // Utilities & Calculators
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate secure passwords with custom options',
    category: 'Utilities',
    icon: Key,
    isWorking: true,
    featured: true
  },
  {
    id: 'random-number',
    name: 'Random Number Generator',
    description: 'Generate random numbers within specified ranges',
    category: 'Utilities',
    icon: Hash,
    isWorking: true,
    featured: false
  },
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Calculate exact age from birth date',
    category: 'Calculators',
    icon: Calculator,
    isWorking: true,
    featured: false
  },
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Calculate Body Mass Index and health status',
    category: 'Calculators',
    icon: Calculator,
    isWorking: true,
    featured: false
  },
  {
    id: 'currency-converter',
    name: 'Currency Converter',
    description: 'Convert between different world currencies',
    category: 'Utilities',
    icon: Calculator,
    isWorking: false,
    featured: false
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert length, weight, temperature, and volume',
    category: 'Utilities',
    icon: Calculator,
    isWorking: true,
    featured: false
  },

  // Color & Design Tools
  {
    id: 'color-picker',
    name: 'Color Picker',
    description: 'Pick colors and get HEX, RGB, HSL values',
    category: 'Design Tools',
    icon: Palette,
    isWorking: true,
    featured: true
  },
  {
    id: 'color-palette',
    name: 'Image Color Palette',
    description: 'Extract color palettes from uploaded images',
    category: 'Design Tools',
    icon: Palette,
    isWorking: false,
    featured: false
  },

  {
    id: 'url-shortener',
    name: 'URL Shortener',
    description: 'Shorten long URLs for social media sharing',
    category: 'Social Media',
    icon: Link2,
    isWorking: false,
    featured: false
  },

  // AI Tools
  {
    id: 'ai-summarizer',
    name: 'AI Text Summarizer',
    description: 'Summarize long text using artificial intelligence',
    category: 'AI Tools',
    icon: Brain,
    isWorking: false,
    featured: false
  },
  {
    id: 'ai-content',
    name: 'AI Content Generator',
    description: 'Generate content ideas and copy with AI',
    category: 'AI Tools',
    icon: PenTool,
    isWorking: false,
    featured: false
  },

  // Security & Misc Tools
  {
    id: 'base64-encoder',
    name: 'Base64 Encoder/Decoder',
    description: 'Encode and decode Base64 strings',
    category: 'Utilities',
    icon: Code,
    isWorking: true,
    featured: false
  },
  {
    id: 'barcode-generator',
    name: 'Barcode Generator',
    description: 'Generate various types of barcodes',
    category: 'Utilities',
    icon: ScanLine,
    isWorking: false,
    featured: false
  },
  {
    id: 'character-counter',
    name: 'Character Counter',
    description: 'Count characters, words, sentences and lines',
    category: 'Text Tools',
    icon: Type,
    isWorking: true,
    featured: false
  },

  // New Utilities
  {
    id: 'text-to-speech',
    name: 'Text to Speech',
    description: 'Convert text to spoken audio using the Web Speech API',
    category: 'Text Tools',
    icon: Volume2,
    isWorking: true,
    featured: false
  },
  {
    id: 'speech-to-text',
    name: 'Speech to Text',
    description: 'Transcribe speech to text using browser SpeechRecognition',
    category: 'Text Tools',
    icon: Mic,
    isWorking: true,
    featured: false
  },
  {
    id: 'hashtag-generator',
    name: 'Hashtag Generator',
    description: 'Generate hashtags from keywords',
    category: 'Social Media',
    icon: Hash,
    isWorking: true,
    featured: false
  },
  {
    id: 'emoji-picker',
    name: 'Emoji Picker',
    description: 'Pick emojis and copy them to clipboard',
    category: 'Miscellaneous',
    icon: Smile,
    isWorking: true,
    featured: false
  },
  {
    id: 'random-name',
    name: 'Random Name Generator',
    description: 'Generate random person names locally',
    category: 'Miscellaneous',
    icon: Users,
    isWorking: true,
    featured: false
  },
  {
    id: 'stopwatch',
    name: 'Online Stopwatch',
    description: 'Simple client-side stopwatch',
    category: 'Utilities',
    icon: Clock,
    isWorking: true,
    featured: false
  },
  {
    id: 'countdown-timer',
    name: 'Countdown Timer',
    description: 'Simple countdown timer',
    category: 'Utilities',
    icon: Clock,
    isWorking: true,
    featured: false
  },
  {
    id: 'timezone-converter',
    name: 'Time Zone Converter',
    description: 'Convert times between time zones',
    category: 'Utilities',
    icon: Globe,
    isWorking: true,
    featured: false
  },
  {
    id: 'screen-info',
    name: 'Screen & Browser Info',
    description: 'Detect screen resolution and user agent',
    category: 'Utilities',
    icon: Monitor,
    isWorking: true,
    featured: false
  },
  {
    id: 'keyboard-tester',
    name: 'Keyboard Tester',
    description: 'Test keyboard events and key codes',
    category: 'Utilities',
    icon: Keyboard,
    isWorking: true,
    featured: false
  },
  {
    id: 'mouse-tester',
    name: 'Mouse Tester',
    description: 'Test mouse movement and clicks',
    category: 'Utilities',
    icon: PenTool,
    isWorking: true,
    featured: false
  },
  {
    id: 'json-csv',
    name: 'JSON ↔ CSV Converter',
    description: 'Convert between JSON arrays and CSV client-side',
    category: 'Utilities',
    icon: FileText,
    isWorking: true,
    featured: false
  },
  {
    id: 'text-encrypt',
    name: 'Text Encrypt / Decrypt',
    description: 'Encrypt and decrypt text using Web Crypto API (AES-GCM)',
    category: 'Security',
    icon: Lock,
    isWorking: true,
    featured: false
  },
  {
    id: 'meme-generator',
    name: 'Meme Generator',
    description: 'Create memes with top and bottom text',
    category: 'Image Tools',
    icon: Image,
    isWorking: true,
    featured: false
  },
  {
    id: 'gradient-generator',
    name: 'Gradient Generator',
    description: 'Create CSS gradients with live preview',
    category: 'Design Tools',
    icon: Layers,
    isWorking: true,
    featured: false
  },
  {
    id: 'photo-filters',
    name: 'Photo Filters',
    description: 'Apply basic filters to images (brightness/contrast/saturation)',
    category: 'Image Tools',
    icon: Filter,
    isWorking: true,
    featured: false
  },
  {
    id: 'social-preview',
    name: 'Social Media Post Preview',
    description: 'Preview posts for Facebook/Twitter/Instagram',
    category: 'Social Media',
    icon: Image,
    isWorking: true,
    featured: false
  },
  {
    id: 'api-tester',
    name: 'API Request Tester',
    description: 'Test GET/POST API requests from the browser (CORS applies)',
    category: 'Web Development',
    icon: Globe,
    isWorking: true,
    featured: false
  },
  {
    id: 'hex-rgb-hsl',
    name: 'HEX ↔ RGB ↔ HSL Converter',
    description: 'Convert colors between HEX, RGB and HSL formats',
    category: 'Design Tools',
    icon: Type,
    isWorking: true,
    featured: false
  },
  {
    id: 'file-hash',
    name: 'File Hash Generator',
    description: 'Compute SHA-1 and SHA-256 file hashes in-browser',
    category: 'Security',
    icon: Hash,
    isWorking: true,
    featured: false
  },
  {
    id: 'url-preview',
    name: 'URL Validator & Preview',
    description: 'Validate URLs and attempt to fetch page metadata (CORS may block fetch)',
    category: 'Utilities',
    icon: Link2,
    isWorking: true,
    featured: false
  },
  {
    id: 'logo-mockup',
    name: 'Logo / Mockup Preview',
    description: 'Preview your logo on a device mockup',
    category: 'Design Tools',
    icon: Monitor,
    isWorking: true,
    featured: false
  },
  {
    id: 'hash-generator',
    name: 'Hash Generator',
    description: 'Generate SHA-1 and SHA-256 hashes in-browser',
    category: 'Security',
    icon: Lock,
    isWorking: true,
    featured: false
  }
];

export const getToolsByCategory = () => {
  const categories: { [key: string]: Tool[] } = {};
  
  toolsData.forEach(tool => {
    if (!categories[tool.category]) {
      categories[tool.category] = [];
    }
    categories[tool.category].push(tool);
  });
  
  return categories;
};

export const getFeaturedTools = () => {
  return toolsData.filter(tool => tool.featured);
};

export const getWorkingTools = () => {
  return toolsData.filter(tool => tool.isWorking);
};
