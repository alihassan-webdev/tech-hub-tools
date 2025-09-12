import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const toHex = (buf: ArrayBuffer) => Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');

export const HashGenerator = () => {
  const { toast } = useToast();
  const [text, setText] = useState('');
  const [algo, setAlgo] = useState<'SHA-1'|'SHA-256'>('SHA-256');
  const [result, setResult] = useState('');

  const compute = async () => {
    try {
      const enc = new TextEncoder();
      const hash = await crypto.subtle.digest(algo, enc.encode(text));
      setResult(toHex(hash));
      toast({ title: 'Hashed' });
    } catch (e) { toast({ title: 'Error', description: 'Hash failed' }); }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">Hash Generator (SHA-1 / SHA-256)</h3>
        <p className="text-sm text-muted-foreground">Generate hashes in the browser using SubtleCrypto.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <Label>Input</Label>
        <Textarea value={text} onChange={(e)=>setText(e.target.value)} className="min-h-[120px]" />
        <div className="flex gap-2">
          <Button variant={algo==='SHA-1'?'hero':'glass'} onClick={()=>setAlgo('SHA-1')}>SHA-1</Button>
          <Button variant={algo==='SHA-256'?'hero':'glass'} onClick={()=>setAlgo('SHA-256')}>SHA-256</Button>
          <Button variant="glass" onClick={compute}>Compute</Button>
        </div>
        <Label>Result (hex)</Label>
        <Input readOnly value={result} />
      </div>
    </div>
  );
};
