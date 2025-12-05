import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Cog, Wrench, GitCompare } from 'lucide-react';

const guides = [
  {
    icon: BookOpen,
    title: 'What Is an AI Memory Layer?',
    description: "Complete beginner's guide to understanding memory systems for AI",
    readTime: '15 min read',
    href: '/guide/what-is-ai-memory-layer',
  },
  {
    icon: Cog,
    title: 'How AI Memory Works',
    description: 'Technical deep-dive into architecture, storage, and retrieval mechanisms',
    readTime: '20 min read',
    href: '/guide/what-is-ai-memory-layer#how-it-works',
  },
  {
    icon: Wrench,
    title: 'Building Your Own AI Memory System',
    description: 'DIY guide for developers who want to understand the complexity',
    readTime: '30 min read',
    href: '/for-developers',
  },
  {
    icon: GitCompare,
    title: 'ChatGPT Memory vs Memory Layers',
    description: "Why built-in memory features aren't enough for serious work",
    readTime: '10 min read',
    href: '/blog/why-chatgpt-forgets-conversations',
  },
];

const comparisons = [
  { name: 'myNeutron vs Mem.ai', href: '/tools' },
  { name: 'Best Free AI Memory Tools', href: '/tools' },
  { name: 'Notion AI vs Dedicated Memory Tools', href: '/tools' },
];

export function LearningSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Learn About AI Memory Systems
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From beginner concepts to advanced implementations.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-8">Essential Guides</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((guide, index) => (
              <Link key={index} href={guide.href}>
                <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
                      <guide.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">{guide.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{guide.description}</CardDescription>
                    <p className="mt-3 text-xs text-muted-foreground">{guide.readTime}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Popular Comparisons</h3>
          <ul className="flex flex-wrap gap-3">
            {comparisons.map((comparison, index) => (
              <li key={index}>
                <Link
                  href={comparison.href}
                  className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm hover:bg-muted transition-colors"
                >
                  {comparison.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/guide/what-is-ai-memory-layer"
            className="text-primary hover:underline font-medium"
          >
            Browse all guides →
          </Link>
        </div>
      </div>
    </section>
  );
}
