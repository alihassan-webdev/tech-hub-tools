import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RefreshCw, Copy, Hash } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

function uuidv4() {
  const buf = new Uint8Array(16);
  crypto.getRandomValues(buf);
  buf[6] = (buf[6] & 0x0f) | 0x40;
  buf[8] = (buf[8] & 0x3f) | 0x80;
  const toHex = (n: number) => n.toString(16).padStart(2, '0');
  const b = Array.from(buf, toHex).join('');
  return `${b.substring(0,8)}-${b.substring(8,12)}-${b.substring(12,16)}-${b.substring(16,20)}-${b.substring(20)}`;
}

export const UUIDGenerator = () => {
  const { toast } = useToast();
  const [uuid, setUuid] = useState('');
  const [count, setCount] = useState(1);

  const generate = () => setUuid(uuidv4());
  const copy = () => { navigator.clipboard.writeText(uuid); toast({ title: 'Copied', description: 'UUID copied.' }); };

  useEffect(() => { generate(); }, []);

  const bulk = () => {
    const list = Array.from({ length: Math.min(Math.max(count, 1), 1000) }, uuidv4).join('\n');
    navigator.clipboard.writeText(list);
    toast({ title: 'Generated', description: 'Bulk UUIDs copied to clipboard.' });
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text flex items-center"><Hash className="w-6 h-6 mr-2" /> UUID Generator</h3>
        <p className="text-sm text-muted-foreground mt-2">Generate RFC 4122 compliant version 4 UUIDs.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <div className="flex gap-2">
          <Input readOnly value={uuid} className="font-mono" />
          <Button variant="glass" onClick={generate}><RefreshCw className="w-4 h-4" /></Button>
          <Button variant="hero" onClick={copy}><Copy className="w-4 h-4 mr-2" /> Copy</Button>
        </div>
        <div className="flex items-center gap-2">
          <Label>Bulk</Label>
          <Input type="number" value={count} onChange={(e) => setCount(parseInt(e.target.value || '1', 10))} className="w-24" />
          <Button variant="glass" onClick={bulk}>Generate & Copy</Button>
        </div>
      </div>
    </div>
  );
};
