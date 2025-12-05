export interface UseCase {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  heroTitle: string;
  heroSubtitle: string;
  problems: string[];
  solutions: string[];
  workflows: Workflow[];
  recommendedTools: RecommendedTool[];
  timeSaved: string;
  caseStudy?: CaseStudy;
}

export interface Workflow {
  title: string;
  oldWay: string[];
  newWay: string[];
  timeSaved: string;
}

export interface RecommendedTool {
  slug: string;
  name: string;
  reason: string;
}

export interface CaseStudy {
  title: string;
  challenge: string;
  solution: string[];
  result: string;
}

export const useCases: UseCase[] = [
  {
    slug: 'for-students',
    title: 'AI Memory Layer for Students',
    shortTitle: 'For Students',
    description: 'Stop losing research sources and thesis notes. Build a searchable library that grows with your academic work.',
    icon: 'GraduationCap',
    heroTitle: 'AI Memory Layer for Students: Your Research, Always Accessible',
    heroSubtitle: 'Stop losing sources in random folders. Stop re-reading the same papers. Stop explaining your thesis topic from scratch every time you open ChatGPT.',
    problems: [
      '47 PDFs saved as "paper1.pdf," "paper2.pdf," "important_study.pdf"',
      'Screenshots of key findings scattered in your camera roll',
      'Notes in Apple Notes, Google Docs, and random Word files',
      'Bookmarks you\'ll "definitely read later" (narrator: you won\'t)',
      'Important ChatGPT conversations that helped you understand concepts - now lost'
    ],
    solutions: [
      'All your sources live in one place with visual organization',
      'Ask questions across everything: "What are the main arguments about X?"',
      'AI tools remember your research context - no more re-explaining',
      'Your knowledge compounds over time as you add more sources'
    ],
    workflows: [
      {
        title: 'Literature Review',
        oldWay: [
          'Download 30 papers',
          'Open each one, read, take notes in separate document',
          'Forget what Paper #17 said when writing section 3',
          'Search through 30 PDFs again',
          'Give up and just cite the abstract'
        ],
        newWay: [
          'Save all 30 papers to your memory system',
          'Ask: "What are the main themes across these papers?"',
          'Get an AI summary with citations to specific papers',
          'Ask follow-up: "Which papers disagree with approach X?"',
          'Save important AI summaries as new items',
          'When writing, paste relevant context into Claude for help'
        ],
        timeSaved: '~20 hours on lit review alone'
      },
      {
        title: 'Thesis Writing',
        oldWay: [
          'Thesis_draft_v1.docx',
          'Thesis_draft_v2_with_edits.docx',
          'Thesis_FINAL.docx',
          'Thesis_FINAL_FINAL.docx',
          'Can\'t remember which version has the good intro'
        ],
        newWay: [
          'Save each meaningful draft version as a seed',
          'Save advisor feedback as separate seeds',
          'Ask: "Show me all versions of my methodology section"',
          'Ask: "What feedback did my advisor give about the intro?"',
          'Paste relevant past work into Claude when revising'
        ],
        timeSaved: 'Infinite stress saved'
      },
      {
        title: 'Exam Prep',
        oldWay: [
          'Notes scattered across 12 lectures',
          'Textbook somewhere in Downloads',
          'Study guide from classmate in email',
          'Try to remember everything from scratch'
        ],
        newWay: [
          'Save lecture slides, key readings, notes after each class',
          'Two weeks before exam: "What are the main concepts?"',
          'Get a synthesis with links back to original notes',
          'Save AI\'s study guide as a new item',
          'Day before exam: Quick review of saved materials'
        ],
        timeSaved: '~15 hours per exam'
      }
    ],
    recommendedTools: [
      {
        slug: 'myneutron',
        name: 'myNeutron',
        reason: 'Visual seed system, free for 200 items, works with ChatGPT/Claude'
      },
      {
        slug: 'remnote',
        name: 'RemNote',
        reason: 'Built-in flashcards for memorization-heavy subjects'
      },
      {
        slug: 'obsidian',
        name: 'Obsidian',
        reason: 'Free, local storage, great for tech-savvy students'
      },
      {
        slug: 'notion-ai',
        name: 'Notion AI',
        reason: 'Good for structured organization and group projects'
      }
    ],
    timeSaved: '20+ hours per semester',
    caseStudy: {
      title: 'PhD Candidate in Psychology',
      challenge: 'Managing 200+ papers for dissertation lit review',
      solution: [
        'Uploaded all PDFs to myNeutron',
        'Tagged by research area (automatic bundling)',
        'Asked comparative questions across subsets',
        'Saved synthesis notes as new seeds'
      ],
      result: 'Cut lit review time from 3 months to 6 weeks. Advisor praised organization and depth of synthesis.'
    }
  },
  {
    slug: 'for-developers',
    title: 'AI Memory Layer for Developers',
    shortTitle: 'For Developers',
    description: 'Keep architectural decisions, debugging notes, and code patterns accessible. Integrate with Cursor and Claude Code via MCP.',
    icon: 'Code',
    heroTitle: 'AI Memory Layer for Developers: Your Codebase Knowledge, Always Accessible',
    heroSubtitle: 'Stop digging through old PRs for architectural decisions. Stop re-solving problems you\'ve already fixed. Keep your coding knowledge at your fingertips.',
    problems: [
      'Architectural decisions scattered across old PRs, docs, and Slack threads',
      'Debugging notes lost in random files or forgotten completely',
      'Re-solving the same problems you\'ve already fixed',
      'New team members asking "why was this built this way?" with no good answer',
      'Context about code decisions lost when you switch projects'
    ],
    solutions: [
      'Save architectural decision documents and debugging notes',
      'MCP integration brings memory directly into Cursor/Claude Code',
      'Search past solutions before solving problems again',
      'Maintain codebase knowledge over time, even across teams'
    ],
    workflows: [
      {
        title: 'Codebase Understanding',
        oldWay: [
          'Large codebase with decisions scattered across PRs',
          'Docs outdated or missing',
          'Slack threads long deleted',
          'Spend hours doing "context archaeology"'
        ],
        newWay: [
          'Save key architectural decision documents',
          'Save debugging notes when solving complex issues',
          'Connect via MCP to Cursor',
          'Cursor automatically accesses relevant past decisions',
          'Never repeat solved problems'
        ],
        timeSaved: '~5-10 hours per sprint'
      },
      {
        title: 'Debugging Sessions',
        oldWay: [
          'Hit a weird bug',
          'Spend 4 hours figuring it out',
          'Fix it, move on',
          '3 months later: same bug, no memory of solution'
        ],
        newWay: [
          'Hit a bug, search memory: "Have I seen this before?"',
          'Find your past debugging notes with the solution',
          'After solving new bugs, save the solution',
          'Build a personal debugging knowledge base'
        ],
        timeSaved: '~2 hours per debugging session'
      }
    ],
    recommendedTools: [
      {
        slug: 'myneutron',
        name: 'myNeutron',
        reason: 'Best MCP integration, works with Cursor and Claude Code'
      },
      {
        slug: 'obsidian',
        name: 'Obsidian',
        reason: 'Local-first, customizable, great for technical docs'
      }
    ],
    timeSaved: '5-10 hours per sprint',
    caseStudy: {
      title: 'Senior Backend Developer',
      challenge: 'New project with complex legacy codebase and no documentation',
      solution: [
        'Documented architectural decisions as discovered',
        'Saved debugging sessions with solutions',
        'Connected myNeutron to Cursor via MCP',
        'AI coding assistant could reference all context'
      ],
      result: 'Onboarded to codebase in 2 weeks instead of usual 6. Created living documentation for future developers.'
    }
  },
  {
    slug: 'for-writers',
    title: 'AI Memory Layer for Writers & Creators',
    shortTitle: 'For Writers',
    description: 'Capture research, save AI-generated drafts, organize project materials. Return to any piece with full context.',
    icon: 'PenTool',
    heroTitle: 'AI Memory Layer for Writers: Your Creative Work, Always Accessible',
    heroSubtitle: 'Never lose good writing in version chaos. Keep research, drafts, and inspiration organized and retrievable.',
    problems: [
      'Research scattered across browser tabs, notes apps, and random files',
      'Good paragraphs lost in old document versions',
      'AI-generated content you wanted to keep but can\'t find',
      'Character details or facts inconsistent across a long project',
      'Returning to a project after weeks with no context'
    ],
    solutions: [
      'Save research and inspiration as you find it',
      'Keep track of character details and plot points for fiction',
      'Maintain voice consistency across non-fiction pieces',
      'Never lose good writing - everything searchable'
    ],
    workflows: [
      {
        title: 'Long-Form Writing',
        oldWay: [
          'Research in 20 browser tabs',
          'Notes in 3 different apps',
          'Drafts across multiple documents',
          'Can\'t remember what you already wrote about X'
        ],
        newWay: [
          'Save research as you find it with one click',
          'Ask: "What have I already written about X?"',
          'Pull relevant context into writing sessions',
          'Maintain consistency across long projects'
        ],
        timeSaved: '~5 hours per major piece'
      },
      {
        title: 'Fiction Writing',
        oldWay: [
          'Character details in one document',
          'Plot notes in another',
          'World-building scattered everywhere',
          'Inconsistencies creep in over time'
        ],
        newWay: [
          'Save character sheets, plot outlines, world details',
          'Ask: "What color are Character X\'s eyes?"',
          'Check consistency: "When did Event Y happen?"',
          'AI helps maintain coherent fictional world'
        ],
        timeSaved: 'Consistency maintained across 100k+ words'
      }
    ],
    recommendedTools: [
      {
        slug: 'myneutron',
        name: 'myNeutron',
        reason: 'Visual organization, cross-AI support for research and drafting'
      },
      {
        slug: 'reflect',
        name: 'Reflect',
        reason: 'Daily notes workflow, great for journaling and idea capture'
      },
      {
        slug: 'obsidian',
        name: 'Obsidian',
        reason: 'Markdown-based, great for long-form writing'
      }
    ],
    timeSaved: '5+ hours per major piece'
  },
  {
    slug: 'for-professionals',
    title: 'AI Memory Layer for Professionals',
    shortTitle: 'For Professionals',
    description: 'Maintain client context, save meeting notes, keep project history accessible. Never walk into a call unprepared.',
    icon: 'Briefcase',
    heroTitle: 'AI Memory Layer for Professionals: Client Context, Always Accessible',
    heroSubtitle: 'Stop context switching between clients. Stop forgetting details from last conversation. Walk into every call fully prepared.',
    problems: [
      'Context scattered across emails, Slack, Google Docs for multiple clients',
      'Walking into calls unprepared because you forgot what was discussed',
      'Client details mixed up across different projects',
      'Important decisions made in meetings but notes lost',
      'Hours spent searching for "that document from last month"'
    ],
    solutions: [
      'Save notes after each client call to a central system',
      'Separate memory spaces per client or project',
      'Quick review before meetings: "What did we discuss last time?"',
      'Maintain relationships without dropped threads'
    ],
    workflows: [
      {
        title: 'Multi-Client Consulting',
        oldWay: [
          'Context scattered across emails, Slack, Google Docs',
          'Walking into calls unprepared',
          'Third meeting asking "Wait, what did we decide about X?"',
          '30 minutes prep per call'
        ],
        newWay: [
          'After each call, save notes as seed',
          'Capture relevant emails and documents',
          'Before meeting: "What did we discuss with Client X?"',
          'Review AI summary + linked sources',
          'Walk into call fully prepared'
        ],
        timeSaved: '~30 minutes prep per meeting'
      },
      {
        title: 'Project Management',
        oldWay: [
          'Decisions made in meetings vanish',
          'No one remembers why X was chosen over Y',
          'Stakeholder asks question you answered 3 months ago',
          'Scramble to find old documentation'
        ],
        newWay: [
          'Document decisions as they happen',
          'Save meeting notes and rationale',
          'Search: "Why did we choose approach X?"',
          'Instant answers with citations'
        ],
        timeSaved: '~10 hours per month'
      }
    ],
    recommendedTools: [
      {
        slug: 'myneutron',
        name: 'myNeutron',
        reason: 'Visual bundles per client, cross-AI for prep and communication'
      },
      {
        slug: 'notion-ai',
        name: 'Notion AI',
        reason: 'Great for team collaboration and databases'
      }
    ],
    timeSaved: '10+ hours per month',
    caseStudy: {
      title: 'Management Consultant',
      challenge: 'Managing 5 active client engagements with context scattered everywhere',
      solution: [
        'Created separate bundles per client in myNeutron',
        'Saved all meeting notes and key decisions',
        'Quick review before each call',
        'Pasted relevant context into Claude for prep'
      ],
      result: 'Zero "what did we discuss?" moments. Clients commented on how prepared consultant always was.'
    }
  }
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find(uc => uc.slug === slug);
}

export function getUseCasePreview() {
  return useCases.map(uc => ({
    slug: uc.slug,
    title: uc.shortTitle,
    description: uc.description,
    icon: uc.icon
  }));
}
