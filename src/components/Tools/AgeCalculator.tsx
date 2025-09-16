import React, { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Calculator } from 'lucide-react';

export const AgeCalculator = () => {
  const [dob, setDob] = useState<string>('');

  const diff = useMemo(() => {
    if (!dob) return null;
    const birth = new Date(dob);
    const now = new Date();
    if (isNaN(birth.getTime())) return null;
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    if (days < 0) { months -= 1; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
    if (months < 0) { years -= 1; months += 12; }
    return { years, months, days };
  }, [dob]);

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text flex items-center"><Calculator className="w-6 h-6 mr-2" /> Age Calculator</h3>
        <p className="text-sm text-muted-foreground mt-2">Calculate your exact age in years, months and days.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <Label>Date of Birth</Label>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <Input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </div>

        {diff && (
          <div className="grid grid-cols-3 gap-3 text-center mt-2">
            <div className="glass p-3 rounded-xl">
              <div className="text-2xl font-bold text-accent">{diff.years}</div>
              <div className="text-xs text-muted-foreground">Years</div>
            </div>
            <div className="glass p-3 rounded-xl">
              <div className="text-2xl font-bold text-accent">{diff.months}</div>
              <div className="text-xs text-muted-foreground">Months</div>
            </div>
            <div className="glass p-3 rounded-xl">
              <div className="text-2xl font-bold text-accent">{diff.days}</div>
              <div className="text-xs text-muted-foreground">Days</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
