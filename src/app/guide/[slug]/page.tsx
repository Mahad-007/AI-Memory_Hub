import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guides, getGuideBySlug } from '@/data/guides';
import { guideMainFAQs } from '@/data/faqs';
import { CTASection } from '@/components/sections/CTASection';
import { FAQSection } from '@/components/sections/FAQSection';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, BookOpen, ArrowLeft, ChevronRight } from 'lucide-react';

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: 'Guide Not Found',
    };
  }

  return {
    title: guide.title,
    description: guide.description,
    keywords: ['AI memory layer', 'what is AI memory', 'AI context persistence', 'cross-AI memory', 'AI knowledge base', 'personal AI memory system', guide.title],
    alternates: {
      canonical: `https://aimemorylayer.com/guide/${slug}`,
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>

          <div className="flex flex-wrap gap-3 mb-4">
            <Badge variant="secondary">
              <BookOpen className="h-3 w-3 mr-1" />
              {guide.displayLevel || guide.level.charAt(0).toUpperCase() + guide.level.slice(1)}
            </Badge>
            <Badge variant="outline">
              <Clock className="h-3 w-3 mr-1" />
              {guide.readingTime}
            </Badge>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            {guide.description}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: {guide.lastUpdated}
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur z-40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <span className="text-sm font-medium shrink-0">Jump to:</span>
            {guide.tableOfContents.map((item, index) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground whitespace-nowrap"
              >
                {index > 0 && <ChevronRight className="h-3 w-3" />}
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {guide.sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                {index > 0 && <Separator className="my-12" />}
                <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>

      <FAQSection faqs={guideMainFAQs} />

      <CTASection
        title="Ready to Add Memory to Your AI Workflow?"
        description="Start with the right tool for your needs."
        primaryCTA={{ text: "Compare AI Memory Tools", href: "/tools" }}
        secondaryCTA={{ text: "See Use Cases", href: "/for-students" }}
      />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": guide.title,
            "description": "Comprehensive guide to understanding AI memory layers, how they work, and why they're essential for serious AI users",
            "author": {
              "@type": "Organization",
              "name": "AI Memory Layer"
            },
            "datePublished": guide.lastUpdated,
            "dateModified": guide.lastUpdated
          })
        }}
      />
    </>
  );
}
