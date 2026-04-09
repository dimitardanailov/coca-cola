type TicketStatus = "todo" | "in-progress" | "blocked" | "done";
type TicketPriority = "low" | "medium" | "high";

interface TicketMeta {
  ticketId: string;
  sequence: string;
  title: string;
  status: TicketStatus;
  priority: TicketPriority;
  owners: string[];
  relatedDocs: string[];
  relatedFiles: string[];
  lastUpdated: string; // YYYY-MM-DD
}

const ticketMeta: TicketMeta = {
  ticketId: "2882103",
  sequence: "01",
  title: "GCP infra decomposition from ARB and C4P",
  status: "in-progress",
  priority: "medium",
  owners: ["mariaDobreva"],
  relatedDocs: [
    "../../docs/ARB/promo-cds-architecture/architecture-analysis.md",
    "../../docs/ARB/promo-cds-architecture/diagrams/promo-arb-architecture-overview.png",
    "../../docs/ARB/promo-cds-architecture/diagrams/promo-arb-architecture-internal-services.png",
    "../../docs/ARB/promo-cds-architecture/diagrams/promo-arb-architecture-external-services.png",
    "../../docs/ARB/promo-cds-architecture/diagrams/promo-arb-architecture-data-processors.png",
    "../../docs/ARB/promo-cds-architecture/diagrams/promo-arb-architecture-networking.png",
    "../../docs/ARB/promo-cds-architecture/diagrams/promo-arb-architecture-logging.png",
    "../../docs/ARB/promo-cds-architecture/diagrams/promo-arb-architecture-scheduled-tasks.png",
  ],
  relatedFiles: ["00.index.md", "01.requirements.md", "02.decisions.md"],
  lastUpdated: "2026-04-09",
};
