import type { Metadata } from 'next';
import { getUseCaseBySlug } from '@/data/useCases';
import { homepageFAQs } from '@/data/faqs';
import { UseCasePage } from '@/components/sections/UseCasePage';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'AIMemoryHub for Professionals: Client Context & Meeting Notes (2025)',
  description: 'How consultants and professionals use AI memory layers to maintain client context, save meeting notes, and never walk into a call unprepared.',
  keywords: ['AI memory for professionals', 'client management AI', 'consultant knowledge base', 'meeting notes AI', 'professional context management'],
};

export default function ForProfessionalsPage() {
  const useCase = getUseCaseBySlug('for-professionals');

  if (!useCase) {
    notFound();
  }

  return <UseCasePage useCase={useCase} faqs={homepageFAQs} />;
}
