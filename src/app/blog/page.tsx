import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, getFeaturedBlogPosts } from '@/data/blogPosts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog: AI Memory Systems, Workflows & Productivity',
  description: 'Articles about AI memory layers, productivity workflows, tool comparisons, and how to get the most out of your AI tools.',
  keywords: ['AI memory blog', 'AI productivity', 'ChatGPT tips', 'AI workflow'],
};

const categoryLabels: Record<string, string> = {
  'problem-aware': 'Understanding the Problem',
  'comparison': 'Tool Comparisons',
  'how-to': 'How-To Guides',
  'case-study': 'Case Studies',
};

export default function BlogPage() {
  const featuredPosts = getFeaturedBlogPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Blog
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Insights on AI memory systems, productivity workflows, and making the most of your AI tools.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-primary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold mb-8">Featured Articles</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{categoryLabels[post.category]}</Badge>
                        <Badge variant="outline" className="text-primary">Featured</Badge>
                      </div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3">
                        {post.description}
                      </CardDescription>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{post.readingTime}</span>
                        </div>
                        <span className="text-sm font-medium text-primary flex items-center gap-1">
                          Read article
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold mb-8">All Articles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {categoryLabels[post.category]}
                    </Badge>
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-2">
                      {post.description}
                    </CardDescription>
                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{post.readingTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
