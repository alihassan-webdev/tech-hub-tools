import React, { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator } from 'lucide-react';

const units = {
  Length: {
    base: 'm',
    map: { m: 1, km: 1000, cm: 0.01, mm: 0.001, mi: 1609.34, yd: 0.9144, ft: 0.3048, in: 0.0254 },
  },
  Weight: {
    base: 'kg',
    map: { kg: 1, g: 0.001, lb: 0.453592, oz: 0.0283495 },
  },
  Temperature: {
    base: 'C',
    map: {},
  },
  Volume: {
    base: 'l',
    map: { l: 1, ml: 0.001, gal: 3.78541, qt: 0.946353, pt: 0.473176 },
  },
} as const;

export const UnitConverter = () => {
  const [category, setCategory] = useState<keyof typeof units>('Length');
  const [from, setFrom] = useState<string>('m');
  const [to, setTo] = useState<string>('km');
  const [value, setValue] = useState<number>(1);

  const catUnits = useMemo(() => {
    if (category === 'Temperature') return ['C', 'F', 'K'];
    return Object.keys(units[category].map);
  }, [category]);

  const convert = useMemo(() => {
    if (category === 'Temperature') {
      const c = from === 'C' ? value : from === 'F' ? (value - 32) * (5 / 9) : value - 273.15;
      const out = to === 'C' ? c : to === 'F' ? c * (9 / 5) + 32 : c + 273.15;
      return Number(out.toFixed(4));
    }
    const toBase = value * (units[category].map as any)[from];
    const out = toBase / (units[category].map as any)[to];
    return Number(out.toFixed(6));
  }, [category, from, to, value]);

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text flex items-center"><Calculator className="w-6 h-6 mr-2" /> Unit Converter</h3>
        <p className="text-sm text-muted-foreground mt-2">Convert between length, weight, temperature and volume.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <Label>Category</Label>
            <Select value={category} onValueChange={(v: any) => { setCategory(v); setFrom(v === 'Temperature' ? 'C' : Object.keys((units as any)[v].map)[0]); setTo(v === 'Temperature' ? 'F' : Object.keys((units as any)[v].map)[1]); }}>
              <SelectTrigger className="glass border-white/20 focus:border-primary/50"><SelectValue /></SelectTrigger>
              <SelectContent>
                {Object.keys(units).map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>From</Label>
            <Select value={from} onValueChange={setFrom}>
              <SelectTrigger className="glass border-white/20 focus:border-primary/50"><SelectValue /></SelectTrigger>
              <SelectContent>
                {catUnits.map((u) => (
                  <SelectItem key={u} value={u}>{u}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>To</Label>
            <Select value={to} onValueChange={setTo}>
              <SelectTrigger className="glass border-white/20 focus:border-primary/50"><SelectValue /></SelectTrigger>
              <SelectContent>
                {catUnits.map((u) => (
                  <SelectItem key={u} value={u}>{u}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 items-end">
          <div>
            <Label>Value</Label>
            <Input type="number" value={value} onChange={(e) => setValue(parseFloat(e.target.value || '0'))} />
          </div>
          <div className="glass p-3 rounded-xl text-center">
            <div className="text-2xl font-bold text-accent">{convert}</div>
            <div className="text-xs text-muted-foreground">{to}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
