import React, { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Hash } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const HashtagGenerator = () => {
  const { toast } = useToast();
  const [keywords, setKeywords] = useState('');
  const tags = useMemo(() => {
    const words = keywords.split(/[,\s]+/).filter(Boolean);
    const cleaned = words.map(w => w.replace(/[^\p{L}\p{N}_]+/gu, ''));
    const unique = Array.from(new Set(cleaned));
    return unique.map(u => '#' + u.toLowerCase());
  }, [keywords]);

  const copy = async () => {
    await navigator.clipboard.writeText(tags.join(' '));
    toast({ title: 'Copied', description: 'Hashtags copied' });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text"><Hash className="w-5 h-5 mr-2 inline-block" /> Hashtag Generator</h3>
        <p className="text-sm text-muted-foreground">Generate hashtags from keywords.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <Label>Keywords (comma or space separated)</Label>
        <Input value={keywords} onChange={(e) => setKeywords(e.target.value)} />
        <div className="flex gap-2">
          <Button variant="hero" onClick={copy} disabled={tags.length===0}>Copy</Button>
        </div>
        <div className="bg-background/50 p-3 rounded-lg font-mono text-sm">{tags.join(' ')}</div>
      </div>
    </div>
  );
};
