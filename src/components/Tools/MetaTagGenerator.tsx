import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Copy, Download, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const MetaTagGenerator = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [canonical, setCanonical] = useState('');
  const [robots, setRobots] = useState('index, follow');

  const output = `
<meta name="title" content="${title}" />
<meta name="description" content="${description}" />
<meta name="keywords" content="${keywords}" />
<link rel="canonical" href="${canonical}" />
<meta name="robots" content="${robots}" />`.trim();

  const copy = () => {
    navigator.clipboard.writeText(output);
    toast({ title: 'Copied', description: 'Meta tags copied to clipboard' });
  };

  const download = () => {
    const blob = new Blob([output], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'meta-tags.html';
    a.click();
    URL.revokeObjectURL(url);
    toast({ title: 'Downloaded', description: 'Meta tags saved.' });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">Meta Tag Generator</h3>
        <p className="text-sm text-muted-foreground">Create SEO meta tags for your pages quickly.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <Label>Title</Label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Page title" />
        <Label>Description</Label>
        <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Meta description" className="min-h-[120px]" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Keywords (comma separated)</Label>
            <Input value={keywords} onChange={(e) => setKeywords(e.target.value)} />
          </div>
          <div>
            <Label>Canonical URL</Label>
            <Input value={canonical} onChange={(e) => setCanonical(e.target.value)} />
          </div>
        </div>
        <div>
          <Label>Robots</Label>
          <Input value={robots} onChange={(e) => setRobots(e.target.value)} />
        </div>

        <div className="bg-background/50 p-4 rounded-lg font-mono text-sm">
          {output}
        </div>

        <div className="flex gap-2">
          <Button variant="glass" onClick={copy}><Copy className="w-4 h-4 mr-2" /> Copy</Button>
          <Button variant="hero" onClick={download}><Download className="w-4 h-4 mr-2" /> Download</Button>
        </div>
      </div>
    </div>
  );
};
