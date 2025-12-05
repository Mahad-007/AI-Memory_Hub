import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { FAQ } from '@/data/faqs';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  internalLink?: {
    text: string;
    href: string;
  };
}

export function FAQSection({ title = 'Frequently Asked Questions', subtitle, faqs, internalLink }: FAQSectionProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>

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

        {internalLink && (
          <div className="mt-8 text-center">
            <Link
              href={internalLink.href}
              className="text-primary hover:underline font-medium"
            >
              {internalLink.text} →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
