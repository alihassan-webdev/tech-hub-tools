import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Code, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Base64Encoder = () => {
  const { toast } = useToast();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const encode = () => { try { setOutput(btoa(unescape(encodeURIComponent(input)))); } catch { setOutput(''); } };
  const decode = () => { try { setOutput(decodeURIComponent(escape(atob(input)))); } catch { setOutput(''); } };
  const copy = () => { navigator.clipboard.writeText(output); toast({ title: 'Copied', description: 'Output copied.' }); };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text flex items-center">
          <Code className="w-6 h-6 mr-2" /> Base64 Encoder / Decoder
        </h3>
        <p className="text-sm text-muted-foreground mt-2">Convert text to and from Base64 encoding.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-3xl space-y-3">
          <Label>Input</Label>
          <Textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Your text..." className="min-h-[200px]" />
          <div className="flex gap-2">
            <Button variant="glass" onClick={encode}>Encode</Button>
            <Button variant="glass" onClick={decode}>Decode</Button>
          </div>
        </div>
        <div className="glass p-6 rounded-3xl space-y-3">
          <Label>Output</Label>
          <Textarea readOnly value={output} placeholder="Result..." className="min-h-[200px]" />
          <Button variant="hero" onClick={copy} disabled={!output}><Copy className="w-4 h-4 mr-2" /> Copy</Button>
        </div>
      </div>
    </div>
  );
};
