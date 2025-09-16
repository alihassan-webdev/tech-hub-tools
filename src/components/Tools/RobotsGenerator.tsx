import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Copy, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const RobotsGenerator = () => {
  const { toast } = useToast();
  const [content, setContent] = useState('User-agent: *\nDisallow:');

  const copy = () => { navigator.clipboard.writeText(content); toast({ title: 'Copied', description: 'robots.txt copied' }); };
  const download = () => { const blob = new Blob([content], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'robots.txt'; a.click(); URL.revokeObjectURL(url); toast({ title: 'Downloaded' }); };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">robots.txt Generator</h3>
        <p className="text-sm text-muted-foreground">Create robots directives for search engine crawlers.</p>
      </div>

      <div className="glass p-6 rounded-3xl">
        <Label>robots.txt content</Label>
        <Textarea value={content} onChange={(e) => setContent(e.target.value)} className="min-h-[180px]" />
        <div className="flex gap-2 mt-4">
          <Button variant="glass" onClick={copy}><Copy className="w-4 h-4 mr-2" /> Copy</Button>
          <Button variant="hero" onClick={download}><Download className="w-4 h-4 mr-2" /> Download</Button>
        </div>
      </div>
    </div>
  );
};
