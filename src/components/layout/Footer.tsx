import Link from 'next/link';
import { Brain } from 'lucide-react';

const footerLinks = {
  learn: [
    { name: 'What Is AI Memory?', href: '/guide/what-is-ai-memory-layer' },
    { name: 'How It Works', href: '/guide/what-is-ai-memory-layer#how-it-works' },
    { name: 'Building Your Own', href: '/for-developers' },
    { name: 'All Guides', href: '/guide/what-is-ai-memory-layer' },
  ],
  tools: [
    { name: 'Explore All Tools', href: '/tools' },
    { name: 'myNeutron', href: '/tools/myneutron' },
    { name: 'Tool Comparisons', href: '/tools' },
    { name: 'Free vs Paid', href: '/tools' },
  ],
  useCases: [
    { name: 'For Students', href: '/for-students' },
    { name: 'For Developers', href: '/for-developers' },
    { name: 'For Writers', href: '/for-writers' },
    { name: 'For Professionals', href: '/for-professionals' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/blog' },
    { name: 'Research', href: '/blog' },
    { name: 'Downloads', href: '/tools' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="font-semibold text-lg">AI Memory Layer</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Educational resource for AI memory systems and personal knowledge management.
              Stop re-explaining yourself to AI tools.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Learn</h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.learn.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground">Tools</h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.tools.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Use Cases</h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.useCases.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground">Resources</h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} AI Memory Layer. Educational resource about AI memory systems.
          </p>
        </div>
      </div>
    </footer>
  );
}
