import type { Metadata } from 'next';
import Link from 'next/link';
import { CTASection } from '@/components/sections/CTASection';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Check,
  X,
  Star,
  ArrowRight,
  ArrowLeft,
  Eye,
  MousePointer,
  Folder,
  MessageSquare,
  Clipboard,
  Code,
  GraduationCap,
  Briefcase,
  Terminal
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'myNeutron Review: Visual AI Memory Layer for Knowledge Workers (2025)',
  description: 'Complete myNeutron review: How this AI memory tool creates persistent context across ChatGPT, Claude, Gemini, and Cursor. Features, pricing, pros/cons, and real user workflows.',
  keywords: ['myNeutron review', 'myNeutron AI', 'AI memory layer', 'cross-AI memory', 'personal knowledge management', 'ChatGPT memory tool', 'MCP integration'],
  alternates: {
    canonical: 'https://aimemorylayer.com/tools/myneutron',
  },
};

const faqs = [
  {
    question: 'Is myNeutron actually free?',
    answer: 'Yes. 200 seeds is genuinely free forever. No trial period, no credit card required. Only upgrade if you need more than 200 items.',
  },
  {
    question: 'Does it work with all AI tools?',
    answer: "ChatGPT, Claude, Gemini, Cursor, Claude Code - yes. Any MCP-compatible tool - yes. Closed ecosystems like Notion AI's internal assistant - no.",
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'You can export everything anytime. Seeds can even be stored on blockchain for permanent ownership.',
  },
  {
    question: 'Can I use it offline?',
    answer: 'No, myNeutron is cloud-based. If you need offline, use Obsidian or Logseq.',
  },
  {
    question: "How is this different from ChatGPT's built-in memory?",
    answer: "ChatGPT memory is: (1) limited to ChatGPT only, (2) not visual, (3) not searchable across documents, (4) not exportable. myNeutron works across all AI tools and gives you full control.",
  },
];

const keyFeatures = [
  {
    icon: Eye,
    title: '1. Visual "Seed" System',
    description: 'Everything you save becomes a visual card (called a "seed"). Unlike folder hierarchies or endless note lists, you can see your knowledge at a glance.',
    whyMatters: 'Your brain processes visual information faster. Scanning 50 cards beats scrolling through 50 filenames.',
    visual: 'Screenshot of seed grid',
  },
  {
    icon: MousePointer,
    title: '2. One-Click Capture from Anywhere',
    description: 'Chrome extension lets you save full webpages, selected text, and important AI conversations (ChatGPT, Claude, Gemini).',
    whyMatters: "If saving something requires more than one click, you won't do it. myNeutron makes capture effortless.",
    visual: 'Chrome extension popup',
  },
  {
    icon: Folder,
    title: '3. Automatic Organization (Bundles)',
    description: 'Related seeds automatically group into Bundles - like smart folders that organize themselves. No manual tagging required. No folder structure to maintain.',
    whyMatters: 'Most knowledge management systems fail because organization becomes a chore. myNeutron does it automatically.',
    visual: 'Bundle view with grouped seeds',
  },
  {
    icon: MessageSquare,
    title: '4. AI Assistant That Reads Your Knowledge',
    description: 'Ask questions across everything you\'ve saved: "What have I already researched about X?", "Summarize my notes on Y", "What did I decide last time?" The assistant searches your seeds and answers with citations.',
    whyMatters: 'Search bars make you remember keywords. AI assistants let you ask naturally.',
    visual: 'Chat interface with cited sources',
  },
  {
    icon: Clipboard,
    title: '5. Cross-AI Memory Injection',
    description: 'The killer feature: Paste your saved context into any AI tool. Click "Paste AI Memory" in the extension → myNeutron injects relevant context directly into ChatGPT, Claude, or Gemini.',
    whyMatters: 'This is the feature that makes AI tools actually useful for ongoing work instead of one-off questions.',
    contextIncludes: ['Previous decisions you made', 'Research you already gathered', 'Context from last week\'s work'],
    visual: 'Context being pasted into ChatGPT',
  },
  {
    icon: Code,
    title: '6. Developer-Friendly (MCP Integration)',
    description: 'For developers, myNeutron includes an MCP (Model Context Protocol) server that connects to Cursor, Claude Code, and VS Code (with extensions).',
    whyMatters: 'Most AI memory tools ignore developers. myNeutron is one of the few with serious coder integration.',
    accessIncludes: ['Previous architectural decisions', 'Debugging notes from similar issues', 'Code patterns you\'ve documented'],
    visual: 'MCP integration diagram',
  },
];

