import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Check,
  X,
  AlertCircle,
  Star,
  ExternalLink,
  Atom,
  Brain,
  BookOpen,
  Gem,
  LayoutGrid,
  Laptop,
  RotateCcw,
  FileSearch,
  Layers,
  Database,
  Hash,
  Network,
  GitBranch,
  GraduationCap,
  PenTool,
  type LucideIcon
} from 'lucide-react';
import type { Tool } from '@/data/tools';

const iconMap: Record<string, LucideIcon> = {
  Atom,
  Brain,
  BookOpen,
  Gem,
  LayoutGrid,
  Laptop,
  RotateCcw,
  FileSearch,
  Layers,
  Database,
  Hash,
  Network,
  GitBranch,
  GraduationCap,
  PenTool,
};

interface ToolCardProps {
  tool: Tool;
}

function CrossAIBadge({ status }: { status: 'full' | 'limited' | 'none' }) {
  if (status === 'full') {
    return (
      <Badge variant="outline" className="border-green-500/50 text-green-600">
        <Check className="h-3 w-3 mr-1" />
        Cross-AI
      </Badge>
    );
  }
  if (status === 'limited') {
    return (
      <Badge variant="outline" className="border-yellow-500/50 text-yellow-600">
        <AlertCircle className="h-3 w-3 mr-1" />
        Limited
      </Badge>
    );
  }
  return (
    <Badge variant="outline" className="border-muted-foreground/50 text-muted-foreground">
      <X className="h-3 w-3 mr-1" />
      Standalone
    </Badge>
  );
}

export function ToolCard({ tool }: ToolCardProps) {
  const IconComponent = iconMap[tool.icon];

  return (
    <Link href={`/tools/${tool.slug}`}>
      <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-3">
              {IconComponent && (
                <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
                  <IconComponent className="h-5 w-5 text-primary" />
                </div>
              )}
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  {tool.name}
                  {tool.isFeatured && (
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      <Star className="h-3 w-3 mr-1" />
                      Top Pick
                    </Badge>
                  )}
                </CardTitle>
                <CardDescription className="mt-1">{tool.tagline}</CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <CrossAIBadge status={tool.crossAI} />
              {tool.mcp && (
                <Badge variant="outline" className="border-primary/50 text-primary">
                  MCP
                </Badge>
              )}
              {tool.localStorage && (
                <Badge variant="outline">Local Storage</Badge>
              )}
              {tool.mobile && (
                <Badge variant="outline">Mobile</Badge>
              )}
            </div>

            <div className="text-sm">
              <span className="font-medium">Best for: </span>
              <span className="text-muted-foreground">{tool.bestFor.join(', ')}</span>
            </div>

            <div className="text-sm">
              <span className="font-medium">Pricing: </span>
              <span className="text-muted-foreground">
                {tool.pricing.free || tool.pricing.paid}
              </span>
            </div>

            <div className="text-sm">
              <span className="font-medium">Key feature: </span>
              <span className="text-muted-foreground">{tool.standoutFeature}</span>
            </div>

            {tool.rating && (
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm font-medium">{tool.rating}/5</span>
              </div>
            )}

            <div className="flex items-center gap-3 pt-2 border-t border-border text-sm">
              <span className="text-primary hover:underline">Full Review</span>
              {tool.website && (
                <>
                  <span className="text-muted-foreground">•</span>
                  <span
                    className="text-muted-foreground hover:text-primary inline-flex items-center gap-1"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(tool.website, '_blank');
                    }}
                  >
                    Official Site
                    <ExternalLink className="h-3 w-3" />
                  </span>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
