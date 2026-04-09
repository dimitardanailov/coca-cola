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
    "assets/arb/01-arb-approved-architecture-cds.pdf",
    "assets/arb/02-c4p-instance-strategy-overview.pdf",
  ],
  relatedFiles: ["00.index.md", "01.requirements.md", "02.decisions.md"],
  lastUpdated: "2026-04-09",
};
