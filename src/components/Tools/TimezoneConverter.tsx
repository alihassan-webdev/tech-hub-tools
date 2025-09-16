import React, { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const zones = ['UTC','America/New_York','Europe/London','Asia/Kolkata','Asia/Tokyo','Australia/Sydney'];

export const TimezoneConverter = () => {
  const [dateStr, setDateStr] = useState<string>(new Date().toISOString().slice(0,16));
  const [from, setFrom] = useState<string>('UTC');
  const [to, setTo] = useState<string>('Asia/Kolkata');

  const out = useMemo(() => {
    try {
      const dt = new Date(dateStr);
      const fromStr = dt.toLocaleString('en-US', { timeZone: from });
      const t = new Date(fromStr);
      return t.toLocaleString('en-US', { timeZone: to });
    } catch { return '' }
  }, [dateStr, from, to]);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">Time Zone Converter</h3>
        <p className="text-sm text-muted-foreground">Convert between common time zones client-side.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <Label>Date & Time (local ISO)</Label>
        <Input type="datetime-local" value={dateStr} onChange={(e) => setDateStr(e.target.value)} />
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label>From</Label>
            <Select value={from} onValueChange={setFrom}><SelectTrigger className="glass"><SelectValue /></SelectTrigger><SelectContent>{zones.map(z => <SelectItem key={z} value={z}>{z}</SelectItem>)}</SelectContent></Select>
          </div>
          <div>
            <Label>To</Label>
            <Select value={to} onValueChange={setTo}><SelectTrigger className="glass"><SelectValue /></SelectTrigger><SelectContent>{zones.map(z => <SelectItem key={z} value={z}>{z}</SelectItem>)}</SelectContent></Select>
          </div>
        </div>

        <div className="bg-background/50 p-3 rounded text-sm">{out || 'Invalid date'}</div>
      </div>
    </div>
  );
};
