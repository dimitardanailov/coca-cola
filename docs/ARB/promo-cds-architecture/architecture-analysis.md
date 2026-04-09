# Promo CDS ARB Architecture Analysis

## Purpose

This document is the canonical reference for Promo CDS ARB architecture assets, naming conventions, and source artifacts.

## Diagram Asset Structure

All ARB diagrams are stored under `docs/ARB/promo-cds-architecture/diagrams/` with kebab-case naming.

| Diagram | File |
|---|---|
| Overview | [promo-arb-architecture-overview.png](diagrams/promo-arb-architecture-overview.png) |
| Internal Services | [promo-arb-architecture-internal-services.png](diagrams/promo-arb-architecture-internal-services.png) |
| External Services | [promo-arb-architecture-external-services.png](diagrams/promo-arb-architecture-external-services.png) |
| Data Processors | [promo-arb-architecture-data-processors.png](diagrams/promo-arb-architecture-data-processors.png) |
| Networking | [promo-arb-architecture-networking.png](diagrams/promo-arb-architecture-networking.png) |
| Logging | [promo-arb-architecture-logging.png](diagrams/promo-arb-architecture-logging.png) |
| Scheduled Tasks | [promo-arb-architecture-scheduled-tasks.png](diagrams/promo-arb-architecture-scheduled-tasks.png) |

## Naming Convention

- Directory: feature-scoped (`promo-cds-architecture`)
- Asset folder: `diagrams`
- Diagram file pattern: `promo-arb-architecture-<topic>.png`
- Style: lowercase, kebab-case, no spaces

## Integration Notes

- This document is domain documentation and must remain ticket-agnostic.
- Tickets and delivery artifacts may reference this document, but this document must not depend on ticket context.
