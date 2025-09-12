import React, { useMemo, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Copy, Hash } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const CharacterCounter = () => {
  const { toast } = useToast();
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, '').length;
    const words = (text.trim().match(/\b\w+\b/g) || []).length;
    const sentences = (text.match(/[.!?]+\s|\n|$/g) || []).filter(Boolean).length;
    const lines = text.split('\n').length;
    return { chars, charsNoSpaces, words, sentences, lines };
  }, [text]);

  const copyStats = () => {
    const out = `Characters: ${stats.chars}\nCharacters (no spaces): ${stats.charsNoSpaces}\nWords: ${stats.words}\nSentences: ${stats.sentences}\nLines: ${stats.lines}`;
    navigator.clipboard.writeText(out);
    toast({ title: 'Copied', description: 'Stats copied to clipboard' });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text flex items-center">
          <Hash className="w-6 h-6 mr-2" /> Character Counter
        </h3>
        <p className="text-sm text-muted-foreground mt-2">Analyze your text with detailed counts and metrics.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-3xl">
          <Label className="text-sm font-medium">Input</Label>
          <Textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Type or paste text..." className="min-h-[220px] glass border-white/20 focus:border-primary/50" />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Characters" value={stats.chars} />
            <StatCard label="No-spaces" value={stats.charsNoSpaces} />
            <StatCard label="Words" value={stats.words} />
            <StatCard label="Sentences" value={stats.sentences} />
            <StatCard label="Lines" value={stats.lines} />
          </div>
          <Button variant="hero" onClick={copyStats} className="w-full"><Copy className="w-4 h-4 mr-2" /> Copy Stats</Button>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value }: { label: string; value: number }) => (
  <div className="glass p-4 rounded-2xl text-center">
    <div className="text-2xl font-bold text-accent">{value.toLocaleString()}</div>
    <div className="text-xs text-muted-foreground">{label}</div>
  </div>
);
