import React, { useMemo, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export const HTMLTableGenerator = () => {
  const { toast } = useToast();
  const [csv, setCsv] = useState('name,age,city\nAlice,30,NY\nBob,25,LA');

  const rows = useMemo(() => csv.split(/\n/).map(r => r.split(/,/)), [csv]);

  const html = useMemo(() => {
    const header = rows[0] || [];
    const body = rows.slice(1);
    return `<table border="1">\n<thead>\n<tr>\n${header.map(h => `<th>${h}</th>`).join('')}\n</tr>\n</thead>\n<tbody>\n${body.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('\n')}\n</tbody>\n</table>`;
  }, [rows]);

  const copy = () => { navigator.clipboard.writeText(html); toast({ title: 'Copied', description: 'HTML table copied' }); };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">HTML Table Generator</h3>
        <p className="text-sm text-muted-foreground">Generate an HTML table from CSV input.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <Label>CSV Input (comma separated)</Label>
        <Textarea value={csv} onChange={(e) => setCsv(e.target.value)} className="min-h-[160px]" />

        <Label>Output HTML</Label>
        <Textarea readOnly value={html} className="min-h-[160px] font-mono" />

        <div className="flex gap-2">
          <Button variant="glass" onClick={copy}>Copy HTML</Button>
        </div>
      </div>
    </div>
  );
};
