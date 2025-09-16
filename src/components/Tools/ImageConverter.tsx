import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Download, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ImageConverter = () => {
  const { toast } = useToast();
  const [imageSrc, setImageSrc] = useState<string>('');
  const [format, setFormat] = useState<'image/png' | 'image/jpeg' | 'image/webp'>('image/png');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

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
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
    };
    img.src = imageSrc;
  }, [imageSrc]);

  const download = () => {
    if (!canvasRef.current) return;
    const url = canvasRef.current.toDataURL(format, 0.92);
    const a = document.createElement('a');
    a.href = url;
    a.download = `converted.${format === 'image/png' ? 'png' : format === 'image/webp' ? 'webp' : 'jpg'}`;
    a.click();
    toast({ title: 'Downloaded', description: 'Converted image saved.' });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text flex items-center">
          <RefreshCw className="w-6 h-6 mr-2" /> Image Converter
        </h3>
        <p className="text-sm text-muted-foreground mt-2">Convert between PNG, JPG and WEBP formats.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-3xl space-y-4">
          <Label>Upload Image</Label>
          <Input type="file" accept="image/*" onChange={(e) => onFile(e.target.files?.[0])} />

          <div className="flex gap-2 text-sm">
            <Button variant={format === 'image/png' ? 'hero' : 'glass'} size="sm" onClick={() => setFormat('image/png')}>PNG</Button>
            <Button variant={format === 'image/jpeg' ? 'hero' : 'glass'} size="sm" onClick={() => setFormat('image/jpeg')}>JPG</Button>
            <Button variant={format === 'image/webp' ? 'hero' : 'glass'} size="sm" onClick={() => setFormat('image/webp')}>WEBP</Button>
          </div>

          <Button variant="hero" className="w-full" onClick={download} disabled={!imageSrc}>
            <Download className="w-4 h-4 mr-2" /> Download
          </Button>
        </div>

        <div className="glass p-6 rounded-3xl min-h-[320px] flex items-center justify-center">
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
