export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export const homepageFAQs: FAQ[] = [
  {
    question: 'What is an AI memory layer?',
    answer: 'An AI memory layer is a system that captures, stores, and retrieves information across multiple AI tools, creating persistent context that survives beyond individual chat sessions. It solves the problem of AI tools "forgetting" previous conversations and context.',
    category: 'basics'
  },
  {
    question: 'Why do AI tools forget conversations?',
    answer: 'Most AI tools (ChatGPT, Claude, Gemini) don\'t retain context between sessions by design. Each conversation starts fresh unless you manually provide previous context. Memory layers automate this process.',
    category: 'basics'
  },
  {
    question: "What's the difference between AI memory and a notes app?",
    answer: 'Notes apps store information but don\'t actively connect it to your AI workflows. AI memory layers capture content AND make it instantly retrievable by any AI tool you use, creating cross-platform context.',
    category: 'basics'
  },
  {
    question: 'Do I need technical skills to use AI memory tools?',
    answer: 'Most modern AI memory tools (like myNeutron) require no coding. Browser extensions handle capture, and AI-powered search handles retrieval. Advanced features like MCP integration are optional.',
    category: 'getting-started'
  },
  {
    question: 'Can I use multiple AI tools with one memory layer?',
    answer: 'Yes, that\'s the key benefit. Tools like myNeutron work with ChatGPT, Claude, Gemini, Cursor, and other AI platforms, creating a shared knowledge base across all of them.',
    category: 'features'
  },
  {
    question: 'How much does an AI memory system cost?',
    answer: 'Prices range from free (with limitations) to $8-15/month for full-featured tools. myNeutron offers 200 items free, Obsidian is completely free, and premium options like Mem.ai cost around $8/month.',
    category: 'pricing'
  }
];

export const toolsHubFAQs: FAQ[] = [
  {
    question: 'Which AI memory tool is best overall?',
    answer: 'For most people, myNeutron offers the best balance of features, ease of use, and cross-AI compatibility. It\'s free to start and works with ChatGPT, Claude, Gemini, and coding assistants.',
    category: 'recommendations'
  },
  {
    question: 'Are there free AI memory tools?',
    answer: 'Yes. myNeutron offers 200 items free, Obsidian is completely free (open source), Logseq is free, and several others have free tiers.',
    category: 'pricing'
  },
  {
    question: "What's the difference between Notion and myNeutron?",
    answer: 'Notion is a workspace/database with AI features added. myNeutron is specifically designed as a memory layer for AI tools. Notion is better for teams; myNeutron is better for personal AI workflows.',
    category: 'comparisons'
  },
  {
    question: 'Do I need coding skills for these tools?',
    answer: 'Most don\'t require coding (myNeutron, Mem, Reflect, Notion). Obsidian and Logseq have optional advanced features for developers but work fine without coding. Only MCP integration requires some technical setup.',
    category: 'getting-started'
  }
];

export const studentFAQs: FAQ[] = [
  {
    question: 'Do I need to organize everything manually?',
    answer: 'No. Tools like myNeutron auto-organize related items. You just save things; the system groups them.',
    category: 'getting-started'
  },
  {
    question: 'What if I already have notes in Google Docs/Notion/etc?',
    answer: 'Most memory tools let you import or upload existing files. Start fresh with your next project and migrate old stuff later if needed.',
    category: 'getting-started'
  },
  {
    question: 'Can I share my knowledge base with study group members?',
    answer: 'Some tools support collaboration (Notion AI), others are adding it soon (myNeutron). For now, individual use is most common.',
    category: 'features'
  },
  {
    question: 'Is my data private?',
    answer: 'Yes. Cloud-based tools (myNeutron, Mem, Notion) keep your data private. Local tools (Obsidian, Logseq) store everything on your computer.',
    category: 'privacy'
  },
  {
    question: 'What about citations? Can these tools do bibliographies?',
    answer: 'AI memory layers help you organize and find sources. For actual citation formatting, use Zotero or Mendeley alongside your memory tool.',
    category: 'features'
  },
  {
    question: "I'm not writing a thesis. Is this still useful?",
    answer: 'Yes! Any course with research papers, group projects, or cumulative material benefits from this approach.',
    category: 'use-cases'
  }
];

export const developerFAQs: FAQ[] = [
  {
    question: 'What is MCP integration?',
    answer: 'MCP (Model Context Protocol) allows your coding assistants like Cursor or Claude Code to directly access your memory layer. This means your AI coding tools can reference your saved architectural decisions, debugging notes, and code patterns.',
    category: 'technical'
  },
  {
    question: 'Which tools support MCP?',
    answer: 'myNeutron has the most complete MCP implementation among memory tools. Obsidian also has community plugins for MCP integration.',
    category: 'features'
  },
  {
    question: 'Can I self-host my memory layer?',
    answer: 'Obsidian and Logseq are local-first and can be synced however you want. For cloud-based tools, myNeutron offers blockchain storage for data ownership.',
    category: 'technical'
  },
  {
    question: 'How does this integrate with my IDE?',
    answer: 'Via MCP, your memory layer connects directly to Cursor, VS Code (with extensions), and Claude Code. The AI can query your knowledge base automatically.',
    category: 'technical'
  }
];

export const guideMainFAQs: FAQ[] = [
  {
    question: 'What is an AI memory layer?',
    answer: 'An AI memory layer is a system that captures, stores, and retrieves information across multiple AI tools. It creates persistent context that survives beyond individual chat sessions, solving the problem of AI tools forgetting everything when you close them.',
    category: 'definition'
  },
  {
    question: "Why can't I just use ChatGPT's built-in memory?",
    answer: "ChatGPT's memory is limited to ChatGPT only, not searchable or browsable, and you can't control what's remembered. A proper memory layer works across all AI tools and gives you full control.",
    category: 'comparisons'
  },
  {
    question: 'How do memory layers store information?',
    answer: 'Most use vector embeddings for semantic search, meaning they understand the meaning of your content rather than just matching keywords. This allows for natural language queries.',
    category: 'technical'
  },
  {
    question: 'Is my data safe with these tools?',
    answer: 'Cloud-based tools keep your data private and encrypted. Local-first tools like Obsidian store everything on your computer. Some tools like myNeutron offer blockchain storage for permanent ownership.',
    category: 'privacy'
  }
];

export function getFAQsByCategory(faqs: FAQ[], category: string): FAQ[] {
  return faqs.filter(faq => faq.category === category);
}
