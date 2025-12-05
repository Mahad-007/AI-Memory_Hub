import { Download, FolderSync, Link2, Search } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Captures',
    description: 'What you want to remember (pages, files, notes, important AI conversations)',
  },
  {
    icon: FolderSync,
    title: 'Organizes',
    description: 'Everything automatically so you can find it later',
  },
  {
    icon: Link2,
    title: 'Connects',
    description: 'Your knowledge across ChatGPT, Claude, Cursor, and other tools',
  },
  {
    icon: Search,
    title: 'Retrieves',
    description: 'The right context when you need it',
  },
];

export function SolutionSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Is an AI Memory Layer?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            An AI memory layer sits between you and your AI tools.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-primary">{index + 1}.</span>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-muted/50 rounded-xl p-8 border border-border">
          <p className="text-center text-muted-foreground mb-8">
            Think of it as <span className="font-semibold text-foreground">persistent memory for AI</span> -
            the missing piece that makes your tools actually useful over time.
          </p>

          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            <div className="bg-background rounded-lg p-6 border border-border">
              <h4 className="font-medium text-sm text-muted-foreground mb-3">Without a memory layer:</h4>
              <div className="flex items-center gap-2 text-sm">
                <span>You</span>
                <span className="text-muted-foreground">→</span>
                <span>AI Tool</span>
                <span className="text-muted-foreground">→</span>
                <span>Answer</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-destructive">Everything disappears</span>
              </div>
            </div>

            <div className="bg-background rounded-lg p-6 border border-primary/20">
              <h4 className="font-medium text-sm text-primary mb-3">With a memory layer:</h4>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span>You</span>
                <span className="text-muted-foreground">→</span>
                <span>AI Tool</span>
                <span className="text-muted-foreground">→</span>
                <span>Answer</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-primary">Memory saves it</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-primary">Better answers next time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
