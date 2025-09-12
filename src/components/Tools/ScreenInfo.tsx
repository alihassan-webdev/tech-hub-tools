import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export const ScreenInfo = () => {
  const { toast } = useToast();
  const width = window.screen.width;
  const height = window.screen.height;
  const availW = window.screen.availWidth;
  const availH = window.screen.availHeight;
  const ua = navigator.userAgent;

  const copy = () => { navigator.clipboard.writeText(`Resolution: ${width}x${height}\nAvailable: ${availW}x${availH}\nUA: ${ua}`); toast({ title: 'Copied' }); };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">Screen & Browser Info</h3>
        <p className="text-sm text-muted-foreground">Detect screen resolution and user agent.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <div className="text-sm">Resolution: <strong>{width} x {height}</strong></div>
        <div className="text-sm">Available: <strong>{availW} x {availH}</strong></div>
        <div className="text-sm">User Agent: <div className="font-mono text-xs break-words">{ua}</div></div>
        <div className="flex gap-2 mt-3"><Button variant="hero" onClick={copy}>Copy Info</Button></div>
      </div>
    </div>
  );
};
