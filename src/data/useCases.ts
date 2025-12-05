export interface UseCase {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription?: string;
  problems: string[];
  solutions: string[];
  workflows: Workflow[];
  recommendedTools: RecommendedTool[];
  timeSaved: string;
  caseStudy?: CaseStudy;
  caseStudies?: CaseStudy[];
  gettingStarted?: GettingStartedSection;
  tryIt?: TryItSection;
  relatedResources?: RelatedResource[];
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

export interface GettingStartedStep {
  day: string;
  task: string;
}

export interface GettingStartedSection {
  week1: GettingStartedStep[];
  week2to4: string[];
  endOfPeriod: {
    title: string;
    items: string[];
  };
}

export interface RelatedResource {
  title: string;
  href: string;
}

export interface TryItSection {
  title: string;
  description: string;
  projectIdeas: string[];
  commitment: string[];
  callToAction: string;
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
    heroDescription: 'AI memory layers turn your scattered research into a searchable, organized knowledge base that grows with your academic work.',
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
          'When writing, paste relevant context into Claude for help',
          'Save important AI summaries as new items in your knowledge base'
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
          'Thesis_FINAL_AFTER_ADVISOR_COMMENTS.docx',
          'Can\'t remember which version has the good intro paragraph'
        ],
        newWay: [
          'Save each meaningful draft version as a seed',
          'Save advisor feedback as separate seeds',
          'Save key sections you want to keep',
          'Ask: "Show me all versions of my methodology section"',
          'Ask: "What feedback did my advisor give about the intro?"',
          'Paste relevant past work + advisor notes into Claude when revising',
          'Never lose good writing in version chaos'
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
          'Throughout semester: Save lecture slides, key readings, your notes after each class',
          'Two weeks before exam: Ask "What are the main concepts from Lectures 5-10?"',
          'Get a synthesis with links back to original notes',
          'Ask: "What did the professor emphasize in Lecture 8?"',
          'Get targeted review material',
          'Save AI\'s study guide as a new item',
          'Day before exam: Quick review of saved study materials'
        ],
        timeSaved: '~15 hours per exam'
      },
      {
        title: 'Group Projects',
        oldWay: [
          'Files in Google Drive no one names properly',
          'Half the research in one person\'s head',
          'Other half in WhatsApp group chat',
          'Third meeting in a row where someone asks "Wait, what did we decide about X?"'
        ],
        newWay: [
          'Shared knowledge base for the project',
          'Everyone saves their research to the same space',
          'Before meetings: Ask "What have we explored about X so far?"',
          'Get synthesis of all group members\' contributions',
          'Decisions and notes saved centrally',
          'No more "I thought you were doing that" confusion'
        ],
        timeSaved: 'Sanity saved: All of it'
      }
    ],
    recommendedTools: [
      {
        slug: 'myneutron',
        name: 'myNeutron',
        reason: 'Visual seed system makes browsing research easy. Free for up to 200 items. Works with ChatGPT, Claude, Gemini. Chrome extension = one-click save while researching.'
      },
      {
        slug: 'remnote',
        name: 'RemNote',
        reason: 'Built-in flashcard system (spaced repetition). Good for memorization-heavy subjects. Free for students.'
      },
      {
        slug: 'obsidian',
        name: 'Obsidian',
        reason: 'Completely free. 100% local storage (your notes stay on your computer). Infinitely customizable. Great markdown editor.'
      },
      {
        slug: 'notion-ai',
        name: 'Notion AI',
        reason: 'Beautiful databases for organizing courses, projects, reading lists. Good collaboration for group projects. AI features built in.'
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
    },
    caseStudies: [
      {
        title: 'PhD Candidate in Psychology',
        challenge: 'Managing 200+ papers for dissertation lit review',
        solution: [
          'Used myNeutron to upload all PDFs',
          'Tag by research area (automatic bundling)',
          'Ask comparative questions across subsets',
          'Save synthesis notes as new seeds'
        ],
        result: 'Cut lit review time from 3 months to 6 weeks. Advisor praised organization and depth of synthesis.'
      },
      {
        title: 'Undergrad Engineering Student',
        challenge: 'Group project with 4 team members, scattered research',
        solution: [
          'Shared myNeutron workspace (team feature in beta)',
          'Each member saved their research',
          'Used AI to synthesize before meetings',
          'Saved meeting decisions'
        ],
        result: 'Project finished 2 weeks early. Professor asked them to present methodology to future classes.'
      }
    ],
    gettingStarted: {
      week1: [
        { day: 'Day 1', task: 'Choose a tool - Start with myNeutron (free) if unsure. Install Chrome extension.' },
        { day: 'Day 2', task: 'Import existing research - Upload 5-10 key PDFs you\'re currently using. Save 3-5 important webpages/articles. Take one important ChatGPT conversation and save it.' },
        { day: 'Day 3', task: 'Create your first bundle - Name it after your current project (e.g., "Thesis Research," "Psych 301 Final"). All saved items should auto-group here.' },
        { day: 'Day 4', task: 'Ask your first question - "What are the main arguments across these sources?" or "Summarize the key findings from these papers"' },
        { day: 'Day 5', task: 'Use it for real work - Working on an assignment? Ask your memory system for relevant info. Need to draft something? Paste context into Claude.' }
      ],
      week2to4: [
        'Daily (5-10 min): Save anything useful you find while researching. After lectures: Drop in slides or key notes.',
        'Weekly (30 min): Review what you\'ve collected. Ask synthesis questions to create study materials. Save important AI answers.'
      ],
      endOfPeriod: {
        title: 'End of Semester: Reap the Rewards',
        items: [
          'Every source organized and searchable',
          'Synthesis notes AI helped you create',
          'Past decisions and conclusions saved',
          'Context that makes the next semester easier'
        ]
      }
    },
    tryIt: {
      title: 'Try It With Your Current Project',
      description: 'Don\'t test with dummy notes. Pick something real:',
      projectIdeas: [
        'Current essay or paper',
        'Upcoming exam',
        'Thesis research',
        'Group project'
      ],
      commitment: [
        'Save everything related to that project',
        'Ask questions when you get stuck',
        'Use it for one real assignment'
      ],
      callToAction: 'If it doesn\'t save you at least 3 hours in those 2 weeks, it\'s not for you. But if it does... you just found a tool that will save you hundreds of hours over your academic career.'
    },
    relatedResources: [
      { title: 'Complete Literature Review Guide with AI Memory', href: '/guide/literature-review' },
      { title: 'Thesis Organization Workflow', href: '/guide/thesis-organization' },
      { title: 'Study & Exam Prep with AI Memory', href: '/guide/exam-prep' },
      { title: 'Compare All Student-Friendly Tools', href: '/tools' },
      { title: 'How to Never Lose a Source Again', href: '/guide/never-lose-source' }
    ]
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
