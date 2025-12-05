import type { Metadata } from 'next';
import Link from 'next/link';
import { tools, getFeaturedTools } from '@/data/tools';
import { toolsHubFAQs } from '@/data/faqs';
import { ToolsFilter } from '@/components/tools/ToolsFilter';
import { FAQSection } from '@/components/sections/FAQSection';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Check, X, AlertCircle, Star, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '15+ AI Memory Tools Compared: Find Your Perfect Solution (2025)',
  description: 'Compare the best AI memory tools for 2025. Detailed reviews of myNeutron, Mem.ai, Reflect, Obsidian AI, and more. Find the right personal knowledge management system for your workflow.',
  keywords: ['AI memory tools', 'best AI memory software', 'personal knowledge management', 'AI knowledge base tools', 'ChatGPT memory tools', 'cross-AI memory'],
};

function CrossAIIcon({ status }: { status: 'full' | 'limited' | 'none' }) {
  if (status === 'full') {
    return <Check className="h-4 w-4 text-green-600" />;
  }
  if (status === 'limited') {
    return <AlertCircle className="h-4 w-4 text-yellow-600" />;
  }
  return <X className="h-4 w-4 text-muted-foreground" />;
}

const decisionFramework = [
  {
    condition: 'If you use multiple AI tools (ChatGPT + Claude + Cursor)',
    recommendation: 'myNeutron is the only tool built specifically for cross-AI workflows',
    tool: 'myneutron',
  },
  {
    condition: 'If you want something free and customizable',
    recommendation: 'Obsidian + plugins, or Logseq',
    tool: 'obsidian',
  },
  {
    condition: "If you're on Mac and want system-wide integration",
    recommendation: 'Elephas or Rewind',
    tool: 'elephas',
  },
  {
    condition: 'If you need mobile-first quick capture',
    recommendation: 'Mem.ai has the best mobile experience',
    tool: 'mem-ai',
  },
  {
    condition: "If you're building a team knowledge base",
    recommendation: 'Notion AI has the most mature collaboration features',
    tool: 'notion-ai',
  },
  {
    condition: "If you're a student studying for exams",
    recommendation: 'RemNote with built-in flashcards',
    tool: 'remnote',
  },
  {
    condition: "If you're a visual thinker",
    recommendation: 'Heptabase for whiteboard-style organization',
    tool: 'heptabase',
  },
  {
    condition: "If you're a developer who wants MCP integration",
    recommendation: 'myNeutron has the most complete MCP implementation',
    tool: 'myneutron',
  },
];

export default function ToolsPage() {
  const featuredTool = getFeaturedTools()[0];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              AI Memory Tools: Complete Directory (2025)
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We&apos;ve tested 15+ AI memory solutions so you don&apos;t have to.
              Filter by your needs, compare features side-by-side, and find the tool that fits your workflow.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              <strong>Last updated:</strong> December 2025 | <strong>Tools reviewed:</strong> {tools.length}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tool */}
      {featuredTool && (
        <section className="py-12 bg-primary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-5 w-5 text-primary fill-primary" />
              <h2 className="text-xl font-semibold">Editor&apos;s Choice: {featuredTool.name}</h2>
            </div>
            <div className="bg-background rounded-xl p-8 border border-primary/20">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">{featuredTool.name}</h3>
                  <p className="mt-2 text-muted-foreground">{featuredTool.tagline}</p>
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
                      {featuredTool.features.slice(0, 6).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-sm">
                          <Check className="h-3 w-3 mr-1 text-green-600" />
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <Button asChild>
                      <Link href={`/tools/${featuredTool.slug}`}>
                        Read Full Review
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={featuredTool.website} target="_blank" rel="noopener noreferrer">
                        Try {featuredTool.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="lg:w-64 space-y-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Best for</span>
                    <p className="font-medium">{featuredTool.bestFor.join(', ')}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Pricing</span>
                    <p className="font-medium">{featuredTool.pricing.free} | {featuredTool.pricing.paid}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-medium">{featuredTool.rating}/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter Section and Tools Grid */}
      <ToolsFilter tools={tools} />

      {/* Comparison Table */}
      <section id="comparison" className="py-16 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Comparison Table</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Tool</TableHead>
                  <TableHead>Pricing</TableHead>
                  <TableHead>Cross-AI</TableHead>
                  <TableHead>Mobile</TableHead>
                  <TableHead>Local Storage</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead>MCP</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tools.slice(0, 10).map((tool) => (
                  <TableRow key={tool.slug}>
                    <TableCell className="font-medium">
                      <Link href={`/tools/${tool.slug}`} className="hover:text-primary transition-colors">
                        {tool.name}
                      </Link>
                    </TableCell>
                    <TableCell className="text-sm">{tool.pricing.free || tool.pricing.paid}</TableCell>
                    <TableCell><CrossAIIcon status={tool.crossAI} /></TableCell>
                    <TableCell>{tool.mobile ? <Check className="h-4 w-4 text-green-600" /> : <X className="h-4 w-4 text-muted-foreground" />}</TableCell>
                    <TableCell>{tool.localStorage ? <Check className="h-4 w-4 text-green-600" /> : <X className="h-4 w-4 text-muted-foreground" />}</TableCell>
                    <TableCell>{tool.team ? <Check className="h-4 w-4 text-green-600" /> : <X className="h-4 w-4 text-muted-foreground" />}</TableCell>
                    <TableCell>{tool.mcp ? <Check className="h-4 w-4 text-green-600" /> : <X className="h-4 w-4 text-muted-foreground" />}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-6">
            <Link href="#comparison" className="text-primary hover:underline text-sm">
              Detailed feature comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">How to Choose Your AI Memory Tool</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {decisionFramework.map((item, index) => (
              <div key={index} className="bg-muted/30 rounded-lg p-6 border border-border">
                <p className="font-medium text-sm text-primary mb-2">{item.condition}</p>
                <p className="text-muted-foreground text-sm">→ {item.recommendation}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/guide/what-is-ai-memory-layer" className="text-primary hover:underline text-sm">
              Still unsure? Read our complete buying guide →
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={toolsHubFAQs} />

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Stop Re-Explaining Context to AI?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Pick a tool and start building your memory layer today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/tools/myneutron">
                Most Popular: Try myNeutron Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/for-developers">
                For Developers: Read MCP Integration Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#comparison">
                Still Deciding: Compare All Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "AI Memory Tools Directory",
            "description": "Comprehensive directory of AI memory and personal knowledge management tools",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://aimemorylayer.com"
              },{
                "@type": "ListItem",
                "position": 2,
                "name": "Tools",
                "item": "https://aimemorylayer.com/tools"
              }]
            }
          })
        }}
      />
    </>
  );
}
