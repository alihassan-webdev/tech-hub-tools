import React, { useState, useEffect } from 'react';
import { Copy, Download, CheckCircle, AlertCircle, Code, Minimize, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export const JSONFormatter = () => {
  const { toast } = useToast();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState('');
  const [isFormatted, setIsFormatted] = useState(false);

  const validateAndFormat = (jsonString: string) => {
    if (!jsonString.trim()) {
      setOutput('');
      setIsValid(true);
      setError('');
      setIsFormatted(false);
      return;
    }

    try {
      const parsed = JSON.parse(jsonString);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setIsValid(true);
      setError('');
      setIsFormatted(true);
    } catch (err) {
      setIsValid(false);
      setError(err instanceof Error ? err.message : 'Invalid JSON format');
      setOutput('');
      setIsFormatted(false);
    }
  };

  const minifyJSON = () => {
    if (!input.trim()) return;

    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      setIsValid(true);
      setError('');
      setIsFormatted(false);
    } catch (err) {
      toast({
        title: "Error",
        description: "Please enter valid JSON first",
        variant: "destructive",
      });
    }
  };

  const copyToClipboard = () => {
    if (!output) return;
    
    navigator.clipboard.writeText(output);
    toast({
      title: "Copied!",
      description: "Formatted JSON has been copied to clipboard.",
    });
  };

  const downloadJSON = () => {
    if (!output) return;
    
    const blob = new Blob([output], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: "JSON file has been saved to your device.",
    });
  };

  const loadSampleJSON = () => {
    const sample = {
      "name": "John Doe",
      "age": 30,
      "email": "john@example.com",
      "address": {
        "street": "123 Main St",
        "city": "New York",
        "zipCode": "10001"
      },
      "hobbies": ["reading", "swimming", "coding"],
      "isActive": true,
      "lastLogin": "2024-01-15T10:30:00Z"
    };
    
    setInput(JSON.stringify(sample));
  };

  const clearAll = () => {
    setInput('');
    setOutput('');
    setError('');
    setIsValid(true);
    setIsFormatted(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => validateAndFormat(input), 300);
    return () => clearTimeout(timer);
  }, [input]);

  const getStats = () => {
    if (!output) return null;
    
    try {
      const parsed = JSON.parse(output);
      const stats = {
        characters: output.length,
        lines: output.split('\n').length,
        size: new Blob([output]).size
      };
      return stats;
    } catch {
      return null;
    }
  };

  const stats = getStats();

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header with Actions */}
      <div className="glass p-6 rounded-2xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-2xl font-bold gradient-text flex items-center">
              <Code className="w-6 h-6 mr-2" />
              JSON Formatter & Validator
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              Format, validate, and minify JSON data with syntax highlighting
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="glass" size="sm" onClick={loadSampleJSON}>
              Load Sample
            </Button>
            <Button variant="glass" size="sm" onClick={clearAll}>
              Clear All
            </Button>
          </div>
        </div>
      </div>

      {/* Input/Output Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="glass p-6 rounded-3xl">
          <div className="flex items-center justify-between mb-4">
            <Label className="text-lg font-semibold">Input JSON</Label>
            <div className="flex items-center gap-2">
              {isValid ? (
                <div className="flex items-center text-green-500 text-sm">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Valid
                </div>
              ) : (
                <div className="flex items-center text-destructive text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  Invalid
                </div>
              )}
            </div>
          </div>
          
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your JSON here..."
            className="glass border-white/20 focus:border-primary/50 min-h-[400px] font-mono text-sm resize-none"
          />
          
          {error && (
            <div className="mt-3 p-3 bg-destructive/20 border border-destructive/30 rounded-lg text-sm">
              <div className="flex items-center text-destructive">
                <AlertCircle className="w-4 h-4 mr-2" />
                <span className="font-medium">Validation Error:</span>
              </div>
              <p className="text-destructive/80 mt-1 font-mono text-xs">{error}</p>
            </div>
          )}
        </div>

        {/* Output Section */}
        <div className="glass p-6 rounded-3xl">
          <div className="flex items-center justify-between mb-4">
            <Label className="text-lg font-semibold">Formatted JSON</Label>
            <div className="flex gap-2">
              <Button
                variant="glass"
                size="sm"
                onClick={minifyJSON}
                disabled={!isValid || !input.trim()}
              >
                <Minimize className="w-4 h-4 mr-1" />
                Minify
              </Button>
              <Button
                variant="glass"
                size="sm"
                onClick={() => validateAndFormat(input)}
                disabled={!isValid || !input.trim()}
              >
                <Maximize className="w-4 h-4 mr-1" />
                Format
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Textarea
              value={output}
              readOnly
              placeholder="Formatted JSON will appear here..."
              className="glass border-white/20 min-h-[400px] font-mono text-sm resize-none"
            />
            
            {output && (
              <div className="absolute top-2 right-2 flex gap-2">
                <Button variant="glass" size="sm" onClick={copyToClipboard}>
                  <Copy className="w-4 h-4" />
                </Button>
                <Button variant="glass" size="sm" onClick={downloadJSON}>
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats and Info */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass p-4 rounded-2xl text-center">
            <div className="text-2xl font-bold text-accent">{stats.characters.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Characters</div>
          </div>
          
          <div className="glass p-4 rounded-2xl text-center">
            <div className="text-2xl font-bold text-accent">{stats.lines.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Lines</div>
          </div>
          
          <div className="glass p-4 rounded-2xl text-center">
            <div className="text-2xl font-bold text-accent">{(stats.size / 1024).toFixed(1)} KB</div>
            <div className="text-sm text-muted-foreground">File Size</div>
          </div>
        </div>
      )}

      {/* Features Info */}
      <div className="glass p-6 rounded-2xl">
        <h4 className="font-semibold mb-3 text-foreground">✨ Features</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <ul className="space-y-1">
            <li>• Real-time JSON validation</li>
            <li>• Pretty formatting with proper indentation</li>
            <li>• JSON minification for production</li>
            <li>• Error detection and highlighting</li>
          </ul>
          <ul className="space-y-1">
            <li>• Copy formatted output to clipboard</li>
            <li>• Download as JSON file</li>
            <li>• File size and statistics display</li>
            <li>• Sample JSON for testing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};