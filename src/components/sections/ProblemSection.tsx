import { FolderOpen, Search, RefreshCw, FileQuestion, Camera } from 'lucide-react';

const problems = [
  { icon: FolderOpen, text: 'Articles in 15 browser tabs' },
  { icon: FileQuestion, text: 'Notes scattered across Apple Notes, Google Docs, and random text files' },
  { icon: RefreshCw, text: 'Important AI conversations that disappear when you close the window' },
  { icon: FolderOpen, text: 'Research PDFs buried in Downloads' },
  { icon: Camera, text: 'Screenshots of things you\'ll "definitely remember later"' },
];

const struggles = [
  'You spend 20 minutes searching across five apps',
  'Re-read the same article you read last week',
  'Re-explain your entire project to ChatGPT... again',
  'Rebuild thinking you already completed',
  'Give up and start from scratch',
];

export function ProblemSection() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Your AI Workflow Feels Like Groundhog Day
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Left column - You save things everywhere */}
          <div className="bg-background rounded-xl p-8 border border-border">
            <h3 className="text-lg font-semibold mb-6">You save things everywhere:</h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <problem.icon className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{problem.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - Then when you need something */}
          <div className="bg-background rounded-xl p-8 border border-border">
            <h3 className="text-lg font-semibold mb-6">Then when you need something:</h3>
            <ul className="space-y-4">
              {struggles.map((struggle, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Search className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{struggle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-foreground">
            The problem isn&apos;t you. The problem is that AI tools have no memory between sessions,
            and nothing connects your scattered information.
          </p>
        </div>
      </div>
    </section>
  );
}
