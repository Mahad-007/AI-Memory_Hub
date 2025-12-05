import Link from 'next/link';
import { GraduationCap, Code, PenTool, Briefcase, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const useCases = [
  {
    icon: GraduationCap,
    title: 'For Students & Researchers',
    description: 'Save papers, articles, lecture notes. Ask questions across all your sources. Build a searchable library that grows with your thesis.',
    href: '/for-students',
  },
  {
    icon: Code,
    title: 'For Developers',
    description: 'Keep architectural decisions, debugging notes, and code patterns accessible. Integrate with Cursor and Claude Code via MCP.',
    href: '/for-developers',
  },
  {
    icon: PenTool,
    title: 'For Writers & Creators',
    description: 'Capture research, save AI-generated drafts you want to keep, organize project materials. Return to any piece with full context.',
    href: '/for-writers',
  },
  {
    icon: Search,
    title: 'For Job Seekers',
    description: 'Save job posts, company research, interview notes. Compare opportunities. Track applications without losing threads.',
    href: '/for-students',
  },
  {
    icon: Briefcase,
    title: 'For Professionals',
    description: 'Maintain client context, save meeting notes, keep project history accessible. Never walk into a call unprepared.',
    href: '/for-professionals',
  },
];

export function UseCasesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Who Uses AI Memory Layers?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Different workflows, same problem. See how people in your field solve it.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <Link key={index} href={useCase.href}>
              <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <useCase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{useCase.description}</CardDescription>
                  <p className="mt-4 text-sm font-medium text-primary">Learn more →</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