const prosItems = [
  {
    title: 'Best cross-AI compatibility',
    description: 'Most competitors lock you into their ecosystem. myNeutron works with ChatGPT, Claude, Gemini, Cursor, and anything MCP-compatible.',
  },
  {
    title: 'Visual organization',
    description: 'Seed cards are easier to browse than Notion pages, Obsidian files, or Mem.ai lists.',
  },
  {
    title: 'No learning curve',
    description: 'Unlike Obsidian (requires learning markdown, plugins, folder structures) or Roam (requires understanding bidirectional links), myNeutron works intuitively from day one.',
  },
  {
    title: 'Actually free to start',
    description: '200 items free isn\'t a "trial" - it\'s a real free tier.',
  },
  {
    title: 'Developer-friendly',
    description: 'MCP integration is unique among knowledge management tools.',
  },
];

const consItems = [
  {
    title: 'Mobile apps not ready yet',
    description: 'Currently web + Chrome extension only. Mobile capture is coming (including WhatsApp QuickSave), but not available as of December 2024.',
  },
  {
    title: 'No team features yet',
    description: 'Collaboration is "coming soon." Right now it\'s personal-use only.',
  },
  {
    title: 'Newer tool means smaller community',
    description: 'Obsidian has thousands of plugins and guides. myNeutron is newer, so the ecosystem is still growing.',
  },
  {
    title: 'Bundle auto-organization sometimes misses',
    description: 'The AI usually groups related items correctly, but occasionally you need to manually move seeds between bundles. Not a dealbreaker, just not perfect.',
  },
];

const excellentFitFor = [
  {
    title: 'Knowledge workers who use multiple AI tools',
    description: 'If you switch between ChatGPT for writing, Claude for analysis, and Cursor for coding - myNeutron is built for you.',
  },
  {
    title: 'Students writing theses or long research papers',
    description: 'Save sources, ask questions across all your materials, build a searchable library.',
    link: { text: 'See student workflow', href: '/for-students' },
  },
  {
    title: 'Developers building with AI coding assistants',
    description: 'MCP integration brings your knowledge directly into your IDE.',
    link: { text: 'See developer workflow', href: '/for-developers' },
  },
  {
    title: 'Job seekers tracking applications',
    description: 'Save job posts, company research, interview notes. Compare opportunities side-by-side.',
    link: { text: 'See job seeker workflow', href: '#' },
  },
  {
    title: 'Consultants/freelancers managing multiple clients',
    description: 'Keep each client\'s context separate but instantly accessible.',
    link: { text: 'See professional workflow', href: '/for-professionals' },
  },
];

const notBestFitFor = [
  {
    title: 'Teams needing real-time collaboration',
    description: "Use Notion AI instead until myNeutron's team features launch.",
  },
  {
    title: 'Mobile-first users who capture everything on phone',
    description: 'Wait for mobile apps or use Mem.ai for now.',
  },
  {
    title: 'People who want 100% local storage',
    description: 'Use Obsidian or Logseq if cloud storage is a dealbreaker.',
  },
  {
    title: 'Daily journaling enthusiasts',
    description: 'myNeutron is built for research/projects, not stream-of-consciousness daily notes. Try Reflect or Obsidian.',
  },
];

