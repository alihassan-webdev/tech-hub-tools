import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Mic, MicOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const SpeechToText = () => {
  const { toast } = useToast();
  const [supported, setSupported] = useState<boolean>(false);
  const [listening, setListening] = useState<boolean>(false);
  const [text, setText] = useState('');
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }
    setSupported(true);
    const r = new SpeechRecognition();
    r.continuous = true;
    r.interimResults = true;
    r.onresult = (e: any) => {
      let final = '';
      for (let i = e.resultIndex; i < e.results.length; ++i) {
        final += e.results[i][0].transcript;
      }
      setText(prev => prev + ' ' + final);
    };
    r.onerror = () => setListening(false);
    setRecognition(r);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const start = () => {
    if (!recognition) { toast({ title: 'Not supported' }); return; }
    recognition.start();
    setListening(true);
  };
  const stop = () => {
    if (recognition) recognition.stop();
    setListening(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">Speech to Text</h3>
        <p className="text-sm text-muted-foreground">Transcribe speech using the browser's SpeechRecognition (if supported).</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        {!supported && <div className="text-sm text-destructive">SpeechRecognition not supported in this browser.</div>}
        <Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[160px]" />
        <div className="flex gap-2">
          <Button variant={listening? 'destructive':'hero'} onClick={start} disabled={!supported || listening}><Mic className="w-4 h-4 mr-2" /> Start</Button>
          <Button variant="glass" onClick={stop} disabled={!listening}><MicOff className="w-4 h-4 mr-2" /> Stop</Button>
        </div>
      </div>
    </div>
  );
};
