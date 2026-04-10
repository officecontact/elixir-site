// Vercel serverless: returns static blog cards for /api/cards/filter
const BLOGS = [
  {
    pageName: "ai-agents-reduce-support-costs",
    imageUrl: "/assets/img/studydao.png",
    title: "How AI Agents Reduce Support Costs by 60% — Without Losing the Human Touch",
    description: "A practical breakdown of how enterprise AI agents are transforming customer support economics in 2025",
    services: ["ai agents"]
  },
  {
    pageName: "vibe-coding-cto-guide",
    imageUrl: "/assets/img/studydao.png",
    title: "Vibe Coding: The CTO's Guide to AI-Assisted Development in 2025",
    description: "Beyond GitHub Copilot — what enterprise engineering leaders actually need to know about the AI coding revolution",
    services: ["vibe coding"]
  },
  {
    pageName: "rag-vs-finetuning",
    imageUrl: "/assets/img/studydao.png",
    title: "RAG vs Fine-Tuning: Which Should Your Business Use?",
    description: "A practical decision framework for choosing between RAG and fine-tuning — with real cost and performance comparisons",
    services: ["ai and ml"]
  },
  {
    pageName: "ai-in-banking-2025",
    imageUrl: "/assets/img/studydao.png",
    title: "AI in Banking: What's Actually Working in 2025",
    description: "Beyond the hype — the AI use cases delivering real ROI in financial services, with implementation guidance",
    services: ["ai and ml"]
  },
  {
    pageName: "mlops-best-practices-2025",
    imageUrl: "/assets/img/studydao.png",
    title: "MLOps Best Practices for Enterprise AI: What We've Learned Deploying 50+ Models",
    description: "Practical patterns for getting ML models from notebook to production — and keeping them there",
    services: ["ai and ml"]
  },
  {
    pageName: "healthcare-ai-hipaa-guide",
    imageUrl: "/assets/img/studydao.png",
    title: "Healthcare AI: Building HIPAA-Compliant Solutions That Actually Work",
    description: "A technical guide to deploying AI in healthcare — covering data governance, model validation, and FDA SaMD requirements",
    services: ["ai and ml"]
  },
  {
    pageName: "blockchain-enterprise-use-cases-2025",
    imageUrl: "/assets/img/studydao.png",
    title: "Blockchain in 2025: Beyond Crypto — Real Enterprise Use Cases Delivering ROI",
    description: "The blockchain applications that survived the hype cycle and are delivering genuine business value",
    services: ["blockchain"]
  },
  {
    pageName: "llm-integration-guide-non-technical",
    imageUrl: "/assets/img/studydao.png",
    title: "LLM Integration: A Plain-English Guide for Non-Technical Founders",
    description: "Everything you need to know about adding AI language capabilities to your product — without the jargon",
    services: ["ai and ml"]
  },
  {
    pageName: "build-production-ai-agent-30-days",
    imageUrl: "/assets/img/studydao.png",
    title: "How to Build a Production-Ready AI Agent in 30 Days",
    description: "A week-by-week implementation guide for teams shipping their first AI agent — from architecture to go-live",
    services: ["ai agents"]
  },
  {
    pageName: "roi-vibe-coding-developer-productivity",
    imageUrl: "/assets/img/studydao.png",
    title: "The ROI of Vibe Coding: 5x Faster, 10x Cheaper Than a Dev Shop",
    description: "How Elixir delivers 5x faster and 10x cheaper than traditional development shops using vibe coding — and the metrics that prove it.",
    services: ["ai and ml"]
  }
];

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const page = parseInt(req.query.page) || 1;
  const services = req.query.service
    ? (Array.isArray(req.query.service) ? req.query.service : [req.query.service]).map(s => s.toLowerCase())
    : [];

  let filtered = BLOGS;
  if (services.length > 0) {
    filtered = BLOGS.filter(b => b.services.some(s => services.includes(s)));
  }

  const pageSize = 10;
  const start = (page - 1) * pageSize;
  const data = filtered.slice(start, start + pageSize);

  res.status(200).json({ data, total: filtered.length });
};
