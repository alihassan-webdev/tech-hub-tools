import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Users, RefreshCw, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FIRST = ['Aarav','Vihaan','Vivaan','Aditya','Arjun','Sai','Rohit','Riya','Sana','Ananya','Maya','Isha'];
const LAST = ['Sharma','Verma','Gupta','Patel','Singh','Khan','Mehta','Joshi','Kapoor','Reddy'];

export const RandomName = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');

  const gen = () => setName(`${FIRST[Math.floor(Math.random()*FIRST.length)]} ${LAST[Math.floor(Math.random()*LAST.length)]}`);
  const copy = () => { navigator.clipboard.writeText(name); toast({ title: 'Copied' }); };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text"><Users className="w-5 h-5 mr-2 inline-block" /> Random Name Generator</h3>
        <p className="text-sm text-muted-foreground">Generate random person names locally.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <div className="flex gap-2">
          <Input readOnly value={name} />
          <Button variant="glass" onClick={gen}><RefreshCw className="w-4 h-4" /></Button>
          <Button variant="hero" onClick={copy} disabled={!name}><Copy className="w-4 h-4 mr-2" /> Copy</Button>
        </div>
      </div>
    </div>
  );
};
