'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Star, ArrowRight } from 'lucide-react';
import type { Tool } from '@/data/tools';

const ElectricBorder = dynamic(() => import('@/components/ui/ElectricBorder'), {
  ssr: false,
});

interface FeaturedToolCardProps {
  tool: Tool;
}

export function FeaturedToolCard({ tool }: FeaturedToolCardProps) {
  return (
    <ElectricBorder
      color="#E35A3D"
      speed={1}
      chaos={0.4}
      thickness={2}
      style={{ borderRadius: 12 }}
    >
      <div className="bg-background rounded-xl p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold">{tool.name}</h3>
            <p className="mt-2 text-muted-foreground">{tool.tagline}</p>
            <p className="mt-4 text-sm">
              <strong>Why we recommend it:</strong> Best cross-AI compatibility, visual organization system,
              and developer-friendly MCP integration. Free plan is genuinely useful (200 items),
              and the learning curve is minimal.
            </p>
            <p className="mt-4 text-sm">
              <strong>Best for:</strong> Knowledge workers, students, developers, anyone using multiple AI tools
            </p>
            <p className="mt-2 text-sm">
              <strong>Pricing:</strong> Free (200 items) &bull; Pro $99/year (unlimited)
            </p>
            <div className="mt-6">
              <p className="text-sm font-medium mb-3">Key Features:</p>
              <div className="flex flex-wrap gap-2">
                {tool.features.slice(0, 6).map((feature, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    <Check className="h-3 w-3 mr-1 text-green-600" />
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <Button asChild>
                <Link href={`/tools/${tool.slug}`}>
                  Read Full Review
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href={tool.website} target="_blank" rel="noopener noreferrer">
                  Try {tool.name}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:w-64 space-y-4">
            <div>
              <span className="text-sm text-muted-foreground">Best for</span>
              <p className="font-medium">{tool.bestFor.join(', ')}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Pricing</span>
              <p className="font-medium">{tool.pricing.free} | {tool.pricing.paid}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Rating</span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-medium">{tool.rating}/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ElectricBorder>
  );
}
