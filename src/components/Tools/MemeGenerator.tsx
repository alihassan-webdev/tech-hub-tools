import React, { useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Download, Image, Type } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const MemeGenerator = () => {
  const { toast } = useToast();
  const [imageSrc, setImageSrc] = useState<string>('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const onFile = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImageSrc(String(reader.result));
    reader.readAsDataURL(file);
  };

  const draw = async () => {
    if (!canvasRef.current || !imageSrc) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;
    await new Promise((res) => (img.onload = res));
    const maxW = 800;
    const scale = Math.min(1, maxW / img.width);
    canvas.width = img.width * scale;
    canvas.height = img.height * scale;
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#000';
    const fontSize = Math.max(20, Math.floor(canvas.width / 12));
    ctx.font = `bold ${fontSize}px Impact, Arial`;
    ctx.lineWidth = Math.max(2, Math.floor(fontSize / 10));
    if (topText) {
      ctx.fillText(topText.toUpperCase(), canvas.width / 2, fontSize + 10);
      ctx.strokeText(topText.toUpperCase(), canvas.width / 2, fontSize + 10);
    }
    if (bottomText) {
      ctx.fillText(bottomText.toUpperCase(), canvas.width / 2, canvas.height - 10);
      ctx.strokeText(bottomText.toUpperCase(), canvas.width / 2, canvas.height - 10);
    }
  };

  React.useEffect(() => { draw(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [imageSrc, topText, bottomText]);

  const download = () => {
    if (!canvasRef.current) return;
    const a = document.createElement('a');
    a.href = canvasRef.current.toDataURL('image/png');
    a.download = 'meme.png';
    a.click();
    toast({ title: 'Downloaded', description: 'Meme saved.' });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text"><Image className="w-5 h-5 mr-2 inline-block" /> Meme Generator</h3>
        <p className="text-sm text-muted-foreground">Upload an image, add top/bottom text and download your meme.</p>
      </div>

      <div className="glass p-6 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <Label>Image</Label>
          <Input type="file" accept="image/*" onChange={(e) => onFile(e.target.files?.[0])} />
          <Label className="mt-3">Top Text</Label>
          <Input value={topText} onChange={(e) => setTopText(e.target.value)} />
          <Label className="mt-3">Bottom Text</Label>
          <Input value={bottomText} onChange={(e) => setBottomText(e.target.value)} />
          <div className="flex gap-2 mt-4">
            <Button variant="hero" onClick={download} disabled={!imageSrc}><Download className="w-4 h-4 mr-2" /> Download</Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {imageSrc ? (
            <canvas ref={canvasRef} className="max-w-full rounded-lg shadow" />
          ) : (
            <div className="text-muted-foreground">Upload an image to start creating a meme.</div>
          )}
        </div>
      </div>
    </div>
  );
};