const comparisons = [
  {
    name: 'Mem.ai',
    slug: 'mem-ai',
    myNeutronWins: 'Cross-AI support, visual organization, MCP for developers',
    competitorWins: 'Mobile apps available now, faster capture on phone',
    verdict: 'myNeutron for desktop power users, Mem for mobile-first',
  },
  {
    name: 'Notion AI',
    slug: 'notion-ai',
    myNeutronWins: 'Cross-AI memory, AI-powered search, focused on knowledge capture',
    competitorWins: 'Team collaboration, databases, mature ecosystem',
    verdict: 'myNeutron for personal AI workflows, Notion for team workspaces',
  },
  {
    name: 'Obsidian + AI Plugins',
    slug: 'obsidian',
    myNeutronWins: 'Zero setup, visual interface, cross-AI out of the box',
    competitorWins: 'Infinite customization, local storage, larger community',
    verdict: 'myNeutron for ease of use, Obsidian for power users who want control',
  },
  {
    name: 'Reflect Notes',
    slug: 'reflect',
    myNeutronWins: 'Cross-AI compatibility, seed system, MCP integration',
    competitorWins: 'Daily notes workflow, backlinking, mobile apps',
    verdict: 'myNeutron for researchers, Reflect for daily journaling',
  },
];

const workflows = [
  {
    icon: GraduationCap,
    title: 'Workflow 1: Thesis Research (Student)',
    problem: '100+ PDFs, articles, and notes scattered across folders. Hard to remember what each source says.',
    solution: [
      'Upload all PDFs and save relevant webpages as seeds',
      'Auto-organized into thesis bundle',
      'Ask: "What are the main arguments across these sources?"',
      'Save AI\'s synthesis as a new seed',
      'When writing, paste relevant context into Claude for drafting help',
    ],
    timeSaved: '~10 hours per month on re-reading and searching',
    guideLink: { text: 'Full student guide', href: '/for-students' },
  },
  {
    icon: Briefcase,
    title: 'Workflow 2: Multi-Client Consulting (Professional)',
    problem: 'Context scattered across emails, Slack, Google Docs for 5 different clients. Walking into calls unprepared.',
    solution: [
      'After each client call, save notes as seed',
      'Capture relevant emails and documents',
      'Before next meeting: Ask "What did we discuss with Client X last time?"',
      'Review AI summary + linked sources',
      'Walk into call fully prepared',
    ],
    timeSaved: '~30 minutes prep per meeting',
    guideLink: { text: 'Full professional guide', href: '/for-professionals' },
  },
  {
    icon: Terminal,
    title: 'Workflow 3: Codebase Understanding (Developer)',
    problem: 'Large codebase with architectural decisions scattered across old PRs, docs, and Slack threads.',
    solution: [
      'Save key architectural decision documents',
      'Save debugging notes when solving complex issues',
      'Connect myNeutron via MCP to Cursor',
      'When working on new feature, Cursor automatically accesses relevant past decisions',
      'Never repeat solved problems',
    ],
    timeSaved: '~5-10 hours per sprint on context archaeology',
    guideLink: { text: 'Full developer guide', href: '/for-developers' },
  },
];

const gettingStartedSteps = [
  {
    step: 1,
    title: 'Sign Up (2 minutes)',
    description: 'Create free account at myneutron.ai - no credit card required',
  },
  {
    step: 2,
    title: 'Install Chrome Extension (1 minute)',
    description: 'Add extension to save pages, selections, and AI chats with one click',
  },
  {
    step: 3,
    title: 'Create Your First Bundle (5 minutes)',
    description: "Choose a real project you're working on - don't test with dummy notes",
  },
  {
    step: 4,
    title: 'Save 10-20 Items (20 minutes)',
    description: 'Upload relevant PDFs/docs, save important webpages, capture 2-3 old AI conversations you want to remember',
  },
  {
    step: 5,
    title: 'Ask Your First Question (2 minutes)',
    description: '"What are the main themes across everything I\'ve saved?"',
  },
  {
    step: 6,
    title: 'Paste Context into AI (5 minutes)',
    description: 'Open ChatGPT or Claude → Click "Paste AI Memory" in extension → See the difference',
  },
];

