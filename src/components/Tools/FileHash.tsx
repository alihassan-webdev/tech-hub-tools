import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const toHex = (buf: ArrayBuffer) => Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');

export const FileHash = () => {
  const { toast } = useToast();
  const [algo, setAlgo] = useState<'SHA-1'|'SHA-256'>('SHA-256');
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState('');

  const onFile = (f?: File) => setFile(f || null);

  const compute = async () => {
    if (!file) return;
    try {
      const buf = await file.arrayBuffer();
      const hash = await crypto.subtle.digest(algo, buf);
      setResult(toHex(hash));
      toast({ title: 'Hashed' });
    } catch (e:any){ toast({ title: 'Error', description: e.message }); }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">File Hash Generator</h3>
        <p className="text-sm text-muted-foreground">Compute SHA-1 or SHA-256 hash of a file in-browser.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <Label>File</Label>
        <Input type="file" onChange={(e)=>onFile(e.target.files?.[0])} />
        <div className="flex gap-2">
          <Button variant={algo==='SHA-1'?'hero':'glass'} onClick={()=>setAlgo('SHA-1')}>SHA-1</Button>
          <Button variant={algo==='SHA-256'?'hero':'glass'} onClick={()=>setAlgo('SHA-256')}>SHA-256</Button>
          <Button variant="hero" onClick={compute} disabled={!file}>Compute</Button>
        </div>
        <Label>Result (hex)</Label>
        <Input readOnly value={result} />
      </div>
    </div>
  );
};
