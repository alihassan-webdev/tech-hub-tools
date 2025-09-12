import React, { useState, useMemo } from 'react';
import { FileText, Hash, Clock, Eye } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export const WordCounter = () => {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = text.trim() === '' ? 0 : text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
    
    // Average reading time (assuming 200 words per minute)
    const readingTime = Math.ceil(words / 200);
    
    // Average speaking time (assuming 130 words per minute)
    const speakingTime = Math.ceil(words / 130);

    return {
      characters,
      charactersNoSpaces,
      words,
      sentences,
      paragraphs,
      readingTime,
      speakingTime
    };
  }, [text]);

  const statCards = [
    {
      icon: FileText,
      label: 'Characters',
      value: stats.characters,
      description: 'Including spaces'
    },
    {
      icon: Hash,
      label: 'Characters (no spaces)',
      value: stats.charactersNoSpaces,
      description: 'Excluding spaces'
    },
    {
      icon: FileText,
      label: 'Words',
      value: stats.words,
      description: 'Space-separated words'
    },
    {
      icon: FileText,
      label: 'Sentences',
      value: stats.sentences,
      description: 'Ending with . ! ?'
    },
    {
      icon: FileText,
      label: 'Paragraphs',
      value: stats.paragraphs,
      description: 'Separated by line breaks'
    },
    {
      icon: Clock,
      label: 'Reading Time',
      value: `${stats.readingTime} min`,
      description: '~200 words per minute'
    },
    {
      icon: Eye,
      label: 'Speaking Time',
      value: `${stats.speakingTime} min`,
      description: '~130 words per minute'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Text Input */}
      <div className="glass p-8 rounded-3xl">
        <div className="mb-6">
          <Label className="text-lg font-semibold mb-3 block">Enter Your Text</Label>
          <p className="text-sm text-muted-foreground mb-4">
            Type or paste your text below to analyze word count, reading time, and other statistics.
          </p>
        </div>
        
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          className="glass border-white/20 focus:border-primary/50 min-h-[300px] text-base leading-relaxed resize-none"
        />

        <div className="mt-4 text-right text-sm text-muted-foreground">
          {stats.characters > 0 && (
            <>Live count: {stats.words} words, {stats.characters} characters</>
          )}
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {statCards.map((stat, index) => (
          <div key={index} className="glass p-6 rounded-2xl text-center hover:bg-white/8 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-accent mb-1">
              {stat.label}
            </div>
            <div className="text-xs text-muted-foreground">
              {stat.description}
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Analysis */}
      {stats.words > 0 && (
        <div className="glass p-8 rounded-3xl">
          <h3 className="text-xl font-semibold mb-6 gradient-text">Detailed Analysis</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-background/50 p-4 rounded-xl">
                <h4 className="font-semibold mb-2 text-foreground">Average Word Length</h4>
                <div className="text-2xl font-bold text-accent">
                  {stats.words > 0 ? (stats.charactersNoSpaces / stats.words).toFixed(1) : 0} chars
                </div>
              </div>
              
              <div className="bg-background/50 p-4 rounded-xl">
                <h4 className="font-semibold mb-2 text-foreground">Words per Sentence</h4>
                <div className="text-2xl font-bold text-accent">
                  {stats.sentences > 0 ? (stats.words / stats.sentences).toFixed(1) : 0}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-background/50 p-4 rounded-xl">
                <h4 className="font-semibold mb-2 text-foreground">Sentences per Paragraph</h4>
                <div className="text-2xl font-bold text-accent">
                  {stats.paragraphs > 0 ? (stats.sentences / stats.paragraphs).toFixed(1) : 0}
                </div>
              </div>
              
              <div className="bg-background/50 p-4 rounded-xl">
                <h4 className="font-semibold mb-2 text-foreground">Words per Paragraph</h4>
                <div className="text-2xl font-bold text-accent">
                  {stats.paragraphs > 0 ? (stats.words / stats.paragraphs).toFixed(1) : 0}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Usage Tips */}
      <div className="glass p-6 rounded-2xl">
        <h4 className="font-semibold mb-3 text-foreground">💡 Usage Tips</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Use this tool for essays, articles, blog posts, and social media content</li>
          <li>• Reading time is calculated at 200 words per minute (average adult reading speed)</li>
          <li>• Speaking time is based on 130 words per minute (comfortable speaking pace)</li>
          <li>• All calculations are done in real-time as you type</li>
          <li>• Your text is processed locally and never sent to our servers</li>
        </ul>
      </div>
    </div>
  );
};