import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { tools, getToolBySlug } from '@/data/tools';
import { CTASection } from '@/components/sections/CTASection';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Check,
  X,
  AlertCircle,
  Star,
  ArrowRight,
  ArrowLeft,
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

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: `${tool.name} Review: ${tool.tagline} (2025)`,
    description: tool.description,
    keywords: [`${tool.name} review`, 'AI memory', tool.name, ...tool.bestFor],
  };
}

function CrossAIBadge({ status }: { status: 'full' | 'limited' | 'none' }) {
  if (status === 'full') {
    return (
      <div className="flex items-center gap-2 text-green-600">
        <Check className="h-5 w-5" />
        <span className="font-medium">Excellent</span>
      </div>
    );
  }
  if (status === 'limited') {
    return (
      <div className="flex items-center gap-2 text-yellow-600">
        <AlertCircle className="h-5 w-5" />
        <span className="font-medium">Limited</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <X className="h-5 w-5" />
      <span className="font-medium">Standalone Only</span>
    </div>
  );
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/tools"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all tools
          </Link>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                {iconMap[tool.icon] && (
                  <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10">
                    {(() => {
                      const IconComponent = iconMap[tool.icon];
                      return <IconComponent className="h-8 w-8 text-primary" />;
                    })()}
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <h1 className="text-4xl font-bold tracking-tight">{tool.name}</h1>
                  {tool.isFeatured && (
                    <Badge className="bg-primary/10 text-primary">
                      <Star className="h-3 w-3 mr-1 fill-primary" />
                      Top Pick
                    </Badge>
                  )}
                </div>
              </div>
              <p className="text-xl text-muted-foreground mb-6">{tool.tagline}</p>
              <p className="text-muted-foreground">{tool.description}</p>

              {tool.rating && (
                <div className="mt-6 flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= Math.floor(tool.rating || 0)
                            ? 'fill-primary text-primary'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold">{tool.rating}/5</span>
                </div>
              )}
            </div>

            <div className="lg:w-80 bg-background rounded-xl p-6 border border-border">
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-muted-foreground">Pricing</span>
                  <p className="font-semibold">
                    {tool.pricing.free && <span className="text-green-600">{tool.pricing.free}</span>}
                    {tool.pricing.free && tool.pricing.paid && ' / '}
                    {tool.pricing.paid}
                  </p>
                  {tool.pricing.note && (
                    <p className="text-sm text-muted-foreground">{tool.pricing.note}</p>
                  )}
                </div>

                <Separator />

                <div>
                  <span className="text-sm text-muted-foreground">Cross-AI Support</span>
                  <CrossAIBadge status={tool.crossAI} />
                  <p className="text-sm text-muted-foreground mt-1">{tool.crossAIDetails}</p>
                </div>

                <Separator />

                <div>
                  <span className="text-sm text-muted-foreground">Best For</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tool.bestFor.map((use, index) => (
                      <Badge key={index} variant="secondary">{use}</Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="flex flex-wrap gap-2">
                  {tool.mcp && <Badge variant="outline">MCP Support</Badge>}
                  {tool.mobile && <Badge variant="outline">Mobile Apps</Badge>}
                  {tool.localStorage && <Badge variant="outline">Local Storage</Badge>}
                  {tool.team && <Badge variant="outline">Team Features</Badge>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Key Features</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tool.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  Pros
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tool.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2">
                  <X className="h-5 w-5" />
                  Cons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tool.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="h-4 w-4 text-destructive mt-1 shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Should Use */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Who Should Use {tool.name}?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-6 border border-green-200 dark:border-green-900">
              <h3 className="font-semibold text-green-700 dark:text-green-400 mb-4">Excellent Fit For:</h3>
              <ul className="space-y-2">
                {tool.bestFor.map((use, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-4">Standout Feature:</h3>
              <p className="text-lg font-medium text-primary">{tool.standoutFeature}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                This is what sets {tool.name} apart from competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Compare With Similar Tools</h2>
          <div className="flex flex-wrap gap-4">
            {tools
              .filter((t) => t.slug !== tool.slug)
              .slice(0, 5)
              .map((t) => (
                <Button key={t.slug} asChild variant="outline">
                  <Link href={`/tools/${t.slug}`}>
                    {t.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Try ${tool.name}?`}
        description={tool.pricing.free ? "Start with the free tier and see if it fits your workflow." : "See if it fits your workflow."}
        primaryCTA={{ text: "Compare All Tools", href: "/tools" }}
        secondaryCTA={{ text: "Read the Complete Guide", href: "/guide/what-is-ai-memory-layer" }}
      />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "SoftwareApplication",
              "name": tool.name,
              "applicationCategory": "ProductivityApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": tool.pricing.free ? "0" : tool.pricing.paid,
                "priceCurrency": "USD"
              }
            },
            "reviewRating": tool.rating ? {
              "@type": "Rating",
              "ratingValue": tool.rating.toString(),
              "bestRating": "5"
            } : undefined,
            "author": {
              "@type": "Organization",
              "name": "AI Memory Layer"
            },
            "reviewBody": tool.description
          })
        }}
      />
    </>
  );
}
