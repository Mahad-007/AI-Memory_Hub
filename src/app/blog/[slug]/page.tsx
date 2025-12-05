import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug } from '@/data/blogPosts';
import { CTASection } from '@/components/sections/CTASection';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

const categoryLabels: Record<string, string> = {
  'problem-aware': 'Understanding the Problem',
  'comparison': 'Tool Comparison',
  'how-to': 'How-To Guide',
  'case-study': 'Case Study',
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Find related posts
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">{categoryLabels[post.category]}</Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            {post.description}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Published: {post.publishedAt}
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {post.content.map((section, index) => {
              if (section.type === 'heading') {
                const HeadingTag = section.level === 2 ? 'h2' : 'h3';
                return (
                  <HeadingTag
                    key={index}
                    className={section.level === 2 ? 'text-2xl font-bold mt-12 mb-4' : 'text-xl font-semibold mt-8 mb-3'}
                  >
                    {section.content}
                  </HeadingTag>
                );
              }

              if (section.type === 'paragraph') {
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {section.content}
                  </p>
                );
              }

              if (section.type === 'list') {
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 mb-6">
                    {section.items?.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              if (section.type === 'quote') {
                return (
                  <blockquote
                    key={index}
                    className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6"
                  >
                    {section.content}
                  </blockquote>
                );
              }

              if (section.type === 'cta') {
                return (
                  <div key={index} className="my-8 p-6 bg-primary/5 rounded-lg border border-primary/20 text-center">
                    <Button asChild>
                      <Link href="/tools">
                        {section.content}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <div className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
                    <Badge variant="secondary" className="mb-3">
                      {categoryLabels[relatedPost.category]}
                    </Badge>
                    <h3 className="font-semibold mb-2 line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{relatedPost.readingTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Ready to Try an AI Memory Layer?"
        description="Compare the best tools and find the right fit for your workflow."
        primaryCTA={{ text: "Explore All Tools", href: "/tools" }}
        secondaryCTA={{ text: "Read the Complete Guide", href: "/guide/what-is-ai-memory-layer" }}
      />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.description,
            "author": {
              "@type": "Organization",
              "name": "AI Memory Layer"
            },
            "datePublished": post.publishedAt,
            "dateModified": post.publishedAt
          })
        }}
      />
    </>
  );
}
