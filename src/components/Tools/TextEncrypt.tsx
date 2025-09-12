import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const toBase64 = (buf: ArrayBuffer) => btoa(String.fromCharCode(...new Uint8Array(buf)));
const fromBase64 = (b64: string) => Uint8Array.from(atob(b64), c=>c.charCodeAt(0));

export const TextEncrypt = () => {
  const { toast } = useToast();
  const [key, setKey] = useState('');
  const [plaintext, setPlaintext] = useState('');
  const [cipher, setCipher] = useState('');

  const derive = async (pw: string) => {
    const enc = new TextEncoder();
    const salt = enc.encode('tools-salt');
    const keyMat = await crypto.subtle.importKey('raw', enc.encode(pw), { name: 'PBKDF2' }, false, ['deriveKey']);
    return crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' }, keyMat, { name: 'AES-GCM', length: 256 }, false, ['encrypt','decrypt']);
  };

  const encrypt = async () => {
    try {
      const k = await derive(key || 'default');
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const enc = new TextEncoder();
      const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, k, enc.encode(plaintext));
      setCipher(ivToB64(iv) + ':' + toBase64(ct));
      toast({ title: 'Encrypted' });
    } catch (e) { toast({ title: 'Error', description: 'Encryption failed' }); }
  };

  const decrypt = async () => {
    try {
      const [ivb64, ctb64] = cipher.split(':');
      const iv = fromBase64(ivb64);
      const ct = fromBase64(ctb64);
      const k = await derive(key || 'default');
      const ptBuf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, k, ct);
      const dec = new TextDecoder().decode(ptBuf);
      setPlaintext(dec);
      toast({ title: 'Decrypted' });
    } catch (e) { toast({ title: 'Error', description: 'Decryption failed' }); }
  };

  const ivToB64 = (iv: Uint8Array) => toBase64(iv.buffer);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">Text Encrypt / Decrypt (AES-GCM)</h3>
        <p className="text-sm text-muted-foreground">Client-side encryption using Web Crypto API. Use a password to derive key.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <Label>Password</Label>
        <Input value={key} onChange={(e) => setKey(e.target.value)} />

        <Label>Plaintext</Label>
        <Textarea value={plaintext} onChange={(e) => setPlaintext(e.target.value)} className="min-h-[160px]" />

        <div className="flex gap-2">
          <Button variant="hero" onClick={encrypt}>Encrypt</Button>
          <Button variant="glass" onClick={decrypt}>Decrypt</Button>
        </div>

        <Label>Cipher</Label>
        <Input value={cipher} onChange={(e) => setCipher(e.target.value)} />
      </div>
    </div>
  );
};
