import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export const GradientPreview = () => {
  const { toast } = useToast();
  const [from, setFrom] = useState('#06b6d4');
  const [to, setTo] = useState('#7c3aed');
  const [angle, setAngle] = useState(90);

  const css = `background: linear-gradient(${angle}deg, ${from}, ${to});`;
  const copy = async () => { await navigator.clipboard.writeText(css); toast({ title: 'Copied', description: 'CSS gradient copied' }); };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">CSS Gradient Preview</h3>
        <p className="text-sm text-muted-foreground">Create and copy CSS linear gradients.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <div className="grid grid-cols-3 gap-2 items-center">
          <div>
            <Label>From</Label>
            <Input type="color" value={from} onChange={(e) => setFrom(e.target.value)} />
          </div>
          <div>
            <Label>To</Label>
            <Input type="color" value={to} onChange={(e) => setTo(e.target.value)} />
          </div>
          <div>
            <Label>Angle</Label>
            <Input type="number" value={angle} onChange={(e) => setAngle(parseInt(e.target.value || '0', 10))} />
          </div>
        </div>

        <div className="rounded-lg p-8" style={{ background: `linear-gradient(${angle}deg, ${from}, ${to})` }}>
          <div className="text-white">Preview</div>
        </div>

        <div className="flex gap-2">
          <Button variant="hero" onClick={copy}>Copy CSS</Button>
        </div>
      </div>
    </div>
  );
};
