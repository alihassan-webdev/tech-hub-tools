import React, { useRef, useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export const LogoMockup = () => {
  const { toast } = useToast();
  const [logoSrc, setLogoSrc] = useState('');
  const [scale, setScale] = useState(40);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const draw = async () => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current; const ctx = canvas.getContext('2d'); if (!ctx) return;
      // Draw simple device mockup (monitor)
      const w = 800; const h = 450; canvas.width = w; canvas.height = h;
      ctx.fillStyle = '#0f172a'; ctx.fillRect(0,0,w,h);
      ctx.fillStyle = '#0b1220'; ctx.fillRect(40,40,w-80,h-100);
      ctx.fillStyle = '#071024'; ctx.fillRect(0,h-40,w,40);
      // Draw logo centered
      if (logoSrc) {
        const img = new Image(); img.crossOrigin='anonymous'; img.src = logoSrc;
        await new Promise((r)=> (img.onload = r));
        const maxW = (w-160)*(scale/100); const maxH = (h-180)*(scale/100);
        const iw = img.width; const ih = img.height;
        const ratio = Math.min(maxW/iw, maxH/ih);
        const dw = iw*ratio; const dh = ih*ratio;
        ctx.drawImage(img, (w-dw)/2, (h-dh)/2 - 20, dw, dh);
      } else {
        ctx.fillStyle = '#94a3b8'; ctx.font = '24px sans-serif'; ctx.textAlign='center'; ctx.fillText('Upload a logo to preview', w/2, h/2);
      }
    };
    draw();
  }, [logoSrc, scale]);

  const onFile = (file?: File) => {
    if (!file) return; const reader = new FileReader(); reader.onload = () => setLogoSrc(String(reader.result)); reader.readAsDataURL(file);
  };

  const download = () => { if (!canvasRef.current) return; const a = document.createElement('a'); a.href = canvasRef.current.toDataURL('image/png'); a.download = 'logo-mockup.png'; a.click(); toast({ title: 'Downloaded' }); };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">Logo / Mockup Preview</h3>
        <p className="text-sm text-muted-foreground">Upload a logo and preview it on a simple device mockup.</p>
      </div>

      <div className="glass p-6 rounded-3xl grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div>
          <Label>Logo Image</Label>
          <Input type="file" accept="image/*" onChange={(e)=>onFile(e.target.files?.[0])} />
          <Label className="mt-2">Scale (%)</Label>
          <input type="range" min={10} max={100} value={scale} onChange={(e)=>setScale(parseInt(e.target.value||'40',10))} />
          <div className="flex gap-2 mt-4"><Button variant="hero" onClick={download} disabled={!logoSrc}>Download Mockup</Button></div>
        </div>
        <div className="lg:col-span-2 flex items-center justify-center">
          <canvas ref={canvasRef} className="max-w-full rounded-lg shadow" />
        </div>
      </div>
    </div>
  );
};