const finalScores = [
  { category: 'Cross-AI Compatibility', score: '5/5' },
  { category: 'Ease of Use', score: '5/5' },
  { category: 'Feature Completeness', score: '4.5/5', note: 'mobile coming soon' },
  { category: 'Value for Money', score: '5/5' },
  { category: 'Developer Features', score: '5/5' },
];

const relatedResources = [
  { title: 'Complete myNeutron Setup Guide', href: '/guide/myneutron-setup' },
  { title: 'MCP Integration Tutorial for Developers', href: '/guide/mcp-integration' },
  { title: 'myNeutron vs Top Competitors', href: '/tools' },
  { title: 'Student Workflow with myNeutron', href: '/for-students' },
  { title: 'Developer Workflow with myNeutron', href: '/for-developers' },
];

export default function MyNeutronPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/tools"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all tools
          </Link>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  myNeutron Review: The AI Memory Layer That Actually Works Across All Your Tools
                </h1>
              </div>

              <div className="bg-muted/50 border border-border rounded-lg p-4 my-6">
                <p className="text-lg">
                  <strong>Bottom Line:</strong> myNeutron is the most complete solution for creating persistent memory across ChatGPT, Claude, Gemini, Cursor, and other AI tools. If you&apos;re tired of re-explaining context every time you open a new chat, this is the tool to try.
                </p>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="font-semibold">Rating:</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= 4
                          ? 'fill-primary text-primary'
                          : star === 5
                          ? 'fill-primary/70 text-primary'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-lg">4.7/5</span>
              </div>
            </div>

            <div className="lg:w-96 bg-background rounded-xl p-6 border border-border">
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-muted-foreground">Best For</span>
                  <p className="font-medium">Knowledge workers, students, developers, researchers</p>
                </div>

                <Separator />

                <div>
                  <span className="text-sm text-muted-foreground">Pricing</span>
                  <p className="font-semibold">
                    <span className="text-green-600">Free (200 items)</span> &bull; Pro $99/year
                  </p>
                </div>

                <Separator />

                <div>
                  <span className="text-sm text-muted-foreground">Cross-AI Support</span>
                  <div className="flex items-center gap-2 text-green-600 mt-1">
                    <Check className="h-5 w-5" />
                    <span className="font-medium">Excellent</span>
                  </div>
                </div>

                <Separator />

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">MCP Support</Badge>
                  <Badge className="bg-primary/10 text-primary">
                    <Star className="h-3 w-3 mr-1 fill-primary" />
                    Top Pick
                  </Badge>
                </div>

                <div className="flex flex-col gap-2 pt-4">
                  <Button asChild size="lg">
                    <a href="https://myneutron.ai/?utm_source=aimemorylayer.com&utm_medium=referral&utm_campaign=emd-network" target="_blank" rel="noopener noreferrer">
                      Try myNeutron Free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/tools">
                      Compare with Alternatives
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-6 italic">
            [Visual: myNeutron dashboard showing seed grid, chat interface, and context panel]
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Quick Summary</h2>
          <h3 className="text-xl font-semibold mb-4">What Is myNeutron?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            myNeutron is a visual AI knowledge base that captures pages, files, notes, and important AI conversations, then makes them instantly retrievable across all your AI tools.
          </p>

          <div className="bg-muted/30 rounded-lg p-6 mb-6">
            <p className="font-semibold mb-4">Think of it as:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Memory layer for ChatGPT, Claude, and Gemini</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Visual second brain with cards instead of endless lists</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Cross-AI context engine that stops you from restarting every conversation</span>
              </li>
            </ul>
          </div>

          <p className="text-muted-foreground mb-4">
            Unlike note-taking apps (Notion, Obsidian) or standalone AI chats, myNeutron specifically solves the &quot;AI amnesia&quot; problem - where every new chat starts from zero.
          </p>

          <Link href="/guide/what-is-ai-memory-layer" className="text-primary hover:underline font-medium">
            New to AI memory layers? Start with What Is an AI Memory Layer? →
          </Link>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">Key Features</h2>
          <h3 className="text-xl text-muted-foreground mb-8">What Makes myNeutron Different</h3>

          <div className="space-y-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{feature.description}</p>

                  {feature.contextIncludes && (
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="font-medium mb-2">Your AI conversation now starts with:</p>
                      <ul className="space-y-1">
                        {feature.contextIncludes.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-2 text-sm text-muted-foreground italic">
                        Instead of: &quot;Hi ChatGPT, let me explain my entire project again...&quot;
                      </p>
                    </div>
                  )}

                  {feature.accessIncludes && (
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="font-medium mb-2">Your coding assistant can now access:</p>
                      <ul className="space-y-1">
                        {feature.accessIncludes.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                    <p className="font-medium text-primary">Why this matters:</p>
                    <p className="text-muted-foreground">{feature.whyMatters}</p>
                  </div>

                  <p className="text-sm text-muted-foreground italic">[Visual: {feature.visual}]</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/guide/mcp-integration" className="text-primary hover:underline font-medium">
              Complete MCP setup guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Breakdown Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Pricing Breakdown</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-green-200 dark:border-green-900">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-400">Free Plan (Actually Useful)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>200 seeds (pages, files, notes saved)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Unlimited questions to AI assistant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Chrome extension</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Bundle organization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Cross-AI memory paste</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>MCP integration</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <p className="font-medium text-green-700 dark:text-green-400">Verdict:</p>
                  <p className="text-sm text-muted-foreground">
                    This is enough for serious evaluation. Most &quot;free trials&quot; are too limited to judge a tool. myNeutron&apos;s free tier gives you 200 items - plenty to test with real work.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pro Plan ($99/year)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Unlimited seeds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Faster AI responses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Advanced search</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Team features (coming soon)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Blockchain storage option</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="font-medium">Verdict:</p>
                  <p className="text-sm text-muted-foreground">
                    $99/year (~$8/month) is reasonable for a tool that saves hours of re-explaining context every week. Cheaper than Notion AI ($10/month), Mem ($8/month), or Reflect ($10/month).
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <a href="https://myneutron.ai/?utm_source=aimemorylayer.com&utm_medium=referral&utm_campaign=emd-network" target="_blank" rel="noopener noreferrer">
                Try free plan first
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Pros and Cons</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-green-200 dark:border-green-900">
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  What myNeutron Does Better Than Competitors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {prosItems.map((pro, index) => (
                    <li key={index}>
                      <p className="font-semibold">{pro.title}</p>
                      <p className="text-sm text-muted-foreground">{pro.description}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2">
                  <X className="h-5 w-5" />
                  Where myNeutron Could Improve
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {consItems.map((con, index) => (
                    <li key={index}>
                      <p className="font-semibold">{con.title}</p>
                      <p className="text-sm text-muted-foreground">{con.description}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Should Use */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Who Should Use myNeutron?</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-6 border border-green-200 dark:border-green-900">
              <h3 className="font-semibold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
                <Check className="h-5 w-5" />
                Excellent Fit For:
              </h3>
              <ul className="space-y-4">
                {excellentFitFor.map((item, index) => (
                  <li key={index}>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    {item.link && (
                      <Link href={item.link.href} className="text-sm text-primary hover:underline">
                        {item.link.text} →
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <X className="h-5 w-5 text-destructive" />
                Not the Best Fit For:
              </h3>
              <ul className="space-y-4">
                {notBestFitFor.map((item, index) => (
                  <li key={index}>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">How myNeutron Compares</h2>
          <Link href="/tools" className="text-primary hover:underline font-medium mb-8 inline-block">
            Full comparison table →
          </Link>

          <div className="grid gap-6 md:grid-cols-2">
            {comparisons.map((comp, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>vs {comp.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-green-600">myNeutron wins:</span>
                    <p className="text-sm text-muted-foreground">{comp.myNeutronWins}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-blue-600">{comp.name} wins:</span>
                    <p className="text-sm text-muted-foreground">{comp.competitorWins}</p>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <span className="text-sm font-medium">Verdict:</span>
                    <p className="text-sm text-muted-foreground">{comp.verdict}</p>
                  </div>
                  <Link href={`/tools/${comp.slug}`} className="text-sm text-primary hover:underline inline-block">
                    Full comparison →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real User Workflows */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Real User Workflows</h2>

          <div className="space-y-8">
            {workflows.map((workflow, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <workflow.icon className="h-6 w-6 text-primary" />
                    {workflow.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-destructive/10 rounded-lg p-4">
                    <p className="font-medium text-destructive">Problem:</p>
                    <p className="text-muted-foreground">{workflow.problem}</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                    <p className="font-medium text-green-700 dark:text-green-400 mb-2">myNeutron Solution:</p>
                    <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                      {workflow.solution.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <p className="font-medium">
                    Time saved: <span className="text-primary">{workflow.timeSaved}</span>
                  </p>

                  <Link href={workflow.guideLink.href} className="text-primary hover:underline font-medium inline-block">
                    {workflow.guideLink.text} →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Getting Started with myNeutron</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gettingStartedSteps.map((step) => (
              <Card key={step.step}>
                <CardHeader className="pb-2">
                  <Badge className="w-fit mb-2">Step {step.step}</Badge>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              <strong>Total setup time:</strong> ~35 minutes to see if this changes your workflow
            </p>
            <Button asChild size="lg">
              <a href="https://myneutron.ai/?utm_source=aimemorylayer.com&utm_medium=referral&utm_campaign=emd-network" target="_blank" rel="noopener noreferrer">
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            <Link href="/guide/faq" className="text-primary hover:underline font-medium">
              More questions? Read the complete FAQ →
            </Link>
          </div>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Final Verdict</h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-lg font-semibold">Overall Rating:</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-6 w-6 ${
                        star <= 4
                          ? 'fill-primary text-primary'
                          : 'fill-primary/70 text-primary'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-2xl">4.7/5</span>
              </div>

              <div className="space-y-3">
                <p className="font-semibold">Scores:</p>
                {finalScores.map((score, index) => (
                  <div key={index} className="flex items-center justify-between bg-background rounded-lg p-3 border border-border">
                    <span>{score.category}</span>
                    <span className="font-semibold">
                      {score.score}
                      {score.note && <span className="text-sm text-muted-foreground ml-2">({score.note})</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-green-200 dark:border-green-900">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-green-700 dark:text-green-400">Who should try myNeutron:</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Anyone who uses AI tools for serious work (not just casual questions) and is tired of re-explaining context every time they open a new chat.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Who should wait:</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Teams needing collaboration (use Notion AI), or mobile-first users who capture mostly on phone (use Mem.ai until myNeutron&apos;s mobile apps launch).
                  </p>
                </CardContent>
              </Card>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <p className="font-semibold text-lg mb-2">The bottom line:</p>
                <p className="text-muted-foreground">
                  myNeutron is the best AI memory layer for cross-platform workflows. The free tier is generous enough to evaluate with real work. If you use multiple AI tools regularly, try this first.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="https://myneutron.ai/?utm_source=aimemorylayer.com&utm_medium=referral&utm_campaign=emd-network" target="_blank" rel="noopener noreferrer">
                Try myNeutron Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/tools">
                Compare Alternatives
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Related Resources</h2>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedResources.map((resource, index) => (
              <li key={index}>
                <Link
                  href={resource.href}
                  className="flex items-center gap-2 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                  <span>{resource.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Ready to Try myNeutron?"
        description="Start with the free tier and see if it fits your workflow."
        primaryCTA={{ text: "Compare All Tools", href: "/tools" }}
        secondaryCTA={{ text: "Read the Complete Guide", href: "/guide/what-is-ai-memory-layer" }}
      />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "SoftwareApplication",
              "name": "myNeutron",
              "applicationCategory": "ProductivityApplication",
              "operatingSystem": "Web, Chrome Extension",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.7",
              "bestRating": "5"
            },
            "author": {
              "@type": "Organization",
              "name": "AIMemoryHub"
            },
            "reviewBody": "myNeutron is the best AI memory layer for users who work across multiple AI tools. Its visual seed system and cross-platform compatibility make it stand out from competitors."
          })
        }}
      />
    </>
  );
}
