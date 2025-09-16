import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const prettyHtml = (s: string) => {
  try {
    const doc = new DOMParser().parseFromString(s, 'text/html');
    return '<!doctype html>\n' + new XMLSerializer().serializeToString(doc.documentElement);
  } catch { return s; }
};

const simpleJs = (s: string) => s.replace(/\{\s*/g, '{\n  ').replace(/;\s*/g, ';\n').replace(/\n\s*\n/g, '\n');
const simpleCss = (s: string) => s.replace(/\{\s*/g, '{\n  ').replace(/;\s*/g, ';\n').replace(/\n\s*\n/g, '\n');

export const CodeBeautifier = () => {
  const { toast } = useToast();
  const [input, setInput] = useState('');
  const [lang, setLang] = useState<'html'|'css'|'js'>('html');

  const output = lang === 'html' ? prettyHtml(input) : lang === 'js' ? simpleJs(input) : simpleCss(input);
  const copy = () => { navigator.clipboard.writeText(output); toast({ title: 'Copied' }); };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">Code Beautifier</h3>
        <p className="text-sm text-muted-foreground">Basic client-side beautifier for HTML, CSS and JS.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <div className="flex gap-2">
          <Button variant={lang==='html'?'hero':'glass'} onClick={() => setLang('html')}>HTML</Button>
          <Button variant={lang==='css'?'hero':'glass'} onClick={() => setLang('css')}>CSS</Button>
          <Button variant={lang==='js'?'hero':'glass'} onClick={() => setLang('js')}>JS</Button>
        </div>

        <Label>Input</Label>
        <Textarea value={input} onChange={(e) => setInput(e.target.value)} className="min-h-[220px]" />

        <Label>Output</Label>
        <Textarea readOnly value={output} className="min-h-[220px] font-mono" />

        <div className="flex gap-2">
          <Button variant="glass" onClick={copy}>Copy</Button>
        </div>
      </div>
    </div>
  );
};
