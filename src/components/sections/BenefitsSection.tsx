import { MessageSquare, TrendingUp, Layers, Search, Clock } from 'lucide-react';

const benefits = [
  {
    icon: MessageSquare,
    title: 'Stop Re-Explaining Context',
    description: 'Your AI tools start with what they already know about your project, client, or research topic.',
  },
  {
    icon: TrendingUp,
    title: 'Build Knowledge Over Time',
    description: 'Every insight compounds. This week\'s research connects to last month\'s exploration.',
  },
  {
    icon: Layers,
    title: 'Work Across Multiple AI Tools',
    description: 'Use ChatGPT for writing, Claude for analysis, Cursor for coding - all with shared context.',
  },
  {
    icon: Search,
    title: 'Find What You\'ve Already Figured Out',
    description: 'Search across everything you\'ve saved: "What did I conclude about X?" gets instant answers.',
  },
  {
    icon: Clock,
    title: 'Pick Up Where You Left Off',
    description: 'Return to any project next week or next month and instantly remember where you were.',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Changes When You Add Memory to Your AI Workflow
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
