import type { Metadata } from 'next';
import { getUseCaseBySlug } from '@/data/useCases';
import { studentFAQs } from '@/data/faqs';
import { UseCasePage } from '@/components/sections/UseCasePage';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'AI Memory Layer for Students: Stop Losing Research & Sources (2025)',
  description: 'How students use AI memory layers to organize thesis research, save sources, and never lose context. Compare tools, workflows, and real examples for academic work.',
  keywords: ['AI memory for students', 'thesis organization AI', 'research organization tool', 'student knowledge base', 'academic research AI', 'literature review AI'],
};

export default function ForStudentsPage() {
  const useCase = getUseCaseBySlug('for-students');

  if (!useCase) {
    notFound();
  }

  return <UseCasePage useCase={useCase} faqs={studentFAQs} />;
}
