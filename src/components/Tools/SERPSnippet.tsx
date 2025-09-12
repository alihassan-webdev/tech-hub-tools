import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export const SERPSnippet = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('https://example.com');

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="glass p-6 rounded-3xl">
        <h3 className="text-2xl font-bold gradient-text">SERP Snippet Preview</h3>
        <p className="text-sm text-muted-foreground">Preview how your page appears in Google search results.</p>
      </div>

      <div className="glass p-6 rounded-3xl space-y-4">
        <Label>Title</Label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Page title" />
        <Label>Description</Label>
        <Textarea value={description} onChange={(e) => setDescription(e.target.value)} className="min-h-[120px]" />
        <Label>URL</Label>
        <Input value={url} onChange={(e) => setUrl(e.target.value)} />

        <div className="mt-6">
          <div className="bg-white p-4 rounded-lg shadow-sm text-left">
            <a className="text-blue-600 text-lg font-medium block truncate">{title || 'Example Title - ToolsHub'}</a>
            <div className="text-sm text-green-600 truncate">{url}</div>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{description || 'This is an example description that will show up under your search result title.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
