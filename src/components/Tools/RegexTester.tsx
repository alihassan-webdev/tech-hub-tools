import React, { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { AlertCircle, CheckCircle, Search } from 'lucide-react';

export const RegexTester = () => {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('g');
  const [text, setText] = useState('');

  const result = useMemo(() => {
    if (!pattern) return { error: '', matches: [] as string[] };
    try {
      const re = new RegExp(pattern, flags);
      const matches = text.match(re) || [];
      return { error: '', matches };
    } catch (e) {
      return { error: (e as Error).message, matches: [] as string[] };
    }
  }, [pattern, flags, text]);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text flex items-center">
          <Search className="w-6 h-6 mr-2" /> Regex Tester
        </h3>
        <p className="text-sm text-muted-foreground mt-2">Test JavaScript regular expressions with live results.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <Label>Pattern</Label>
            <Input value={pattern} onChange={(e) => setPattern(e.target.value)} placeholder={"e.g. \\w+@\\w+\\.\\w+"} />
          </div>
          <div>
            <Label>Flags</Label>
            <Input value={flags} onChange={(e) => setFlags(e.target.value.replace(/[^gimsuy]/g, ''))} placeholder="gim" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Test Text</Label>
            <Textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste text to test against..." className="min-h-[160px]" />
          </div>
          <div>
            <Label>Matches</Label>
            <div className="glass p-4 rounded-2xl min-h-[160px]">
              {result.error ? (
                <div className="flex items-center text-destructive text-sm">
                  <AlertCircle className="w-4 h-4 mr-2" /> {result.error}
                </div>
              ) : result.matches.length ? (
                <ul className="list-disc ml-5 text-sm space-y-1">
                  {result.matches.map((m, i) => (
                    <li key={i} className="text-foreground">{m}</li>
                  ))}
                </ul>
              ) : (
                <div className="flex items-center text-muted-foreground text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" /> No matches found yet
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
