# AGENTS

## Repository Purpose

This repository to be with structure of monorepo about the main goal of the organization (coca-cola) migration from AWS to Google Cloud.

## Knowledge Model

This repository should be not treated as a set of isolated markdown files;
It should be treated as a relational knowledge base;

Each file acts like a collection of a different type of entity or context;

## Collections

- `GG-promo-infra.md`: details about the Google Cloud Terraform infra;
- `GG-promo.md`: details about the Google Cloud source code project;
- `Profile.md`: personal working context, blockers, progress, goals, and AI expectations;
- `TeamMembers.md`: people, roles, project familiarity, and team relationships;
- `TechnologyStack.md`: tools, frameworks, environment details, setup constraints;
- `tickets/`: ticket-level notes, implementation history, delivery context, and sprint demo artifacts; see `tickets/README.md` for structure rules;

## Relationship Rules

- Do not duplicate detailed information across files unless necessary;
- Prefer referencing entities by name across files;
- Use `Profile.md` as the source of truth for personal progress and onboarding state;
- Use `TeamMembers.md` to specify details about team;

## Team Operating Model

- [verified, 2026-04-15, source: team lead confirmation] There is no dedicated DevOps team member assigned to this project;
- [verified, 2026-04-15, source: team lead confirmation] DevOps and infrastructure responsibilities are shared across the team;
- [verified] Infrastructure changes should include explicit owner assignment in ticket/work item notes to avoid ownership gaps;

## Agent Guidance

When answering questions or generating text:

- connect related facts across files;
- treat names, tickets, and technologies as linked entities;
- preserve the distinction between facts, assumptions, and notes;
- prefer short, structured outputs;
- avoid rewriting files unless explicitly requested;

## Knowledge Confidence

Every statement in this knowledge base must carry an explicit confidence signal:

- If a fact has a clear, traceable source (diagram, doc, code, team confirmation) — state or link it.
- If a fact is inferred, pattern-based, or unverified — mark it with `?`.
- Silence is not neutral. An unmarked statement will be read as verified. That is dangerous in a migration project.

Knowledge bottlenecks are two-sided:
- A new team member who does not yet know something should write `?` rather than guess.
- A core team member whose knowledge is not yet written down is an equally real bottleneck.

Both produce `?` entries. Both need to be resolved before implementation, not after.

## Documentation Governance

- `docs/` is canonical knowledge (business and infrastructure source of truth), not ticket narration.
- Documentation in `docs/` must be ticket-agnostic and must not contain delivery-specific wording such as ticket IDs, sprint context, or temporary implementation notes.
- `tickets/` may reference and consume `docs/`; `docs/` must not depend on `tickets/`.
- If both `docs/` and `tickets/` mention the same topic, keep durable facts in `docs/` and execution/work-tracking details in `tickets/`.
- For diagram-heavy architecture artifacts, use PNG as the canonical format for analysis and cross-referencing.
- PDF may be kept only as an optional raw upload; it must not be the only source format for architecture analysis.
