import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Smile } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EMOJIS = ['😀','😃','😄','😁','😆','😅','😂','🤣','😊','😍','😘','😎','🤔','🤯','🙌','👍','👎','🎉','🔥','🚀'];

export const EmojiPicker = () => {
  const { toast } = useToast();
  const [value, setValue] = useState('');

  const add = (e: string) => setValue(v => v + e);
  const copy = async () => { await navigator.clipboard.writeText(value); toast({ title: 'Copied' }); };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text"><Smile className="w-5 h-5 mr-2 inline-block" /> Emoji Picker</h3>
        <p className="text-sm text-muted-foreground">Pick and copy emojis quickly.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <Label>Output</Label>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <div className="flex flex-wrap gap-2 mt-2">
          {EMOJIS.map(e => (
            <button key={e} onClick={() => add(e)} className="p-2 bg-background/50 rounded">{e}</button>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="hero" onClick={copy} disabled={!value}>Copy</Button>
        </div>
      </div>
    </div>
  );
};
