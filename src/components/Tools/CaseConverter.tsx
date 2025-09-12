import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Copy, RefreshCw, Type } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const CaseConverter = () => {
  const { toast } = useToast();
  const [text, setText] = useState('');
  const [customSeparator, setCustomSeparator] = useState(' ');

  const copy = (value: string) => {
    navigator.clipboard.writeText(value);
    toast({ title: 'Copied', description: 'Text copied to clipboard' });
  };

  const toTitleCase = (s: string) => s.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
  const toSentenceCase = (s: string) => s.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
  const toCamelCase = (s: string) => s
    .toLowerCase()
    .replace(/[^a-z0-9]+([a-z0-9])/g, (_, c) => c.toUpperCase())
    .replace(/^[^a-zA-Z_]*/, '');
  const toPascalCase = (s: string) => {
    const camel = toCamelCase(s);
    return camel ? camel[0].toUpperCase() + camel.slice(1) : '';
  };
  const toSnakeCase = (s: string) => s.trim().replace(/\s+/g, '_').replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
  const toKebabCase = (s: string) => s.trim().replace(/\s+/g, '-').replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  const toConstantCase = (s: string) => toSnakeCase(s).toUpperCase();
  const toCustomSeparated = (s: string) => s.trim().split(/\s+/).join(customSeparator);

  const options = [
    { label: 'UPPERCASE', transform: (s: string) => s.toUpperCase() },
    { label: 'lowercase', transform: (s: string) => s.toLowerCase() },
    { label: 'Title Case', transform: toTitleCase },
    { label: 'Sentence case', transform: toSentenceCase },
    { label: 'camelCase', transform: toCamelCase },
    { label: 'PascalCase', transform: toPascalCase },
    { label: 'snake_case', transform: toSnakeCase },
    { label: 'kebab-case', transform: toKebabCase },
    { label: 'CONSTANT_CASE', transform: toConstantCase },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text flex items-center">
          <Type className="w-6 h-6 mr-2" />
          Case Converter
        </h3>
        <p className="text-sm text-muted-foreground mt-2">Convert your text between multiple cases and formats instantly.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-3xl space-y-4">
          <Label className="text-sm font-medium">Input</Label>
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste or type your text here..."
            className="min-h-[220px] glass border-white/20 focus:border-primary/50"
          />
          <div className="flex gap-2 justify-end">
            <Button variant="glass" size="sm" onClick={() => setText('')}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Clear
            </Button>
            <Button variant="hero" size="sm" onClick={() => copy(text)} disabled={!text}>
              <Copy className="w-4 h-4 mr-2" /> Copy
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {options.map((opt) => {
            const converted = opt.transform(text);
            return (
              <div key={opt.label} className="glass p-4 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{opt.label}</h4>
                  <Button variant="glass" size="sm" onClick={() => copy(converted)} disabled={!text}>Copy</Button>
                </div>
                <div className="bg-background/50 p-3 rounded-lg font-mono text-sm min-h-[44px] break-words">{converted}</div>
              </div>
            );
          })}

          <div className="glass p-4 rounded-2xl">
            <div className="flex items-center justify-between mb-2 gap-3">
              <div className="flex items-center gap-2 w-full">
                <h4 className="font-semibold">Custom Separator</h4>
                <Input value={customSeparator} onChange={(e) => setCustomSeparator(e.target.value)} className="glass border-white/20 w-24 h-8 text-sm" />
              </div>
              <Button variant="glass" size="sm" onClick={() => copy(toCustomSeparated(text))} disabled={!text}>Copy</Button>
            </div>
            <div className="bg-background/50 p-3 rounded-lg font-mono text-sm min-h-[44px] break-words">{toCustomSeparated(text)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
