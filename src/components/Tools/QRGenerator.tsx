import React, { useState, useEffect } from 'react';
import { QrCode, Download, Link, Mail, Phone, Wifi, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export const QRGenerator = () => {
  const { toast } = useToast();
  const [qrType, setQrType] = useState('url');
  const [qrData, setQrData] = useState('');
  const [qrCode, setQrCode] = useState('');

  // QR Code types with their icons and descriptions
  const qrTypes = [
    {
      value: 'url',
      label: 'Website URL',
      icon: Link,
      placeholder: 'https://example.com',
      description: 'Link to any website or webpage'
    },
    {
      value: 'text',
      label: 'Plain Text',
      icon: QrCode,
      placeholder: 'Enter your text message',
      description: 'Any text message or information'
    },
    {
      value: 'email',
      label: 'Email',
      icon: Mail,
      placeholder: 'email@example.com',
      description: 'Email address for contact'
    },
    {
      value: 'phone',
      label: 'Phone Number',
      icon: Phone,
      placeholder: '+1234567890',
      description: 'Phone number for calling'
    },
    {
      value: 'wifi',
      label: 'WiFi Network',
      icon: Wifi,
      placeholder: 'WIFI:T:WPA;S:NetworkName;P:Password;;',
      description: 'WiFi network credentials'
    },
    {
      value: 'location',
      label: 'Location',
      icon: MapPin,
      placeholder: 'geo:37.7749,-122.4194',
      description: 'Geographic coordinates'
    }
  ];

  const currentType = qrTypes.find(type => type.value === qrType);

  // Generate a real, scannable QR code using the 'qrcode' library
  const generateQRCode = async () => {
    const text = formatDataForType(qrType, qrData.trim());
    if (!text) { setQrCode(''); return; }
    try {
      const { toDataURL } = await import('qrcode');
      const url = await toDataURL(text, {
        errorCorrectionLevel: 'M',
        margin: 2,
        scale: 8,
        color: { dark: '#000000', light: '#FFFFFF' },
      });
      setQrCode(url);
    } catch (e) {
      setQrCode('');
    }
  };

  useEffect(() => {
    const t = setTimeout(() => generateQRCode(), 200);
    return () => clearTimeout(t);
  }, [qrData, qrType]);

  const formatDataForType = (type: string, data: string) => {
    switch (type) {
      case 'email':
        return `mailto:${data}`;
      case 'phone':
        return `tel:${data}`;
      case 'wifi':
        return data.startsWith('WIFI:') ? data : `WIFI:T:WPA;S:${data};P:password;;`;
      case 'location':
        return data.startsWith('geo:') ? data : `geo:${data}`;
      default:
        return data;
    }
  };

  const downloadQRCode = () => {
    if (!qrCode) return;
    
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = qrCode;
    link.click();
    
    toast({
      title: "QR Code Downloaded!",
      description: "Your QR code has been saved to your device.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* QR Code Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-6 gradient-text flex items-center">
            <QrCode className="w-6 h-6 mr-2" />
            Generate QR Code
          </h3>

          {/* Type Selection */}
          <div className="space-y-4 mb-6">
            <Label className="text-sm font-medium">QR Code Type</Label>
            <Select value={qrType} onValueChange={setQrType}>
              <SelectTrigger className="glass border-white/20 focus:border-primary/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {qrTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    <div className="flex items-center">
                      <type.icon className="w-4 h-4 mr-2" />
                      {type.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {currentType && (
              <p className="text-xs text-muted-foreground">{currentType.description}</p>
            )}
          </div>

          {/* Data Input */}
          <div className="space-y-4">
            <Label className="text-sm font-medium">Content</Label>
            {qrType === 'text' ? (
              <Textarea
                value={qrData}
                onChange={(e) => setQrData(e.target.value)}
                placeholder={currentType?.placeholder}
                className="glass border-white/20 focus:border-primary/50 min-h-[100px]"
              />
            ) : (
              <Input
                value={qrData}
                onChange={(e) => setQrData(e.target.value)}
                placeholder={currentType?.placeholder}
                className="glass border-white/20 focus:border-primary/50"
              />
            )}
          </div>

          {/* Quick Examples */}
          <div className="mt-6 p-4 bg-background/50 rounded-xl">
            <h4 className="text-sm font-medium mb-2">Quick Examples:</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              {qrType === 'wifi' && (
                <p>Format: WIFI:T:WPA;S:NetworkName;P:Password;;</p>
              )}
              {qrType === 'location' && (
                <p>Format: geo:latitude,longitude (e.g., geo:37.7749,-122.4194)</p>
              )}
              {qrType === 'email' && (
                <p>Enter just the email address, we'll format it automatically</p>
              )}
              {qrType === 'phone' && (
                <p>Include country code for international numbers (+1234567890)</p>
              )}
            </div>
          </div>
        </div>

        {/* QR Code Display */}
        <div className="glass p-8 rounded-3xl text-center">
          <h3 className="text-xl font-semibold mb-6">Your QR Code</h3>
          
          {qrCode ? (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl inline-block">
                <img 
                  src={qrCode} 
                  alt="Generated QR Code" 
                  className="w-48 h-48 mx-auto"
                />
              </div>
              
              <div className="space-y-3">
                <Button
                  variant="hero"
                  onClick={downloadQRCode}
                  className="w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download QR Code
                </Button>
                
                <div className="text-xs text-muted-foreground">
                  PNG format • 200x200 pixels
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
              <QrCode className="w-16 h-16 mb-4 opacity-50" />
              <p>Enter content above to generate QR code</p>
            </div>
          )}
        </div>
      </div>

      {/* QR Code Information */}
      <div className="glass p-8 rounded-3xl">
        <h3 className="text-xl font-semibold mb-4 gradient-text">About QR Codes</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-medium mb-2 text-foreground">What are QR Codes?</h4>
            <p className="text-muted-foreground">
              QR (Quick Response) codes are 2D barcodes that can store various types of information 
              and be scanned quickly by smartphones and other devices.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-2 text-foreground">How to Use</h4>
            <p className="text-muted-foreground">
              Simply open your phone's camera app and point it at the QR code. 
              Most modern smartphones will automatically recognize and process the code.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-2 text-foreground">Best Practices</h4>
            <p className="text-muted-foreground">
              Ensure good contrast, adequate size (at least 2cm x 2cm), and test your QR codes 
              before sharing to ensure they work properly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
