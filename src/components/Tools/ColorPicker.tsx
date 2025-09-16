import React, { useState, useEffect } from 'react';
import { Copy, Palette, Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export const ColorPicker = () => {
  const { toast } = useToast();
  const [color, setColor] = useState('#3b82f6');
  const [rgb, setRgb] = useState({ r: 59, g: 130, b: 246 });
  const [hsl, setHsl] = useState({ h: 217, s: 91, l: 60 });

  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  // Convert RGB to HSL
  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  };

  // Convert RGB to Hex
  const rgbToHex = (r: number, g: number, b: number) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  // Update all color formats when color changes
  useEffect(() => {
    const rgbColor = hexToRgb(color);
    if (rgbColor) {
      setRgb(rgbColor);
      setHsl(rgbToHsl(rgbColor.r, rgbColor.g, rgbColor.b));
    }
  }, [color]);

  const copyToClipboard = (text: string, format: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${format} Copied!`,
      description: `${text} has been copied to your clipboard.`,
    });
  };

  const generateRandomColor = () => {
    const randomHex = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    setColor(randomHex);
  };

  const handleRgbChange = (component: 'r' | 'g' | 'b', value: number) => {
    const newRgb = { ...rgb, [component]: Math.max(0, Math.min(255, value)) };
    setRgb(newRgb);
    setColor(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Color Preview Section */}
      <div className="glass p-8 rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Color Display */}
          <div className="text-center space-y-6">
            <div
              className="w-48 h-48 mx-auto rounded-3xl shadow-2xl border-4 border-white/20 transition-all duration-300"
              style={{ backgroundColor: color }}
            ></div>
            <div className="flex gap-2 justify-center">
              <Button variant="glass" size="sm" onClick={generateRandomColor}>
                <Shuffle className="w-4 h-4 mr-2" />
                Random Color
              </Button>
            </div>
          </div>

          {/* Color Picker Input */}
          <div className="space-y-6">
            <div>
              <Label className="text-lg font-semibold mb-3 block">Color Picker</Label>
              <div className="relative">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full h-16 rounded-xl border-4 border-white/20 cursor-pointer"
                />
              </div>
            </div>

            <div>
              <Label className="text-lg font-semibold mb-3 block">Direct Input</Label>
              <Input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="glass border-white/20 focus:border-primary/50 text-lg font-mono"
                placeholder="#3b82f6"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Color Formats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* HEX Format */}
        <div className="glass p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">HEX</h3>
            <Button
              variant="glass"
              size="sm"
              onClick={() => copyToClipboard(color, 'HEX')}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          <div className="bg-background/50 p-3 rounded-lg font-mono text-lg text-center">
            {color.toUpperCase()}
          </div>
        </div>

        {/* RGB Format */}
        <div className="glass p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">RGB</h3>
            <Button
              variant="glass"
              size="sm"
              onClick={() => copyToClipboard(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, 'RGB')}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          <div className="bg-background/50 p-3 rounded-lg font-mono text-sm text-center">
            rgb({rgb.r}, {rgb.g}, {rgb.b})
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">R:</span>
              <Input
                type="number"
                min="0"
                max="255"
                value={rgb.r}
                onChange={(e) => handleRgbChange('r', parseInt(e.target.value) || 0)}
                className="w-20 h-8 text-xs"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">G:</span>
              <Input
                type="number"
                min="0"
                max="255"
                value={rgb.g}
                onChange={(e) => handleRgbChange('g', parseInt(e.target.value) || 0)}
                className="w-20 h-8 text-xs"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">B:</span>
              <Input
                type="number"
                min="0"
                max="255"
                value={rgb.b}
                onChange={(e) => handleRgbChange('b', parseInt(e.target.value) || 0)}
                className="w-20 h-8 text-xs"
              />
            </div>
          </div>
        </div>

        {/* HSL Format */}
        <div className="glass p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">HSL</h3>
            <Button
              variant="glass"
              size="sm"
              onClick={() => copyToClipboard(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`, 'HSL')}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          <div className="bg-background/50 p-3 rounded-lg font-mono text-sm text-center">
            hsl({hsl.h}, {hsl.s}%, {hsl.l}%)
          </div>
          <div className="mt-4 space-y-2 text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span>Hue:</span>
              <span>{hsl.h}°</span>
            </div>
            <div className="flex justify-between">
              <span>Saturation:</span>
              <span>{hsl.s}%</span>
            </div>
            <div className="flex justify-between">
              <span>Lightness:</span>
              <span>{hsl.l}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Color Harmony Section */}
      <div className="glass p-8 rounded-3xl">
        <h3 className="text-2xl font-bold mb-6 gradient-text flex items-center">
          <Palette className="w-6 h-6 mr-2" />
          Color Harmony
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Generate complementary, analogous, triadic colors */}
          {[0, 60, 120, 180].map((offset, index) => {
            const newHue = (hsl.h + offset) % 360;
            const harmonyColor = `hsl(${newHue}, ${hsl.s}%, ${hsl.l}%)`;
            const labels = ['Original', 'Analogous', 'Triadic', 'Complementary'];
            
            return (
              <div key={index} className="text-center space-y-2">
                <div
                  className="w-full h-24 rounded-xl border-2 border-white/20 cursor-pointer hover:scale-105 transition-transform"
                  style={{ backgroundColor: harmonyColor }}
                  onClick={() => copyToClipboard(harmonyColor, labels[index])}
                />
                <p className="text-sm text-muted-foreground">{labels[index]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};