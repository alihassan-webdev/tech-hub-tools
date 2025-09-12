import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const clamp = (v: number, a = 0, b = 255) => Math.min(b, Math.max(a, Math.round(v)));

const hexToRgb = (hex: string) => {
  const h = hex.replace('#', '').trim();
  if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
  const r = parseInt(h.substring(0,2),16);
  const g = parseInt(h.substring(2,4),16);
  const b = parseInt(h.substring(4,6),16);
  return { r,g,b };
};

const rgbToHex = (r:number,g:number,b:number) => '#'+[r,g,b].map(x=>x.toString(16).padStart(2,'0')).join('');

const rgbToHsl = (r:number,g:number,b:number) => {
  r/=255;g/=255;b/=255;
  const max=Math.max(r,g,b), min=Math.min(r,g,b);
  let h=0,s=0,l=(max+min)/2;
  if(max!==min){
    const d=max-min;
    s = l>0.5? d/(2-max-min) : d/(max+min);
    switch(max){
      case r: h = (g-b)/d + (g<b?6:0); break;
      case g: h = (b-r)/d + 2; break;
      case b: h = (r-g)/d + 4; break;
    }
    h /= 6;
  }
  return { h: Math.round(h*360), s: Math.round(s*100), l: Math.round(l*100) };
};

const hslToRgb = (h:number,s:number,l:number) => {
  h = h/360; s = s/100; l = l/100;
  if(s===0){
    const v = Math.round(l*255); return { r:v,g:v,b:v };
  }
  const hue2rgb = (p:number,q:number,t:number) => {
    if(t<0) t+=1; if(t>1) t-=1;
    if(t<1/6) return p + (q-p)*6*t;
    if(t<1/2) return q;
    if(t<2/3) return p + (q-p)*(2/3-t)*6;
    return p;
  };
  const q = l<0.5 ? l*(1+s) : l+s - l*s;
  const p = 2*l - q;
  const r = Math.round(hue2rgb(p,q,h+1/3)*255);
  const g = Math.round(hue2rgb(p,q,h)*255);
  const b = Math.round(hue2rgb(p,q,h-1/3)*255);
  return { r,g,b };
};

export const HexRgbHsl = () => {
  const { toast } = useToast();
  const [hex, setHex] = useState('#3b82f6');
  const [r,setR] = useState(59);
  const [g,setG] = useState(130);
  const [b,setB] = useState(246);
  const [h,setH] = useState(217);
  const [s,setS] = useState(91);
  const [l,setL] = useState(60);

  useEffect(()=>{
    const rgb = hexToRgb(hex);
    if(rgb){
      setR(rgb.r); setG(rgb.g); setB(rgb.b);
      const hsl = rgbToHsl(rgb.r,rgb.g,rgb.b);
      setH(hsl.h); setS(hsl.s); setL(hsl.l);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[hex]);

  useEffect(()=>{
    const hexv = rgbToHex(clamp(r),clamp(g),clamp(b));
    setHex(hexv);
    const hsl = rgbToHsl(r,g,b);
    setH(hsl.h); setS(hsl.s); setL(hsl.l);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[r,g,b]);

  useEffect(()=>{
    const rgb = hslToRgb(h,s,l);
    setR(rgb.r); setG(rgb.g); setB(rgb.b);
    setHex(rgbToHex(rgb.r,rgb.g,rgb.b));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[h,s,l]);

  const copy = async (v:string) => { await navigator.clipboard.writeText(v); toast({ title: 'Copied' }); };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">HEX ↔ RGB ↔ HSL Converter</h3>
        <p className="text-sm text-muted-foreground">Convert color values instantly and copy results.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div>
            <Label>HEX</Label>
            <Input value={hex} onChange={(e)=>setHex(e.target.value)} />
            <div className="mt-2 h-12 rounded" style={{ background: hex }} />
            <div className="text-xs text-muted-foreground mt-1">Preview</div>
          </div>

          <div>
            <Label>RGB</Label>
            <div className="grid grid-cols-3 gap-2">
              <Input type="number" value={r} onChange={(e)=>setR(parseInt(e.target.value||'0',10))} />
              <Input type="number" value={g} onChange={(e)=>setG(parseInt(e.target.value||'0',10))} />
              <Input type="number" value={b} onChange={(e)=>setB(parseInt(e.target.value||'0',10))} />
            </div>
            <div className="text-xs text-muted-foreground mt-1">rgb({r}, {g}, {b})</div>
          </div>

          <div>
            <Label>HSL</Label>
            <div className="grid grid-cols-3 gap-2">
              <Input type="number" value={h} onChange={(e)=>setH(parseInt(e.target.value||'0',10))} />
              <Input type="number" value={s} onChange={(e)=>setS(parseInt(e.target.value||'0',10))} />
              <Input type="number" value={l} onChange={(e)=>setL(parseInt(e.target.value||'0',10))} />
            </div>
            <div className="text-xs text-muted-foreground mt-1">hsl({h}°, {s}%, {l}%)</div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="glass" onClick={()=>copy(hex)}><Copy className="w-4 h-4 mr-2" /> Copy HEX</Button>
          <Button variant="glass" onClick={()=>copy(`rgb(${r}, ${g}, ${b})`)}>Copy RGB</Button>
          <Button variant="glass" onClick={()=>copy(`hsl(${h}, ${s}%, ${l}%)`)}>Copy HSL</Button>
        </div>
      </div>
    </div>
  );
};
