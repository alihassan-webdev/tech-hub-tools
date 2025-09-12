import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Code, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const HtmlEntities = () => {
  const { toast } = useToast();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const encode = (s: string) => s.replace(/[\u00A0-\u9999<>&\"']/gim, (i) => `&#${i.charCodeAt(0)};`);
  const decode = (s: string) => s.replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec));

  const doEncode = () => setOutput(encode(input));
  const doDecode = () => setOutput(decode(input));
  const copy = () => { navigator.clipboard.writeText(output); toast({ title: 'Copied', description: 'Output copied.' }); };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text flex items-center">
          <Code className="w-6 h-6 mr-2" /> HTML Entities Encoder / Decoder
        </h3>
        <p className="text-sm text-muted-foreground mt-2">Encode or decode special characters safely for HTML.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-3xl space-y-3">
          <Label>Input</Label>
          <Textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder={'<div class="example"> & text </div>'} className="min-h-[220px]" />
          <div className="flex gap-2">
            <Button variant="glass" onClick={doEncode}>Encode</Button>
            <Button variant="glass" onClick={doDecode}>Decode</Button>
          </div>
        </div>
        <div className="glass p-6 rounded-3xl space-y-3">
          <Label>Output</Label>
          <Textarea readOnly value={output} placeholder="Result will appear here..." className="min-h-[220px]" />
          <Button variant="hero" onClick={copy} disabled={!output}><Copy className="w-4 h-4 mr-2" /> Copy</Button>
        </div>
      </div>
    </div>
  );
};
