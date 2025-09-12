import React, { useMemo, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Type, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const LoremGenerator = () => {
  const { toast } = useToast();
  const [paragraphs, setParagraphs] = useState<number>(3);

  const text = useMemo(() => Array.from({ length: paragraphs }).map(() => LOREM).join('\n\n'), [paragraphs]);

  const copy = () => { navigator.clipboard.writeText(text); toast({ title: 'Copied', description: 'Lorem ipsum copied.' }); };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text flex items-center">
          <Type className="w-6 h-6 mr-2" /> Lorem Ipsum Generator
        </h3>
        <p className="text-sm text-muted-foreground mt-2">Generate placeholder text for designs and layouts.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <Label>Paragraphs: {paragraphs}</Label>
        <Slider value={[paragraphs]} onValueChange={(v) => setParagraphs(v[0])} min={1} max={10} step={1} />
        <Textarea value={text} readOnly className="min-h-[240px]" />
        <Button variant="hero" onClick={copy}><Copy className="w-4 h-4 mr-2" /> Copy</Button>
      </div>
    </div>
  );
};
