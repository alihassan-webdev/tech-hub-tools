import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Simple conversion helpers (basic)
const htmlToMarkdown = (html: string) => {
  let s = html;
  s = s.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n');
  s = s.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n');
  s = s.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**');
  s = s.replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**');
  s = s.replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*');
  s = s.replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*');
  s = s.replace(/<a[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');
  s = s.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n');
  s = s.replace(/<\/p>/gi, '\n\n');
  s = s.replace(/<[^>]+>/g, '');
  return s.trim();
};

const markdownToHtml = (md: string) => {
  let html = md;
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
  html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');
  html = html.replace(/^- (.*)/gim, '<li>$1</li>');
  html = html.replace(/(\r?\n){2,}/gim, '<p></p>');
  return html;
};

export const HtmlMarkdown = () => {
  const { toast } = useToast();
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'html2md'|'md2html'>('html2md');

  const result = mode === 'html2md' ? htmlToMarkdown(input) : markdownToHtml(input);

  const copy = () => { navigator.clipboard.writeText(result); toast({ title: 'Copied' }); };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">HTML ↔ Markdown Converter</h3>
        <p className="text-sm text-muted-foreground">Basic client-side conversion between HTML and Markdown.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <div className="flex gap-2">
          <Button variant={mode==='html2md'? 'hero':'glass'} onClick={() => setMode('html2md')}>HTML → Markdown</Button>
          <Button variant={mode==='md2html'? 'hero':'glass'} onClick={() => setMode('md2html')}>Markdown → HTML</Button>
        </div>

        <Label>Input</Label>
        <Textarea value={input} onChange={(e) => setInput(e.target.value)} className="min-h-[180px]" />

        <Label>Output</Label>
        <Textarea readOnly value={result} className="min-h-[180px]" />

        <div className="flex gap-2">
          <Button variant="glass" onClick={copy}>Copy</Button>
        </div>
      </div>
    </div>
  );
};
