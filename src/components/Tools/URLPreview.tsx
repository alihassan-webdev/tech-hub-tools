import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export const URLPreview = () => {
  const { toast } = useToast();
  const [url, setUrl] = useState('');
  const [meta, setMeta] = useState<{title?:string,desc?:string,ok?:boolean, error?:string}>({});

  const validate = (u:string) => {
    try {
      const p = new URL(u);
      return p.toString();
    } catch { return null; }
  };

  const fetchMeta = async () => {
    const v = validate(url);
    if (!v) { setMeta({ error: 'Invalid URL' }); return; }
    setMeta({ ok: false });
    try {
      // Try fetch (may be blocked by CORS)
      const res = await fetch(v, { method: 'GET' });
      const txt = await res.text();
      const titleMatch = txt.match(/<title>(.*?)<\/title>/i);
      const descMatch = txt.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']\s*\/?>/i) || txt.match(/<meta\s+content=["'](.*?)["']\s+name=["']description["']\s*\/?>/i);
      setMeta({ title: titleMatch?.[1] || '', desc: descMatch?.[1] || '', ok: true });
    } catch (e:any) {
      setMeta({ error: 'Unable to fetch (CORS or network)', title: '', desc: '' });
      toast({ title: 'Warning', description: 'Fetch blocked or failed. Basic validation passed.' });
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">URL Validator & Preview</h3>
        <p className="text-sm text-muted-foreground">Validate a URL and attempt to fetch Open Graph/title. Fetch may be blocked by CORS.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <Label>URL</Label>
        <Input value={url} onChange={(e)=>setUrl(e.target.value)} placeholder="https://example.com" />
        <div className="flex gap-2"><Button variant="hero" onClick={fetchMeta}>Validate & Fetch</Button></div>

        {meta.error && <div className="text-sm text-destructive">{meta.error}</div>}
        {meta.ok && (
          <div className="bg-background/50 p-4 rounded">
            <div className="text-lg font-medium">{meta.title || 'No title found'}</div>
            <div className="text-sm text-muted-foreground mt-1">{meta.desc || 'No description found'}</div>
          </div>
        )}
      </div>
    </div>
  );
};
