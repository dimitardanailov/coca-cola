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

## Agent Guidance

When answering questions or generating text:

- connect related facts across files;
- treat names, tickets, and technologies as linked entities;
- preserve the distinction between facts, assumptions, and notes;
- prefer short, structured outputs;
- avoid rewriting files unless explicitly requested;
