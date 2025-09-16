import React from 'react';
import { Clock, Zap, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ComingSoonProps {
  tool: {
    name: string;
    description: string;
    category: string;
    icon: any;
  };
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ tool }) => {
  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <div className="glass p-12 rounded-3xl">
        {/* Icon */}
        <div className="w-20 h-20 bg-muted rounded-3xl flex items-center justify-center mx-auto mb-6">
          <tool.icon className="w-10 h-10 text-muted-foreground" />
        </div>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
          <Clock className="w-4 h-4 mr-2" />
          Coming Soon
        </div>

        {/* Title and Description */}
        <h2 className="text-3xl font-bold mb-4 text-foreground">
          {tool.name}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          {tool.description}
        </p>

        {/* Features Preview */}
        <div className="bg-background/50 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-foreground">What to Expect:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center text-muted-foreground">
              <Zap className="w-4 h-4 mr-2 text-accent" />
              Lightning-fast processing
            </div>
            <div className="flex items-center text-muted-foreground">
              <Zap className="w-4 h-4 mr-2 text-accent" />
              Professional-grade results
            </div>
            <div className="flex items-center text-muted-foreground">
              <Zap className="w-4 h-4 mr-2 text-accent" />
              Intuitive user interface
            </div>
            <div className="flex items-center text-muted-foreground">
              <Zap className="w-4 h-4 mr-2 text-accent" />
              Secure data handling
            </div>
          </div>
        </div>

        {/* Notification Signup */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Get Notified When It's Ready</h3>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="glass border-white/20 focus:border-primary/50"
            />
            <Button variant="hero" className="flex-shrink-0">
              <Bell className="w-4 h-4 mr-2" />
              Notify Me
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            We'll send you an email when this tool is available. No spam, promise!
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-muted-foreground">
            <strong>Estimated Release:</strong> Q1 2025
          </p>
        </div>
      </div>
    </div>
  );
};