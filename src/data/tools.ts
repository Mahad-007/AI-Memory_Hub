export interface Tool {
  slug: string;
  name: string;
  icon: string;
  favicon: string;
  tagline: string;
  description: string;
  pricing: {
    free?: string;
    paid?: string;
    note?: string;
  };
  crossAI: 'full' | 'limited' | 'none';
  crossAIDetails: string;
  bestFor: string[];
  standoutFeature: string;
  features: string[];
  pros: string[];
  cons: string[];
  hasDetailedReview: boolean;
  isFeatured: boolean;
  rating?: number;
  mobile: boolean;
  mcp: boolean;
  localStorage: boolean;
  team: boolean;
  website: string;
}

export const tools: Tool[] = [
  {
    slug: 'myneutron',
    name: 'myNeutron',
    icon: 'Atom',
    favicon: 'https://www.google.com/s2/favicons?domain=myneutron.ai&sz=64',
    tagline: 'Visual knowledge management with cross-AI memory layer',
    description: 'myNeutron is a visual AI knowledge base that captures pages, files, notes, and important AI conversations, then makes them instantly retrievable across all your AI tools. It features a unique "seed" card system for visual organization and MCP integration for developers.',
    pricing: {
      free: 'Free (200 items)',
      paid: 'Pro $99/year',
      note: 'About $8.25/month for unlimited'
    },
    crossAI: 'full',
    crossAIDetails: 'ChatGPT, Claude, Gemini, Cursor, Claude Code',
    bestFor: ['Students', 'Developers', 'Knowledge workers', 'Researchers'],
    standoutFeature: 'Visual seed cards + MCP integration',
    features: [
      'Works with ChatGPT, Claude, Gemini, Cursor, Claude Code',
      'Visual "seed" system for easy browsing',
      'One-click capture via Chrome extension',
      'Auto-organization into bundles',
      'MCP server for developer workflows',
      'No vendor lock-in (export anytime)',
      'AI assistant that reads your knowledge',
      'Cross-AI memory injection'
    ],
    pros: [
      'Best cross-AI compatibility',
      'Visual organization with seed cards',
      'No learning curve - works intuitively',
      'Generous free tier (200 items)',
      'Developer-friendly with MCP'
    ],
    cons: [
      'No mobile apps yet (coming soon)',
      'Team features not ready yet',
      'Newer tool = smaller community',
      'Bundle auto-organization sometimes misses'
    ],
    hasDetailedReview: true,
    isFeatured: true,
    rating: 4.7,
    mobile: false,
    mcp: true,
    localStorage: false,
    team: false,
    website: 'https://myneutron.ai/?utm_source=aimemorylayer.com&utm_medium=referral&utm_campaign=emd-network'
  },
  {
    slug: 'mem-ai',
    name: 'Mem.ai',
    icon: 'Brain',
    favicon: 'https://www.google.com/s2/favicons?domain=mem.ai&sz=64',
    tagline: 'Mobile-first AI memory with smart auto-tagging',
    description: 'Mem.ai is a mobile-first AI memory tool that excels at quick capture and automatic organization. It uses AI to auto-tag and organize your notes without manual effort.',
    pricing: {
      paid: '$8/month',
      note: 'Free trial available'
    },
    crossAI: 'limited',
    crossAIDetails: 'Mostly standalone with limited integrations',
    bestFor: ['Quick capture', 'Mobile users', 'Note-takers'],
    standoutFeature: 'AI-powered automatic organization',
    features: [
      'Best mobile experience (iOS/Android)',
      'Fast, frictionless capture',
      'AI auto-organization and tagging',
      'Clean, minimal interface',
      'Smart search'
    ],
    pros: [
      'Best mobile experience',
      'Truly frictionless capture',
      'AI auto-organization works well',
      'Clean, minimal interface'
    ],
    cons: [
      'Limited cross-AI support',
      'Search could be better (keyword-based)',
      'No MCP or developer features',
      'Mostly lives in its own ecosystem'
    ],
    hasDetailedReview: true,
    isFeatured: false,
    rating: 3.8,
    mobile: true,
    mcp: false,
    localStorage: false,
    team: false,
    website: 'https://mem.ai'
  },
  {
    slug: 'reflect',
    name: 'Reflect Notes',
    icon: 'BookOpen',
    favicon: 'https://www.google.com/s2/favicons?domain=reflect.app&sz=64',
    tagline: 'Networked thinking with daily notes and backlinks',
    description: 'Reflect Notes is a beautiful networked note-taking app focused on daily notes and backlinks. It features end-to-end encryption and a focus on journal-style workflows.',
    pricing: {
      paid: '$10/month'
    },
    crossAI: 'none',
    crossAIDetails: 'Standalone app',
    bestFor: ['Writers', 'Daily journaling', 'Meeting notes'],
    standoutFeature: 'Networked graph view',
    features: [
      'Beautiful interface',
      'Daily notes workflow',
      'Backlinking system',
      'End-to-end encrypted',
      'Graph view for connections'
    ],
    pros: [
      'Beautiful interface',
      'Great for daily notes workflow',
      'Backlinking works well',
      'End-to-end encrypted'
    ],
    cons: [
      'No cross-AI support',
      'Expensive for what it offers',
      'Limited AI features',
      'Standalone only'
    ],
    hasDetailedReview: true,
    isFeatured: false,
    rating: 3.1,
    mobile: true,
    mcp: false,
    localStorage: false,
    team: false,
    website: 'https://reflect.app'
  },
  {
    slug: 'obsidian',
    name: 'Obsidian + AI Plugins',
    icon: 'Gem',
    favicon: 'https://www.google.com/s2/favicons?domain=obsidian.md&sz=64',
    tagline: 'Fully customizable, local-first knowledge base',
    description: 'Obsidian is a powerful local-first note-taking app that stores everything on your computer. With community plugins, you can add AI features, but it requires more setup than alternatives.',
    pricing: {
      free: 'Free (core)',
      note: 'Plugins and sync may have costs'
    },
    crossAI: 'limited',
    crossAIDetails: 'Via community plugins',
    bestFor: ['Developers', 'Power users', 'Customization lovers', 'Privacy-conscious'],
    standoutFeature: '100% local storage, infinite extensibility',
    features: [
      'Completely free and open source',
      '100% local storage',
      'Infinitely customizable via plugins',
      'Powerful linking system',
      'Graph view',
      'Markdown-based'
    ],
    pros: [
      'Completely free',
      '100% local storage (privacy)',
      'Infinitely customizable',
      'Powerful linking system'
    ],
    cons: [
      'Steep learning curve',
      'AI features feel hacky (community plugins)',
      'Cross-AI requires manual setup',
      'Time investment (10-20 hours to set up well)'
    ],
    hasDetailedReview: true,
    isFeatured: false,
    rating: 3.6,
    mobile: true,
    mcp: false,
    localStorage: true,
    team: false,
    website: 'https://obsidian.md'
  },
  {
    slug: 'notion-ai',
    name: 'Notion AI',
    icon: 'LayoutGrid',
    favicon: 'https://www.google.com/s2/favicons?domain=notion.com&sz=64',
    tagline: 'Workspace with built-in AI assistance',
    description: 'Notion is an all-in-one workspace with databases, docs, and wikis. Notion AI adds AI features on top, but they feel somewhat bolted-on rather than core to the product.',
    pricing: {
      paid: '$10/user/month',
      note: 'AI features require additional subscription'
    },
    crossAI: 'none',
    crossAIDetails: 'Notion-only',
    bestFor: ['Teams', 'Structured databases', 'Project management'],
    standoutFeature: 'Collaborative workspace + AI',
    features: [
      'Great for teams',
      'Powerful databases',
      'AI writing assistance',
      'Huge ecosystem of templates',
      'Many integrations'
    ],
    pros: [
      'Great for teams',
      'Powerful databases',
      'AI features improving',
      'Huge ecosystem'
    ],
    cons: [
      'AI feels bolted-on',
      'No cross-AI memory',
      'Can be overwhelming',
      'Search is hit-or-miss'
    ],
    hasDetailedReview: true,
    isFeatured: false,
    rating: 3.2,
    mobile: true,
    mcp: false,
    localStorage: false,
    team: true,
    website: 'https://www.notion.com'
  },
  {
    slug: 'elephas',
    name: 'Elephas',
    icon: 'Laptop',
    favicon: 'https://www.google.com/s2/favicons?domain=elephas.app&sz=64',
    tagline: 'Mac-native AI assistant with personal knowledge base',
    description: 'Elephas is a Mac-native AI assistant that works across all your Mac apps. It creates a personal knowledge base from your content and provides AI assistance system-wide.',
    pricing: {
      paid: '$4.99/month'
    },
    crossAI: 'limited',
    crossAIDetails: 'Mac apps only',
    bestFor: ['Mac users', 'System-wide AI'],
    standoutFeature: 'Works across all Mac apps',
    features: [
      'Mac-native experience',
      'System-wide AI assistant',
      'Personal knowledge base',
      'Works in any app',
      'Affordable pricing'
    ],
    pros: [
      'Mac-native experience',
      'System-wide integration',
      'Affordable'
    ],
    cons: [
      'Mac only',
      'Limited cross-AI',
      'No mobile',
      'Smaller ecosystem'
    ],
    hasDetailedReview: true,
    isFeatured: false,
    mobile: false,
    mcp: false,
    localStorage: true,
    team: false,
    website: 'https://elephas.app'
  },
  {
    slug: 'rewind',
    name: 'Rewind',
    icon: 'RotateCcw',
    favicon: 'https://www.google.com/s2/favicons?domain=rewind.ai&sz=64',
    tagline: 'Automatic life recorder with AI search',
    description: 'Rewind records everything on your screen and makes it searchable with AI. It\'s like having perfect memory of everything you\'ve seen on your computer.',
    pricing: {
      paid: '$20/month'
    },
    crossAI: 'limited',
    crossAIDetails: 'Screen recording focus',
    bestFor: ['People who forget where they saw things', 'Research recovery'],
    standoutFeature: 'Records everything on your screen',
    features: [
      'Captures literally everything',
      'Great AI search',
      'Local storage only',
      'Find things from weeks ago'
    ],
    pros: [
      'Never lose anything',
      'Great search',
      'Local storage (privacy)'
    ],
    cons: [
      'Expensive ($20/month)',
      'Mac-only',
      'Battery drain',
      'Not designed for AI workflows'
    ],
    hasDetailedReview: true,
    isFeatured: false,
    mobile: false,
    mcp: false,
    localStorage: true,
    team: false,
    website: 'https://rewind.ai'
  },
  {
    slug: 'saner-ai',
    name: 'Saner.AI',
    icon: 'FileSearch',
    favicon: 'https://www.google.com/s2/favicons?domain=saner.ai&sz=64',
    tagline: 'Personal AI assistant with document understanding',
    description: 'Saner.AI is a personal AI assistant focused on deep document understanding. It excels at analyzing and working with your documents.',
    pricing: {
      free: 'Free beta',
      note: 'Pricing TBA'
    },
    crossAI: 'limited',
    crossAIDetails: 'Standalone with some integrations',
    bestFor: ['Document-heavy workflows', 'Research'],
    standoutFeature: 'Deep document analysis',
    features: [
      'Deep document analysis',
      'AI-powered understanding',
      'Currently in beta',
      'Integrations planned'
    ],
    pros: [
      'Strong document analysis',
      'Free during beta',
      'Promising features'
    ],
    cons: [
      'Still in beta',
      'Limited cross-AI',
      'Pricing unclear'
    ],
    hasDetailedReview: true,
    isFeatured: false,
    mobile: false,
    mcp: false,
    localStorage: false,
    team: false,
    website: 'https://saner.ai'
  },
  {
    slug: 'heptabase',
    name: 'Heptabase',
    icon: 'Layers',
    favicon: 'https://www.google.com/s2/favicons?domain=heptabase.com&sz=64',
    tagline: 'Visual card-based knowledge system',
    description: 'Heptabase uses a whiteboard-style approach to knowledge management. You organize information as visual cards on canvases, great for visual thinkers.',
    pricing: {
      paid: '$8.99/month'
    },
    crossAI: 'none',
    crossAIDetails: 'Standalone',
    bestFor: ['Visual learners', 'Researchers', 'Creative thinking'],
    standoutFeature: 'Whiteboard-style knowledge mapping',
    features: [
      'Visual card-based system',
      'Whiteboard canvases',
      'Great for visual thinking',
      'Linking between cards'
    ],
    pros: [
      'Great for visual thinkers',
      'Unique approach',
      'Good for research'
    ],
    cons: [
      'No cross-AI support',
      'Standalone only',
      'Learning curve for approach'
    ],
    hasDetailedReview: true,
    isFeatured: false,
    mobile: true,
    mcp: false,
    localStorage: false,
    team: false,
    website: 'https://heptabase.com'
  },
  {
    slug: 'capacities',
    name: 'Capacities',
    icon: 'Database',
    favicon: 'https://www.google.com/s2/favicons?domain=capacities.io&sz=64',
    tagline: 'Object-based knowledge management',
    description: 'Capacities uses an object-based approach where different types of content (books, people, projects) are treated as distinct object types with their own properties.',
    pricing: {
      free: 'Free tier available',
      paid: 'Pro $10/month'
    },
    crossAI: 'none',
    crossAIDetails: 'Standalone',
    bestFor: ['Structured note-takers', 'CRM-like workflows'],
    standoutFeature: 'Database-like objects for different content types',
    features: [
      'Object-based system',
      'Different content types',
      'Structured organization',
      'Clean interface'
    ],
    pros: [
      'Unique object approach',
      'Good for structured data',
      'Free tier available'
    ],
    cons: [
      'No cross-AI support',
      'Standalone only',
      'Learning curve'
    ],
    hasDetailedReview: true,
    isFeatured: false,
    mobile: true,
    mcp: false,
    localStorage: false,
    team: false,
    website: 'https://capacities.io'
  },
  {
    slug: 'tana',
    name: 'Tana',
    icon: 'Hash',
    favicon: 'https://www.google.com/s2/favicons?domain=tana.inc&sz=64',
    tagline: 'All-in-one workspace with AI supertags',
    description: 'Tana is a powerful all-in-one workspace that uses "supertags" to create flexible data models. It\'s highly customizable but has a significant learning curve.',
    pricing: {
      free: 'Free tier',
      paid: 'Pro $12/month'
    },
    crossAI: 'limited',
    crossAIDetails: 'Limited AI integrations',
    bestFor: ['Power users', 'Complex workflows', 'Data modeling'],
    standoutFeature: 'Supertags system for flexible data models',
    features: [
      'Supertags system',
      'Highly flexible',
      'AI features',
      'Complex data modeling'
    ],
    pros: [
      'Extremely flexible',
      'Powerful for power users',
      'Supertags are unique'
    ],
    cons: [
      'Steep learning curve',
      'Limited cross-AI',
      'Can be overwhelming'
    ],
    hasDetailedReview: true,
    isFeatured: false,
    mobile: false,
    mcp: false,
    localStorage: false,
    team: false,
    website: 'https://tana.inc'
  },
  {
    slug: 'roam-research',
    name: 'Roam Research',
    icon: 'Network',
    favicon: 'https://www.google.com/s2/favicons?domain=roamresearch.com&sz=64',
    tagline: 'The original networked note-taking app',
    description: 'Roam Research pioneered the bidirectional linking approach that many tools now copy. It\'s still powerful but feels dated compared to newer alternatives.',
    pricing: {
      paid: '$15/month'
    },
    crossAI: 'none',
    crossAIDetails: 'Standalone (plugins available)',
    bestFor: ['Academics', 'Researchers', 'Networked thinking'],
    standoutFeature: 'Bidirectional linking pioneer',
    features: [
      'Bidirectional linking',
      'Block-based editing',
      'Daily notes',
      'Graph view',
      'Plugin ecosystem'
    ],
    pros: [
      'Pioneer of networked notes',
      'Powerful linking',
      'Active community'
    ],
    cons: [
      'Expensive',
      'Dated interface',
      'No native cross-AI',
      'Slower development'
    ],
    hasDetailedReview: true,
    isFeatured: false,
    mobile: false,
    mcp: false,
    localStorage: false,
    team: false,
    website: 'https://roamresearch.com'
  },
  {
    slug: 'logseq',
    name: 'Logseq',
    icon: 'GitBranch',
    favicon: 'https://www.google.com/s2/favicons?domain=logseq.com&sz=64',
    tagline: 'Open-source alternative to Roam',
    description: 'Logseq is a free, open-source alternative to Roam Research. It offers similar features with local-first storage and a growing plugin ecosystem.',
    pricing: {
      free: 'Free (open source)'
    },
    crossAI: 'limited',
    crossAIDetails: 'Via plugins',
    bestFor: ['Privacy-conscious users', 'Developers', 'Open-source enthusiasts'],
    standoutFeature: 'Local-first, fully free',
    features: [
      'Free and open source',
      'Local-first storage',
      'Bidirectional linking',
      'Plugin ecosystem',
      'Graph view'
    ],
    pros: [
      'Completely free',
      'Open source',
      'Local storage',
      'Active development'
    ],
    cons: [
      'Limited AI features',
      'Cross-AI via plugins only',
      'Some stability issues'
    ],
    hasDetailedReview: true,
    isFeatured: false,
    mobile: false,
    mcp: false,
    localStorage: true,
    team: false,
    website: 'https://logseq.com'
  },
  {
    slug: 'remnote',
    name: 'RemNote',
    icon: 'GraduationCap',
    favicon: 'https://www.google.com/s2/favicons?domain=remnote.com&sz=64',
    tagline: 'Flashcard-integrated knowledge base',
    description: 'RemNote combines note-taking with built-in spaced repetition flashcards. It\'s ideal for students who need to memorize information.',
    pricing: {
      free: 'Free tier',
      paid: 'Pro $6/month'
    },
    crossAI: 'none',
    crossAIDetails: 'Standalone',
    bestFor: ['Students studying for exams', 'Medical students', 'Language learning'],
    standoutFeature: 'Built-in spaced repetition',
    features: [
      'Built-in flashcards',
      'Spaced repetition',
      'Note-taking + studying combined',
      'Good for memorization'
    ],
    pros: [
      'Great for studying',
      'Built-in flashcards',
      'Affordable',
      'Good for students'
    ],
    cons: [
      'No cross-AI support',
      'Standalone only',
      'Less flexible for other use cases'
    ],
    hasDetailedReview: true,
    isFeatured: false,
    mobile: true,
    mcp: false,
    localStorage: false,
    team: false,
    website: 'https://remnote.com'
  },
  {
    slug: 'craft',
    name: 'Craft',
    icon: 'PenTool',
    favicon: 'https://www.google.com/s2/favicons?domain=craft.do&sz=64',
    tagline: 'Beautiful document editor with AI',
    description: 'Craft is a beautifully designed document editor with a native Mac/iOS experience. It includes AI features for writing assistance.',
    pricing: {
      free: 'Free tier',
      paid: 'Pro $10/month'
    },
    crossAI: 'none',
    crossAIDetails: 'Standalone',
    bestFor: ['Writers', 'Beautiful document creation', 'Apple users'],
    standoutFeature: 'Native iOS/Mac design',
    features: [
      'Beautiful native design',
      'Great on Apple devices',
      'AI writing assistance',
      'Document sharing'
    ],
    pros: [
      'Beautiful design',
      'Great Apple integration',
      'Good for documents'
    ],
    cons: [
      'No cross-AI support',
      'Standalone only',
      'Best on Apple devices'
    ],
    hasDetailedReview: true,
    isFeatured: false,
    mobile: true,
    mcp: false,
    localStorage: false,
    team: false,
    website: 'https://craft.do'
  }
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug);
}

export function getFeaturedTools(): Tool[] {
  return tools.filter(tool => tool.isFeatured);
}

export function getToolsWithMCP(): Tool[] {
  return tools.filter(tool => tool.mcp);
}

export function getToolsWithLocalStorage(): Tool[] {
  return tools.filter(tool => tool.localStorage);
}

export function getFreeTools(): Tool[] {
  return tools.filter(tool => tool.pricing.free);
}
