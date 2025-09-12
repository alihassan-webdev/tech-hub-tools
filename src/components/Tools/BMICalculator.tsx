import React, { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Activity, Calculator } from 'lucide-react';

export const BMICalculator = () => {
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(70);

  const bmi = useMemo(() => {
    const h = height / 100;
    const v = weight / (h * h);
    return Number.isFinite(v) ? Number(v.toFixed(1)) : 0;
  }, [height, weight]);

  const category = useMemo(() => {
    if (!bmi) return '';
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 24.9) return 'Normal';
    if (bmi < 29.9) return 'Overweight';
    return 'Obese';
  }, [bmi]);

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text flex items-center"><Activity className="w-6 h-6 mr-2" /> BMI Calculator</h3>
        <p className="text-sm text-muted-foreground mt-2">Body Mass Index based on height and weight.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Height (cm)</Label>
            <Input type="number" value={height} onChange={(e) => setHeight(parseFloat(e.target.value || '0'))} />
          </div>
          <div>
            <Label>Weight (kg)</Label>
            <Input type="number" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value || '0'))} />
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-accent">{bmi}</div>
          <div className="text-sm text-muted-foreground">{category}</div>
        </div>
      </div>
    </div>
  );
};
