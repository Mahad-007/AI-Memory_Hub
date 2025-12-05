import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CTASection } from '@/components/sections/CTASection';
import { FAQSection } from '@/components/sections/FAQSection';
import { Check, X, Clock, Star } from 'lucide-react';
import type { UseCase } from '@/data/useCases';
import type { FAQ } from '@/data/faqs';

interface UseCasePageProps {
  useCase: UseCase;
  faqs: FAQ[];
}

export function UseCasePage({ useCase, faqs }: UseCasePageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {useCase.heroTitle}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {useCase.heroSubtitle}
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span>Average time saved: <strong>{useCase.timeSaved}</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold">Sound familiar?</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2">
                  <X className="h-5 w-5" />
                  The Current Problem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {useCase.problems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <X className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{problem}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  With an AI Memory Layer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {useCase.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workflows Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold">Real Workflow Examples</h2>
            <p className="mt-4 text-muted-foreground">
              See how this changes your actual work.
            </p>
          </div>

          <div className="space-y-12">
            {useCase.workflows.map((workflow, index) => (
              <div key={index} className="bg-muted/30 rounded-xl p-8 border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">{workflow.title}</h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    <Clock className="h-3 w-3 mr-1" />
                    {workflow.timeSaved}
                  </Badge>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-destructive mb-4 flex items-center gap-2">
                      <X className="h-4 w-4" />
                      Old Way
                    </h4>
                    <ol className="space-y-2">
                      {workflow.oldWay.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="font-mono text-xs bg-muted px-2 py-0.5 rounded shrink-0">
                            {stepIndex + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-medium text-primary mb-4 flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      With AI Memory Layer
                    </h4>
                    <ol className="space-y-2">
                      {workflow.newWay.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-3 text-sm">
                          <span className="font-mono text-xs bg-primary/10 text-primary px-2 py-0.5 rounded shrink-0">
                            {stepIndex + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Tools Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold">Best Tools for {useCase.shortTitle}</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {useCase.recommendedTools.map((tool, index) => (
              <Link key={index} href={`/tools/${tool.slug}`}>
                <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {tool.name}
                      {index === 0 && (
                        <Star className="h-4 w-4 text-primary fill-primary" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tool.reason}</p>
                    <p className="mt-3 text-sm font-medium text-primary">Learn more →</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      {useCase.caseStudy && (
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
                <Badge className="mb-4">Case Study</Badge>
                <h3 className="text-2xl font-bold mb-4">{useCase.caseStudy.title}</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-destructive mb-2">Challenge:</h4>
                    <p className="text-muted-foreground">{useCase.caseStudy.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-primary mb-2">Solution:</h4>
                    <ul className="space-y-1">
                      {useCase.caseStudy.solution.map((step, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium text-green-600 mb-2">Result:</h4>
                    <p className="font-medium">{useCase.caseStudy.result}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={faqs} />

      <CTASection
        title="Ready to Transform Your Workflow?"
        description="Start with a free tool and see the difference in just one week."
        primaryCTA={{ text: "Try myNeutron Free", href: "/tools/myneutron" }}
        secondaryCTA={{ text: "Compare All Tools", href: "/tools" }}
      />
    </>
  );
}
