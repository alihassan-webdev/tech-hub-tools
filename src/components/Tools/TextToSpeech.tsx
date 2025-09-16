import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Play, StopCircle, Volume2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const TextToSpeech = () => {
  const { toast } = useToast();
  const [text, setText] = useState('');
  const [speaking, setSpeaking] = useState(false);

  const speak = () => {
    if (!('speechSynthesis' in window)) {
      toast({ title: 'Not supported', description: 'Text-to-speech is not supported in this browser.' });
      return;
    }
    if (!text.trim()) return;
    const ut = new SpeechSynthesisUtterance(text);
    setSpeaking(true);
    ut.onend = () => setSpeaking(false);
    speechSynthesis.cancel();
    speechSynthesis.speak(ut);
  };

  const stop = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
    setSpeaking(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">Text to Speech</h3>
        <p className="text-sm text-muted-foreground">Use your browser's speech synthesis to read text aloud.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <Label>Text</Label>
        <Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[160px]" />
        <div className="flex gap-2">
          <Button variant="hero" onClick={speak}><Play className="w-4 h-4 mr-2" /> Speak</Button>
          <Button variant="glass" onClick={stop} disabled={!speaking}><Stop className="w-4 h-4 mr-2" /> Stop</Button>
        </div>
      </div>
    </div>
  );
};
