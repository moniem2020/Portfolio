export interface Service {
  id: string;
  title: string;
  tagline: string;
  deliverables: string[];
  icon: "bot" | "search" | "code" | "chart";
}

export const services: Service[] = [
  {
    id: "ai-agents",
    title: "AI Agents & Automation",
    tagline:
      "Multi agent workflows that take repetitive operations off your team's plate, with humans kept in the loop.",
    deliverables: [
      "LangChain agent pipelines",
      "n8n workflow orchestration",
      "Tool and API integrations",
      "Guardrails and observability",
    ],
    icon: "bot",
  },
  {
    id: "rag-copilots",
    title: "RAG Copilots & Chatbots",
    tagline:
      "Retrieval augmented assistants that answer from your own docs, fast, grounded, and production safe.",
    deliverables: [
      "RAG over your knowledge base",
      "Document retrieval and summarization",
      "Prompt engineering and evals",
      "Support and internal copilots",
    ],
    icon: "search",
  },
  {
    id: "web-apps",
    title: "Full-Stack Web Apps",
    tagline:
      "Fast, modern websites and web apps, from landing pages to booking and membership platforms.",
    deliverables: [
      "Next.js and TypeScript builds",
      "Booking, memberships and dashboards",
      "Email and form backends",
      "Responsive, SEO ready, shipped to production",
    ],
    icon: "code",
  },
  {
    id: "data",
    title: "Data & Dashboards",
    tagline:
      "Turn raw data into decisions, predictive models and dashboards that stakeholders actually read.",
    deliverables: [
      "Power BI dashboards and reporting",
      "ML prediction models",
      "Data cleaning and pipelines",
      "Clear, narrative driven insights",
    ],
    icon: "chart",
  },
];
