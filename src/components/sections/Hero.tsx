import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, MessageSquare, FileText, HelpCircle, FolderOpen, X, CheckCircle, Brain, Layers, ArrowRightLeft } from 'lucide-react';

const Galaxy = dynamic(() => import('@/components/ui/Galaxy'), {
  ssr: false,
});

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
      {/* Galaxy Background Animation - Only visible in dark mode */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block opacity-70">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.0}
          glowIntensity={0.4}
          saturation={0.7}
          hueShift={240}
          speed={0.5}
          twinkleIntensity={0.4}
          rotationSpeed={0.05}
        />
      </div>
      {/* Gradient overlay for better text readability in dark mode */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block bg-gradient-to-b from-background/40 via-transparent to-background/60" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 dark:bg-muted/70 backdrop-blur-sm px-4 py-1.5 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">15+ AI Memory Tools Reviewed</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Your AI Tools Forget Everything.{' '}
            <span className="text-primary">Here&apos;s How to Fix It.</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
            Every time you open ChatGPT, Claude, or Gemini, you start from zero.
            Yesterday&apos;s context is gone. Last week&apos;s decisions vanished.
            Your carefully explained project exists only in a chat you&apos;ll never find again.
          </p>

          <div className="mt-4 p-4 bg-muted/50 dark:bg-muted/70 backdrop-blur-sm rounded-lg border border-border max-w-xl mx-auto">
            <p className="text-sm font-medium text-foreground">
              <span className="text-primary">Solution:</span> A Persistent AI Memory Layer
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Creates persistent context across all your AI tools, so you stop re-explaining and start building on what you already know.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/tools">
                Explore AI Memory Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/guide/what-is-ai-memory-layer">
                Learn How Memory Layers Work
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Split-screen visual comparison */}
      <div className="mt-16 mx-auto max-w-4xl px-4 hidden md:block relative z-10">
        <div className="grid grid-cols-2 gap-4">
          {/* LEFT: Frustrated / Chaotic State */}
          <div className="relative bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/40 dark:to-orange-950/40 backdrop-blur-sm rounded-2xl p-6 border border-red-200 dark:border-red-900/30">
            <div className="absolute -top-3 left-4 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-xs font-medium">
              Without Memory Layer
            </div>
            <div className="mt-4 space-y-3">
              {/* Scattered chat windows */}
              <div className="flex items-center gap-2 opacity-70">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-lg bg-red-200 dark:bg-red-800 flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-red-600 dark:text-red-300" />
                  </div>
                  <div className="h-8 w-8 rounded-lg bg-orange-200 dark:bg-orange-800 flex items-center justify-center rotate-6">
                    <MessageSquare className="h-4 w-4 text-orange-600 dark:text-orange-300" />
                  </div>
                  <div className="h-8 w-8 rounded-lg bg-yellow-200 dark:bg-yellow-800 flex items-center justify-center -rotate-3">
                    <MessageSquare className="h-4 w-4 text-yellow-600 dark:text-yellow-300" />
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">15 chat windows open</span>
              </div>
              {/* Scattered notes */}
              <div className="flex items-center gap-2 opacity-70">
                <div className="flex -space-x-1">
                  <FileText className="h-5 w-5 text-red-400 rotate-12" />
                  <FileText className="h-5 w-5 text-orange-400 -rotate-6" />
                  <FileText className="h-5 w-5 text-yellow-400 rotate-3" />
                </div>
                <span className="text-xs text-muted-foreground">Notes everywhere</span>
              </div>
              {/* Confusion */}
              <div className="flex items-center gap-2 opacity-70">
                <HelpCircle className="h-5 w-5 text-red-400" />
                <span className="text-xs text-muted-foreground">&quot;Where did I save that?&quot;</span>
              </div>
              {/* Lost context */}
              <div className="flex items-center gap-2 opacity-70">
                <X className="h-5 w-5 text-red-500" />
                <span className="text-xs text-muted-foreground">Context lost every session</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Organized / Clean State */}
          <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/40 backdrop-blur-sm rounded-2xl p-6 border border-green-200 dark:border-green-900/30">
            <div className="absolute -top-3 left-4 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium">
              With Memory Layer
            </div>
            <div className="mt-4 space-y-3">
              {/* Connected AI tools */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="h-8 w-8 rounded-lg bg-green-200 dark:bg-green-800 flex items-center justify-center">
                    <Brain className="h-4 w-4 text-green-600 dark:text-green-300" />
                  </div>
                  <ArrowRightLeft className="h-3 w-3 text-green-500" />
                  <div className="h-8 w-8 rounded-lg bg-emerald-200 dark:bg-emerald-800 flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                  </div>
                  <ArrowRightLeft className="h-3 w-3 text-green-500" />
                  <div className="h-8 w-8 rounded-lg bg-teal-200 dark:bg-teal-800 flex items-center justify-center">
                    <Layers className="h-4 w-4 text-teal-600 dark:text-teal-300" />
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">Connected tools</span>
              </div>
              {/* Organized memory cards */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <FolderOpen className="h-5 w-5 text-green-500" />
                  <div className="flex -space-x-1">
                    <div className="h-4 w-6 rounded bg-green-300 dark:bg-green-700" />
                    <div className="h-4 w-6 rounded bg-emerald-300 dark:bg-emerald-700" />
                    <div className="h-4 w-6 rounded bg-teal-300 dark:bg-teal-700" />
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">Organized knowledge</span>
              </div>
              {/* Instant retrieval */}
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-xs text-muted-foreground">Find anything instantly</span>
              </div>
              {/* Persistent context */}
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-xs text-muted-foreground">Context persists forever</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
