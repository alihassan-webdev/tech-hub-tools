import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, RefreshCw } from 'lucide-react';

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const ref = useRef<number | null>(null);

  const start = () => {
    if (running) return;
    setRunning(true);
    ref.current = window.setInterval(() => setTime(t => t + 100), 100);
  };
  const stop = () => {
    if (ref.current) { clearInterval(ref.current); ref.current = null; }
    setRunning(false);
  };
  const reset = () => { setTime(0); stop(); };

  const format = (ms: number) => {
    const s = Math.floor(ms/1000)%60; const m = Math.floor(ms/60000)%60; const h = Math.floor(ms/3600000);
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}.${Math.floor((ms%1000)/100)}`;
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl text-center">
        <div className="text-4xl font-mono">{format(time)}</div>
        <div className="flex gap-2 justify-center mt-4">
          <Button variant="hero" onClick={start}><Play className="w-4 h-4" /></Button>
          <Button variant="glass" onClick={stop}><Pause className="w-4 h-4" /></Button>
          <Button variant="ghost" onClick={reset}><RefreshCw className="w-4 h-4" /></Button>
        </div>
      </div>
    </div>
  );
};
