import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export const JsonCsv = () => {
  const { toast } = useToast();
  const [jsonText, setJsonText] = useState('');
  const [csvText, setCsvText] = useState('');

  const jsonToCsv = () => {
    try {
      const data = JSON.parse(jsonText);
      if (!Array.isArray(data)) throw new Error('JSON must be an array of objects');
      const keys = Array.from(new Set(data.flatMap((o: any) => Object.keys(o))));
      const rows = [keys.join(',')].concat(data.map((row: any) => keys.map(k => (`"${(row[k] ?? '').toString().replace(/"/g,'""')}"`)).join(',')));
      setCsvText(rows.join('\n'));
    } catch (e: any) { toast({ title: 'Error', description: e.message }); }
  };

  const csvToJson = () => {
    try {
      const lines = csvText.split(/\n/).map(l => l.trim()).filter(Boolean);
      const headers = lines[0].split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map(h => h.replace(/^"|"$/g, ''));
      const data = lines.slice(1).map(l => {
        const values = l.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map(v => v.replace(/^"|"$/g, '').replace(/""/g,'"'));
        const obj: any = {};
        headers.forEach((h,i)=> obj[h]=values[i]);
        return obj;
      });
      setJsonText(JSON.stringify(data, null, 2));
    } catch (e: any) { toast({ title: 'Error', description: e.message }); }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">JSON ↔ CSV Converter</h3>
        <p className="text-sm text-muted-foreground">Convert between JSON arrays and CSV (basic).</p>
      </div>

      <div className="glass p-6 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <Label>JSON</Label>
          <Textarea value={jsonText} onChange={(e)=>setJsonText(e.target.value)} className="min-h-[220px]" />
          <div className="flex gap-2 mt-2"><Button variant="hero" onClick={jsonToCsv}>Convert to CSV</Button></div>
        </div>
        <div>
          <Label>CSV</Label>
          <Textarea value={csvText} onChange={(e)=>setCsvText(e.target.value)} className="min-h-[220px]" />
          <div className="flex gap-2 mt-2"><Button variant="hero" onClick={csvToJson}>Convert to JSON</Button></div>
        </div>
      </div>
    </div>
  );
};
