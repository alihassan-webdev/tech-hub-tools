import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Upload, Download, Image as ImageIcon, Link as LinkIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ImageResize = () => {
  const { toast } = useToast();
  const [imageSrc, setImageSrc] = useState<string>('');
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [keepRatio, setKeepRatio] = useState<boolean>(true);
  const [scale, setScale] = useState<number>(100);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const aspect = useRef<number>(1);

  const onFile = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImageSrc(String(reader.result));
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!imageSrc) return;
    const img = new Image();
    img.onload = () => {
      imgRef.current = img;
      aspect.current = img.width / img.height;
      setWidth(img.width);
      setHeight(img.height);
      draw(img.width, img.height);
    };
    img.src = imageSrc;
  }, [imageSrc]);

  const draw = (w: number, h: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (!ctx || !imgRef.current) return;
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(imgRef.current, 0, 0, w, h);
  };

  const onWidthChange = (val: number) => {
    setWidth(val);
    if (keepRatio) {
      const h = Math.round(val / aspect.current);
      setHeight(h);
      draw(val, h);
    } else {
      draw(val, height);
    }
  };

  const onHeightChange = (val: number) => {
    setHeight(val);
    if (keepRatio) {
      const w = Math.round(val * aspect.current);
      setWidth(w);
      draw(w, val);
    } else {
      draw(width, val);
    }
  };

  const onScaleChange = (s: number) => {
    setScale(s);
    if (!imgRef.current) return;
    const w = Math.round((imgRef.current.width * s) / 100);
    const h = Math.round((imgRef.current.height * s) / 100);
    setWidth(w);
    setHeight(h);
    draw(w, h);
  };

  const download = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = 'resized.png';
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
    toast({ title: 'Downloaded', description: 'Resized image saved.' });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text flex items-center">
          <ImageIcon className="w-6 h-6 mr-2" /> Image Resizer
        </h3>
        <p className="text-sm text-muted-foreground mt-2">Resize images precisely while maintaining quality.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-3xl space-y-4 lg:col-span-1">
          <Label className="text-sm font-medium">Upload Image</Label>
          <Input type="file" accept="image/*" onChange={(e) => onFile(e.target.files?.[0])} />

          <div className="grid grid-cols-2 gap-3 mt-2">
            <div>
              <Label className="text-xs">Width (px)</Label>
              <Input type="number" value={width} onChange={(e) => onWidthChange(parseInt(e.target.value || '0', 10))} />
            </div>
            <div>
              <Label className="text-xs">Height (px)</Label>
              <Input type="number" value={height} onChange={(e) => onHeightChange(parseInt(e.target.value || '0', 10))} />
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <input id="ratio" type="checkbox" checked={keepRatio} onChange={(e) => setKeepRatio(e.target.checked)} />
            <Label htmlFor="ratio">Keep aspect ratio</Label>
            <LinkIcon className={`w-4 h-4 ${keepRatio ? 'text-accent' : 'text-muted-foreground'}`} />
          </div>

          <div className="mt-2">
            <Label className="text-xs">Scale: {scale}%</Label>
            <Slider value={[scale]} onValueChange={(v) => onScaleChange(v[0])} min={1} max={300} step={1} />
          </div>

          <Button variant="hero" className="w-full" onClick={download} disabled={!imageSrc}>
            <Download className="w-4 h-4 mr-2" /> Download
          </Button>
        </div>

        <div className="glass p-6 rounded-3xl lg:col-span-2 min-h-[360px] flex items-center justify-center">
          {imageSrc ? (
            <canvas ref={canvasRef} className="max-w-full rounded-xl shadow-glow" />
          ) : (
            <div className="text-center text-muted-foreground">
              <Upload className="w-12 h-12 mx-auto mb-3 opacity-60" />
              <p>Upload an image to begin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
