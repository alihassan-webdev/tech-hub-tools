import React, { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export const CountdownTimer = () => {
  const [seconds, setSeconds] = useState<number>(60);
  const [remaining, setRemaining] = useState<number>(0);
  const [running, setRunning] = useState(false);
  const ref = useRef<number | null>(null);

  useEffect(() => { if (remaining === 0 && ref.current) { clearInterval(ref.current); ref.current = null; setRunning(false); } }, [remaining]);

  const start = () => {
    if (running) return;
    setRemaining(seconds);
    setRunning(true);
    ref.current = window.setInterval(() => setRemaining(r => Math.max(0, r-1)), 1000);
  };
  const stop = () => { if (ref.current) { clearInterval(ref.current); ref.current = null; } setRunning(false); };
  const reset = () => { stop(); setRemaining(0); };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <Label>Seconds</Label>
        <Input type="number" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value||'0',10))} />
        <div className="text-center text-4xl font-mono mt-4">{remaining}</div>
        <div className="flex gap-2 mt-4 justify-center">
          <Button variant="hero" onClick={start} disabled={running}>Start</Button>
          <Button variant="glass" onClick={stop} disabled={!running}>Stop</Button>
          <Button variant="ghost" onClick={reset}>Reset</Button>
        </div>
      </div>
    </div>
  );
};
