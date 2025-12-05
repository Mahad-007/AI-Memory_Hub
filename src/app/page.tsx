import { Hero } from '@/components/sections/Hero';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { ToolsPreview } from '@/components/sections/ToolsPreview';
import { UseCasesGrid } from '@/components/sections/UseCasesGrid';
import { LearningSection } from '@/components/sections/LearningSection';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';
import { homepageFAQs } from '@/data/faqs';

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <ToolsPreview />
      <UseCasesGrid />
      <LearningSection />
      <BlogPreview />
      <FAQSection
        faqs={homepageFAQs}
        internalLink={{
          text: "More questions answered in our complete FAQ guide",
          href: "/guide/what-is-ai-memory-layer#faq"
        }}
      />
      <CTASection />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AI Memory Layer",
            "url": "https://aimemorylayer.com",
            "description": "Educational resource for AI memory systems and personal knowledge management",
            "publisher": {
              "@type": "Organization",
              "name": "AI Memory Layer"
            }
          })
        }}
      />
    </>
  );
}
