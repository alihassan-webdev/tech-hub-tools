import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toolsData, getToolsByCategory } from '@/data/toolsData';

export const Tools = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toolsByCategory = getToolsByCategory();
  const categories = ['All', ...Object.keys(toolsByCategory)];

  const filteredTools = toolsData
    .filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => (a.isWorking === b.isWorking ? 0 : a.isWorking ? -1 : 1));

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">All Tools</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover our complete collection of 94+ powerful tools designed to boost your productivity
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for any tool..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg glass border-white/20 focus:border-primary/50 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "hero" : "glass"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {selectedCategory === 'All' ? (
            // Group by category when showing all
            Object.entries(toolsByCategory).map(([category, categoryTools]) => {
              const visibleTools = categoryTools.filter(tool => 
                tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tool.description.toLowerCase().includes(searchQuery.toLowerCase())
              );

              if (visibleTools.length === 0) return null;

              return (
                <div key={category} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 gradient-text">{category}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...visibleTools]
                      .sort((a, b) => (a.isWorking === b.isWorking ? 0 : a.isWorking ? -1 : 1))
                      .map((tool) => (
                        <ToolCard key={tool.id} tool={tool} />
                      ))}
                  </div>
                </div>
              );
            })
          ) : (
            // Show filtered results
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          )}

          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No tools found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const ToolCard = ({ tool }: { tool: any }) => (
  <div className="tool-card p-6 group">
    <div className="flex items-center mb-4">
      <div className={`w-12 h-12 ${tool.isWorking ? 'bg-gradient-primary' : 'bg-muted'} rounded-xl flex items-center justify-center mr-4`}>
        <tool.icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-foreground">{tool.name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-accent">{tool.category}</span>
          {!tool.isWorking && (
            <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
    <p className="text-muted-foreground mb-4 text-sm">{tool.description}</p>
    <Button variant="tool" size="sm" asChild className="w-full">
      <Link to={`/tools/${tool.id}`}>
        Open Tool <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </Button>
  </div>
);
