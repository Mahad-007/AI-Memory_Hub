import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Check,
  X,
  AlertCircle,
  ArrowRight,
  Atom,
  Brain,
  BookOpen,
  Gem,
  LayoutGrid,
  type LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Atom,
  Brain,
  BookOpen,
  Gem,
  LayoutGrid,
};

const topTools = [
  {
    name: 'myNeutron',
    slug: 'myneutron',
    icon: 'Atom',
    bestFor: 'Knowledge workers, researchers',
    crossAI: 'full',
    crossAIText: 'ChatGPT, Claude, Gemini, Cursor',
    price: 'Free (200 items)',
    feature: 'Visual seed system + MCP',
    featured: true,
  },
  {
    name: 'Mem.ai',
    slug: 'mem-ai',
    icon: 'Brain',
    bestFor: 'Quick capture, mobile-first',
    crossAI: 'limited',
    crossAIText: 'Limited',
    price: '$8/month',
    feature: 'AI auto-organization',
    featured: false,
  },
  {
    name: 'Reflect',
    slug: 'reflect',
    icon: 'BookOpen',
    bestFor: 'Writers, networked thinking',
    crossAI: 'none',
    crossAIText: 'Standalone',
    price: '$10/month',
    feature: 'Backlinks + daily notes',
    featured: false,
  },
  {
    name: 'Obsidian + AI',
    slug: 'obsidian',
    icon: 'Gem',
    bestFor: 'Developers, customization',
    crossAI: 'limited',
    crossAIText: 'Via plugins',
    price: 'Free + plugins',
    feature: 'Local-first, extensible',
    featured: false,
  },
  {
    name: 'Notion AI',
    slug: 'notion-ai',
    icon: 'LayoutGrid',
    bestFor: 'Teams, databases',
    crossAI: 'none',
    crossAIText: 'Notion-only',
    price: '$10/user/month',
    feature: 'Workspace integration',
    featured: false,
  },
];

function CrossAIBadge({ status }: { status: 'full' | 'limited' | 'none' }) {
  if (status === 'full') {
    return (
      <div className="flex items-center gap-1 text-green-600">
        <Check className="h-4 w-4" />
        <span className="text-sm">Full</span>
      </div>
    );
  }
  if (status === 'limited') {
    return (
      <div className="flex items-center gap-1 text-yellow-600">
        <AlertCircle className="h-4 w-4" />
        <span className="text-sm">Limited</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1 text-muted-foreground">
      <X className="h-4 w-4" />
      <span className="text-sm">None</span>
    </div>
  );
}

export function ToolsPreview() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Top AI Memory Tools (2025)
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;ve reviewed 15+ AI memory solutions so you can find the right fit for your workflow.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Tool</TableHead>
                <TableHead>Best For</TableHead>
                <TableHead>Cross-AI Support</TableHead>
                <TableHead>Starting Price</TableHead>
                <TableHead>Key Feature</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topTools.map((tool) => {
                const IconComponent = iconMap[tool.icon];
                return (
                <TableRow key={tool.slug} className={tool.featured ? 'bg-primary/5' : ''}>
                  <TableCell className="font-medium">
                    <Link href={`/tools/${tool.slug}`} className="hover:text-primary transition-colors flex items-center gap-2">
                      {IconComponent && (
                        <div className="flex-shrink-0 p-1.5 rounded-md bg-primary/10">
                          <IconComponent className="h-4 w-4 text-primary" />
                        </div>
                      )}
                      <span>{tool.name}</span>
                      {tool.featured && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          Top Pick
                        </Badge>
                      )}
                    </Link>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{tool.bestFor}</TableCell>
                  <TableCell>
                    <CrossAIBadge status={tool.crossAI as 'full' | 'limited' | 'none'} />
                  </TableCell>
                  <TableCell className="text-sm">{tool.price}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{tool.feature}</TableCell>
                </TableRow>
              );
              })}
            </TableBody>
          </Table>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/tools">
              Explore All Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/tools#comparison">
              Compare Features Side-by-Side
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
