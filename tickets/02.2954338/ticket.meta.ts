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
    ticketId: "2954338",
    sequence: "02",
    title: "NGPS/Promo+ Permissions Matrix — Baseline Groups and IAM Role Mapping",
    status: "in-progress",
    priority: "high",
    owners: ["mariaDobreva"],
    relatedDocs: [
        "../../promo-plus-core-infrastructure/.context/gcp-iam/apis-predefined-roles-custom-permissions.md",
        "../../ExternalTeams.md",
    ],
    relatedFiles: ["00.index.md", "01.requirements.md", "02.decisions.md"],
    lastUpdated: "2026-04-24",
};
