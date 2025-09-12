import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Hash, RefreshCw, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const RandomNumber = () => {
  const { toast } = useToast();
  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(100);
  const [value, setValue] = useState<number | null>(null);

  const generate = () => {
    const lo = Math.min(min, max);
    const hi = Math.max(min, max);
    const n = lo + Math.floor(Math.random() * (hi - lo + 1));
    setValue(n);
  };

  const copy = () => { if (value !== null) { navigator.clipboard.writeText(String(value)); toast({ title: 'Copied', description: 'Number copied.' }); } };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text flex items-center"><Hash className="w-6 h-6 mr-2" /> Random Number Generator</h3>
        <p className="text-sm text-muted-foreground mt-2">Generate a random integer between a range.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Min</Label>
            <Input type="number" value={min} onChange={(e) => setMin(parseInt(e.target.value || '0', 10))} />
          </div>
          <div>
            <Label>Max</Label>
            <Input type="number" value={max} onChange={(e) => setMax(parseInt(e.target.value || '0', 10))} />
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="glass" onClick={generate}><RefreshCw className="w-4 h-4 mr-2" /> Generate</Button>
          <Button variant="hero" onClick={copy} disabled={value === null}><Copy className="w-4 h-4 mr-2" /> Copy</Button>
        </div>
        <div className="text-center text-4xl font-bold text-accent min-h-[52px]">{value ?? '—'}</div>
      </div>
    </div>
  );
};
