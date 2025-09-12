import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export const APITester = () => {
  const { toast } = useToast();
  const [url, setUrl] = useState('https://api.github.com');
  const [method, setMethod] = useState<'GET'|'POST'>('GET');
  const [headers, setHeaders] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState('');

  const run = async () => {
    try {
      const hdrs: any = {};
      headers.split('\n').forEach(line => { const [k,v] = line.split(':'); if (k && v !== undefined) hdrs[k.trim()] = v.trim(); });
      const res = await fetch(url, { method, headers: hdrs, body: method==='POST' && body ? body : undefined });
      const txt = await res.text();
      setResponse(txt);
    } catch (e: any) { toast({ title: 'Error', description: e.message }); }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">API Request Tester</h3>
        <p className="text-sm text-muted-foreground">Make GET/POST requests. CORS may limit some endpoints.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <Label>URL</Label>
        <Input value={url} onChange={(e)=>setUrl(e.target.value)} />
        <div className="grid grid-cols-2 gap-2">
          <Button variant={method==='GET'?'hero':'glass'} onClick={() => setMethod('GET')}>GET</Button>
          <Button variant={method==='POST'?'hero':'glass'} onClick={() => setMethod('POST')}>POST</Button>
        </div>
        <Label>Headers (one per line: Key: Value)</Label>
        <Textarea value={headers} onChange={(e)=>setHeaders(e.target.value)} className="min-h-[80px]" />
        {method==='POST' && (<>
          <Label>Body</Label>
          <Textarea value={body} onChange={(e)=>setBody(e.target.value)} className="min-h-[120px]" />
        </>)}
        <div className="flex gap-2"><Button variant="hero" onClick={run}>Send Request</Button></div>
        <Label>Response</Label>
        <Textarea readOnly value={response} className="min-h-[220px] font-mono" />
      </div>
    </div>
  );
};
