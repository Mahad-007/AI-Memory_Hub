import type { Metadata } from 'next';
import { getUseCaseBySlug } from '@/data/useCases';
import { developerFAQs } from '@/data/faqs';
import { UseCasePage } from '@/components/sections/UseCasePage';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'AIMemoryHub for Developers: MCP Integration & Codebase Knowledge (2025)',
  description: 'How developers use AI memory layers with MCP integration for Cursor, Claude Code, and VS Code. Keep architectural decisions and debugging notes accessible.',
  keywords: ['AI memory for developers', 'MCP integration', 'developer knowledge base', 'Cursor memory', 'Claude Code memory', 'codebase documentation'],
};

export default function ForDevelopersPage() {
  const useCase = getUseCaseBySlug('for-developers');

  if (!useCase) {
    notFound();
  }

  return <UseCasePage useCase={useCase} faqs={developerFAQs} />;
}
