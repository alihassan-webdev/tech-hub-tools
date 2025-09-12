import React, { useState } from 'react';
import { Copy, RefreshCw, Shield, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

export const PasswordGenerator = () => {
  const { toast } = useToast();
  const [password, setPassword] = useState('');
  const [length, setLength] = useState([16]);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeSimilar, setExcludeSimilar] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const generatePassword = () => {
    let charset = '';
    let similarChars = 'il1Lo0O';
    
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    if (excludeSimilar) {
      charset = charset.split('').filter(char => !similarChars.includes(char)).join('');
    }
    
    if (charset === '') {
      toast({
        title: "Error",
        description: "Please select at least one character type.",
        variant: "destructive",
      });
      return;
    }
    
    let result = '';
    for (let i = 0; i < length[0]; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    setPassword(result);
  };

  const copyPassword = () => {
    if (!password) return;
    
    navigator.clipboard.writeText(password);
    toast({
      title: "Password Copied!",
      description: "Your password has been copied to the clipboard.",
    });
  };

  const getStrengthColor = () => {
    if (length[0] < 8) return 'text-destructive';
    if (length[0] < 12) return 'text-orange-500';
    if (length[0] < 16) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getStrengthText = () => {
    if (length[0] < 8) return 'Weak';
    if (length[0] < 12) return 'Fair';
    if (length[0] < 16) return 'Good';
    return 'Strong';
  };

  React.useEffect(() => {
    generatePassword();
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, excludeSimilar]);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Password Display */}
      <div className="glass p-8 rounded-3xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold gradient-text flex items-center">
            <Shield className="w-6 h-6 mr-2" />
            Generated Password
          </h3>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium ${getStrengthColor()}`}>
              {getStrengthText()}
            </span>
            <Button
              variant="glass"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="bg-background/50 p-4 rounded-xl font-mono text-lg break-all min-h-[60px] flex items-center">
            {password ? (showPassword ? password : '•'.repeat(password.length)) : 'Click generate to create password'}
          </div>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-2">
            <Button
              variant="glass"
              size="sm"
              onClick={generatePassword}
              className="h-10"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Button
              variant="hero"
              size="sm"
              onClick={copyPassword}
              disabled={!password}
              className="h-10"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
          </div>
        </div>
      </div>

      {/* Configuration */}
      <div className="glass p-8 rounded-3xl space-y-6">
        <h3 className="text-xl font-semibold">Password Settings</h3>

        {/* Length Slider */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Password Length</Label>
            <span className="text-sm text-accent font-mono">{length[0]} characters</span>
          </div>
          <Slider
            value={length}
            onValueChange={setLength}
            max={64}
            min={4}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>4</span>
            <span>64</span>
          </div>
        </div>

        {/* Character Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-4 glass rounded-xl">
            <div>
              <Label className="text-sm font-medium">Uppercase Letters</Label>
              <p className="text-xs text-muted-foreground">A-Z</p>
            </div>
            <Switch
              checked={includeUppercase}
              onCheckedChange={setIncludeUppercase}
            />
          </div>

          <div className="flex items-center justify-between p-4 glass rounded-xl">
            <div>
              <Label className="text-sm font-medium">Lowercase Letters</Label>
              <p className="text-xs text-muted-foreground">a-z</p>
            </div>
            <Switch
              checked={includeLowercase}
              onCheckedChange={setIncludeLowercase}
            />
          </div>

          <div className="flex items-center justify-between p-4 glass rounded-xl">
            <div>
              <Label className="text-sm font-medium">Numbers</Label>
              <p className="text-xs text-muted-foreground">0-9</p>
            </div>
            <Switch
              checked={includeNumbers}
              onCheckedChange={setIncludeNumbers}
            />
          </div>

          <div className="flex items-center justify-between p-4 glass rounded-xl">
            <div>
              <Label className="text-sm font-medium">Symbols</Label>
              <p className="text-xs text-muted-foreground">!@#$%^&*</p>
            </div>
            <Switch
              checked={includeSymbols}
              onCheckedChange={setIncludeSymbols}
            />
          </div>
        </div>

        {/* Additional Options */}
        <div className="flex items-center justify-between p-4 glass rounded-xl">
          <div>
            <Label className="text-sm font-medium">Exclude Similar Characters</Label>
            <p className="text-xs text-muted-foreground">Excludes: i, l, 1, L, o, 0, O</p>
          </div>
          <Switch
            checked={excludeSimilar}
            onCheckedChange={setExcludeSimilar}
          />
        </div>
      </div>

      {/* Security Tips */}
      <div className="glass p-6 rounded-2xl">
        <h4 className="font-semibold mb-3 text-foreground">💡 Security Tips</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Use passwords with at least 12 characters</li>
          <li>• Include a mix of uppercase, lowercase, numbers, and symbols</li>
          <li>• Don't reuse passwords across multiple accounts</li>
          <li>• Use a password manager to store your passwords securely</li>
          <li>• Enable two-factor authentication when available</li>
        </ul>
      </div>
    </div>
  );
};