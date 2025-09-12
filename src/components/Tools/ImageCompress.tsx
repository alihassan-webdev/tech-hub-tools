import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Upload, Download, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ImageCompress = () => {
  const { toast } = useToast();
  const [imageSrc, setImageSrc] = useState<string>('');
  const [quality, setQuality] = useState<number>(80);
  const [format, setFormat] = useState<'image/jpeg' | 'image/webp'>('image/jpeg');
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [outputSize, setOutputSize] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const onFile = (file?: File) => {
    if (!file) return;
    setOriginalSize(file.size);
    const reader = new FileReader();
    reader.onload = () => setImageSrc(String(reader.result));
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!imageSrc) return;
    const img = new Image();
    img.onload = () => {
      imgRef.current = img;
      draw();
    };
    img.src = imageSrc;
  }, [imageSrc]);

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas || !imgRef.current) return;
    canvas.width = imgRef.current.width;
    canvas.height = imgRef.current.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgRef.current, 0, 0);
    const dataUrl = canvas.toDataURL(format, quality / 100);
    const size = Math.round((dataUrl.length * 3) / 4);
    setOutputSize(size);
    return dataUrl;
  };

  useEffect(() => {
    if (imgRef.current) draw();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quality, format]);

  const download = () => {
    if (!canvasRef.current) return;
    const url = canvasRef.current.toDataURL(format, quality / 100);
    const a = document.createElement('a');
    a.href = url;
    a.download = `compressed.${format === 'image/webp' ? 'webp' : 'jpg'}`;
    a.click();
    toast({ title: 'Downloaded', description: 'Compressed image saved.' });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text flex items-center">
          <ImageIcon className="w-6 h-6 mr-2" /> Image Compressor
        </h3>
        <p className="text-sm text-muted-foreground mt-2">Compress images by adjusting quality and format.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-3xl space-y-4 lg:col-span-1">
          <Label>Upload Image</Label>
          <Input type="file" accept="image/*" onChange={(e) => onFile(e.target.files?.[0])} />

          <div>
            <Label className="text-xs">Quality: {quality}%</Label>
            <Slider value={[quality]} onValueChange={(v) => setQuality(v[0])} min={1} max={100} step={1} />
          </div>

          <div className="flex gap-2 text-sm">
            <Button variant={format === 'image/jpeg' ? 'hero' : 'glass'} size="sm" onClick={() => setFormat('image/jpeg')}>JPG</Button>
            <Button variant={format === 'image/webp' ? 'hero' : 'glass'} size="sm" onClick={() => setFormat('image/webp')}>WEBP</Button>
          </div>

          <div className="text-xs text-muted-foreground">
            <div>Original: {originalSize ? (originalSize / 1024).toFixed(1) : 0} KB</div>
            <div>Estimated: {outputSize ? (outputSize / 1024).toFixed(1) : 0} KB</div>
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
