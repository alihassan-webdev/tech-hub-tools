import React, { useEffect, useState } from 'react';

export const KeyboardTester = () => {
  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => setKeys(k => [e.key, ...k].slice(0, 20));
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">Keyboard Tester</h3>
        <p className="text-sm text-muted-foreground">Press keys and see the last 20 events.</p>
      </div>

      <div className="glass p-6 rounded-3xl">
        <div className="flex flex-wrap gap-2">{keys.map((k,i)=> <div key={i} className="p-2 bg-background/50 rounded">{k}</div>)}</div>
      </div>
    </div>
  );
};
