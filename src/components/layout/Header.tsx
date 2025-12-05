'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Brain, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const navigation = [
  { name: 'Tools', href: '/tools' },
  { name: 'Guide', href: '/guide/what-is-ai-memory-layer' },
  { name: 'Blog', href: '/blog' },
];

const useCasesDropdown = [
  { name: 'For Students', href: '/for-students' },
  { name: 'For Developers', href: '/for-developers' },
  { name: 'For Writers', href: '/for-writers' },
  { name: 'For Professionals', href: '/for-professionals' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="font-semibold text-lg">AIMemoryHub</span>
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          <Link
            href="/tools"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Tools
          </Link>
          
          {/* Use Cases Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setUseCasesOpen(true)}
            onMouseLeave={() => setUseCasesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setUseCasesOpen(!useCasesOpen)}
            >
              Use Cases
              <ChevronDown className={`h-4 w-4 transition-transform ${useCasesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {useCasesOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-48 rounded-md border border-border bg-background shadow-lg ring-1 ring-black/5">
                  <div className="py-1">
                    {useCasesDropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <Link
            href="/guide/what-is-ai-memory-layer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Guide
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Blog
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          <ThemeToggle />
          <Button asChild>
            <Link href="/tools">Explore Tools</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                <Brain className="h-8 w-8 text-primary" />
                <span className="font-semibold text-lg">AIMemoryHub</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  <Link
                    href="/tools"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Tools
                  </Link>
                  
                  {/* Use Cases Section */}
                  <div className="pt-2">
                    <div className="-mx-3 px-3 py-2 text-sm font-semibold text-muted-foreground">
                      Use Cases
                    </div>
                    <div className="pl-3 space-y-1">
                      {useCasesDropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href="/guide/what-is-ai-memory-layer"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Guide
                  </Link>
                  <Link
                    href="/blog"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
                <div className="py-6">
                  <Button asChild className="w-full">
                    <Link href="/tools">Explore Tools</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
