import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Copy, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const SitemapGenerator = () => {
  const { toast } = useToast();
  const [urlsText, setUrlsText] = useState('https://example.com/');

  const generate = () => {
    const urls = urlsText.split(/\n+/).map(u => u.trim()).filter(Boolean);
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url>\n    <loc>${u}</loc>\n  </url>`).join('\n')}\n</urlset>`;
    return xml;
  };

  const copy = () => { navigator.clipboard.writeText(generate()); toast({ title: 'Copied', description: 'Sitemap XML copied' }); };
  const download = () => { const blob = new Blob([generate()], { type: 'application/xml' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'sitemap.xml'; a.click(); URL.revokeObjectURL(url); toast({ title: 'Downloaded' }); };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">Sitemap Generator</h3>
        <p className="text-sm text-muted-foreground">Build a simple XML sitemap from a list of URLs.</p>
      </div>

      <div className="glass p-6 rounded-3xl">
        <Label>Enter one URL per line</Label>
        <Textarea value={urlsText} onChange={(e) => setUrlsText(e.target.value)} className="min-h-[220px]" />
        <div className="flex gap-2 mt-4">
          <Button variant="glass" onClick={copy}><Copy className="w-4 h-4 mr-2" /> Copy XML</Button>
          <Button variant="hero" onClick={download}><Download className="w-4 h-4 mr-2" /> Download</Button>
        </div>
      </div>
    </div>
  );
};
