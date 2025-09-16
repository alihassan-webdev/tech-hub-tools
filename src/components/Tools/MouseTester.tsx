import React, { useEffect, useState } from 'react';

export const MouseTester = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const click = () => setClicks(c => c + 1);
    window.addEventListener('mousemove', move);
    window.addEventListener('click', click);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('click', click); };
  }, []);

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">Mouse Tester</h3>
        <p className="text-sm text-muted-foreground">Track mouse position and clicks.</p>
      </div>

      <div className="glass p-6 rounded-3xl">
        <div>Position: <strong>{pos.x} x {pos.y}</strong></div>
        <div>Clicks: <strong>{clicks}</strong></div>
      </div>
    </div>
  );
};
