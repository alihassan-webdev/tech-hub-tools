import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export const SocialPreview = () => {
  const [platform, setPlatform] = useState<'facebook'|'twitter'|'instagram'>('facebook');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">Social Media Post Preview</h3>
        <p className="text-sm text-muted-foreground">Preview how a post would look on common platforms.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <div className="grid grid-cols-3 gap-2">
          <Button variant={platform==='facebook'?'hero':'glass'} onClick={() => setPlatform('facebook')}>Facebook</Button>
          <Button variant={platform==='twitter'?'hero':'glass'} onClick={() => setPlatform('twitter')}>Twitter</Button>
          <Button variant={platform==='instagram'?'hero':'glass'} onClick={() => setPlatform('instagram')}>Instagram</Button>
        </div>

        <Label>Text</Label>
        <Textarea value={text} onChange={(e)=>setText(e.target.value)} className="min-h-[120px]" />
        <Label>Image URL (optional)</Label>
        <Input value={image} onChange={(e)=>setImage(e.target.value)} placeholder="https://..." />

        <div className="mt-4 p-4 rounded-lg bg-white text-black">
          <div className="text-sm text-muted-foreground">{platform.toUpperCase()} Preview</div>
          <div className="mt-2 font-medium">{text}</div>
          {image && <img src={image} alt="preview" className="mt-3 max-w-full rounded" />}
        </div>
      </div>
    </div>
  );
};
