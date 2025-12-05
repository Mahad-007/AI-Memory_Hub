'use client';

import { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ToolCard } from './ToolCard';
import type { Tool } from '@/data/tools';

interface ToolsFilterProps {
  tools: Tool[];
}

type FilterKey = 'crossAI' | 'free' | 'mcp' | 'mobile' | 'localStorage' | 'team';
type SortKey = 'bestOverall' | 'priceLowToHigh' | 'mostFeatures' | 'easiestToUse' | 'bestForStudents' | 'bestForDevelopers';

const filterOptions: { key: FilterKey; label: string }[] = [
  { key: 'crossAI', label: 'Cross-AI Support (ChatGPT, Claude, Gemini)' },
  { key: 'free', label: 'Free Plan Available' },
  { key: 'mcp', label: 'MCP Integration' },
  { key: 'mobile', label: 'Mobile Apps' },
  { key: 'localStorage', label: 'Local Storage Option' },
  { key: 'team', label: 'Team Features' },
];

const sortOptions: { key: SortKey; label: string }[] = [
  { key: 'bestOverall', label: 'Best Overall' },
  { key: 'priceLowToHigh', label: 'Price (Low to High)' },
  { key: 'mostFeatures', label: 'Most Features' },
  { key: 'easiestToUse', label: 'Easiest to Use' },
  { key: 'bestForStudents', label: 'Best for Students' },
  { key: 'bestForDevelopers', label: 'Best for Developers' },
];

function getPriceValue(tool: Tool): number {
  if (tool.pricing.free && tool.pricing.free.toLowerCase().includes('free')) {
    const match = tool.pricing.paid?.match(/\$(\d+)/);
    return match ? parseInt(match[1]) / 2 : 0;
  }
  const match = tool.pricing.paid?.match(/\$(\d+)/);
  return match ? parseInt(match[1]) : 999;
}

export function ToolsFilter({ tools }: ToolsFilterProps) {
  const [activeFilters, setActiveFilters] = useState<Set<FilterKey>>(new Set());
  const [activeSort, setActiveSort] = useState<SortKey>('bestOverall');

  const toggleFilter = (filter: FilterKey) => {
    setActiveFilters(prev => {
      const next = new Set(prev);
      if (next.has(filter)) {
        next.delete(filter);
      } else {
        next.add(filter);
      }
      return next;
    });
  };

  const filteredAndSortedTools = useMemo(() => {
    let result = [...tools];

    // Apply filters
    if (activeFilters.has('crossAI')) {
      result = result.filter(t => t.crossAI === 'full');
    }
    if (activeFilters.has('free')) {
      result = result.filter(t => t.pricing.free);
    }
    if (activeFilters.has('mcp')) {
      result = result.filter(t => t.mcp);
    }
    if (activeFilters.has('mobile')) {
      result = result.filter(t => t.mobile);
    }
    if (activeFilters.has('localStorage')) {
      result = result.filter(t => t.localStorage);
    }
    if (activeFilters.has('team')) {
      result = result.filter(t => t.team);
    }

    // Apply sorting
    switch (activeSort) {
      case 'bestOverall':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'priceLowToHigh':
        result.sort((a, b) => getPriceValue(a) - getPriceValue(b));
        break;
      case 'mostFeatures':
        result.sort((a, b) => b.features.length - a.features.length);
        break;
      case 'easiestToUse':
        // Prioritize tools with simpler setup (not requiring plugins, local storage)
        result.sort((a, b) => {
          const scoreA = (a.crossAI === 'full' ? 2 : 0) + (a.pricing.free ? 1 : 0);
          const scoreB = (b.crossAI === 'full' ? 2 : 0) + (b.pricing.free ? 1 : 0);
          return scoreB - scoreA;
        });
        break;
      case 'bestForStudents':
        result.sort((a, b) => {
          const isStudentA = a.bestFor.some(bf => bf.toLowerCase().includes('student'));
          const isStudentB = b.bestFor.some(bf => bf.toLowerCase().includes('student'));
          return (isStudentB ? 1 : 0) - (isStudentA ? 1 : 0);
        });
        break;
      case 'bestForDevelopers':
        result.sort((a, b) => {
          const isDevA = a.bestFor.some(bf => bf.toLowerCase().includes('developer')) || a.mcp;
          const isDevB = b.bestFor.some(bf => bf.toLowerCase().includes('developer')) || b.mcp;
          return (isDevB ? 1 : 0) - (isDevA ? 1 : 0);
        });
        break;
    }

    return result;
  }, [tools, activeFilters, activeSort]);

  return (
    <div>
      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Filter by */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Filter by:</h3>
              <div className="flex flex-wrap gap-2">
                {filterOptions.map(option => (
                  <Badge
                    key={option.key}
                    variant={activeFilters.has(option.key) ? 'default' : 'outline'}
                    className="cursor-pointer hover:bg-primary/10 transition-colors"
                    onClick={() => toggleFilter(option.key)}
                  >
                    {option.label}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Sort by */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Sort by:</h3>
              <div className="flex flex-wrap gap-2">
                {sortOptions.map(option => (
                  <Button
                    key={option.key}
                    variant={activeSort === option.key ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveSort(option.key)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">Complete AI Memory Tools (Alphabetically)</h2>
          <p className="text-muted-foreground mb-8">
            {filteredAndSortedTools.length} tools {activeFilters.size > 0 ? 'matching your filters' : 'available'}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAndSortedTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
          {filteredAndSortedTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No tools match your current filters.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setActiveFilters(new Set())}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
