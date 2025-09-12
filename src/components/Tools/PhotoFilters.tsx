import React, { useRef, useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Upload, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const PhotoFilters = () => {
  const { toast } = useToast();
  const [src, setSrc] = useState('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);

  const onFile = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setSrc(String(reader.result));
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      imgRef.current = img;
      draw();
    };
  }, [src]);

  const draw = () => {
    if (!canvasRef.current || !imgRef.current) return;
    const canvas = canvasRef.current; const ctx = canvas.getContext('2d'); if (!ctx) return;
    const img = imgRef.current;
    const maxW = 800; const scale = Math.min(1, maxW / img.width);
    canvas.width = img.width * scale; canvas.height = img.height * scale;
    ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.filter = 'none';
  };

  useEffect(() => { draw(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [brightness, contrast, saturation]);

  const download = () => { if (!canvasRef.current) return; const a = document.createElement('a'); a.href = canvasRef.current.toDataURL('image/jpeg', 0.92); a.download = 'filtered.jpg'; a.click(); toast({ title: 'Downloaded' }); };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">Photo Filters</h3>
        <p className="text-sm text-muted-foreground">Apply basic filters to images using canvas.</p>
      </div>

      <div className="glass p-6 rounded-3xl grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div>
          <Label>Upload</Label>
          <Input type="file" accept="image/*" onChange={(e) => onFile(e.target.files?.[0])} />
          <div className="mt-4">
            <Label>Brightness</Label>
            <input type="range" min={0} max={200} value={brightness} onChange={(e) => setBrightness(parseInt(e.target.value))} />
            <Label>Contrast</Label>
            <input type="range" min={0} max={200} value={contrast} onChange={(e) => setContrast(parseInt(e.target.value))} />
            <Label>Saturation</Label>
            <input type="range" min={0} max={200} value={saturation} onChange={(e) => setSaturation(parseInt(e.target.value))} />
          </div>
          <div className="flex gap-2 mt-4">
            <Button variant="hero" onClick={download} disabled={!src}><Download className="w-4 h-4 mr-2" /> Download</Button>
          </div>
        </div>
        <div className="lg:col-span-2 flex items-center justify-center">
          {src ? <canvas ref={canvasRef} className="max-w-full rounded-lg shadow" /> : <div className="text-muted-foreground">Upload an image to apply filters.</div>}
        </div>
      </div>
    </div>
  );
};
