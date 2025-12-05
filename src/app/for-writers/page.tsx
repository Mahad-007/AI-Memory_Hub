import type { Metadata } from 'next';
import { getUseCaseBySlug } from '@/data/useCases';
import { homepageFAQs } from '@/data/faqs';
import { UseCasePage } from '@/components/sections/UseCasePage';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'AI Memory Layer for Writers & Creators: Never Lose Good Writing (2025)',
  description: 'How writers use AI memory layers to capture research, save drafts, and maintain consistency across long projects. Organize your creative work.',
  keywords: ['AI memory for writers', 'writing organization tool', 'author knowledge base', 'creative writing AI', 'research organization'],
};

export default function ForWritersPage() {
  const useCase = getUseCaseBySlug('for-writers');

  if (!useCase) {
    notFound();
  }

  return <UseCasePage useCase={useCase} faqs={homepageFAQs} />;
}
