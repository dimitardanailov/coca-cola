# Ticket 2960814: Definition and Validation of the Data Model Prior to Database Migration

## Entry Gate
- **Task:** Define, iteratively evolve, and validate the new GCP-native data model before database migration.
- **Knowns:**
  - Zod is used for code-based schema management.
  - Unit tests are required for schema, validations, and transformations.
  - Data model is also maintained in .dbml for ERD/visualization.
  - This work separates model evolution from migration execution.
- **Unknowns:**
  - Final schema details and mappings.
  - All constraints and edge cases from real feature usage.
- **Evidence:**
  - See story intent and acceptance criteria in st.md.

## Scope Check
- **In Scope:**
  - Schema definition and validation using Zod.
  - Unit test creation for schema logic.
  - .dbml model maintenance for ERD.
- **Out of Scope:**
  - Actual database migration execution.
  - Feature delivery blocked by migration.
- **Related:**
  - GCP migration project (see AGENTS.md, GG-promo-infra.md).

## Spec
- **Problem Statement:**
  - Migration to GCP requires a robust, validated, and agreed-upon data model.
- **Acceptance Criteria:**
  - Zod schema covers all required fields, types, and constraints.
  - Unit tests validate schema correctness and transformations.
  - .dbml file is kept in sync for ERD.
  - Model is iteratively updated as features evolve.
- **Constraints:**
  - No blocking of ongoing feature delivery.
  - Schema must reflect real usage, not just assumptions.
- **Non-goals:**
  - No direct migration scripts or DB changes in this ticket.
- **Reviewer Focus:**
  - Evidence of schema/test/ERD sync and evolution.

## Evidence
- **Artifacts:**
  - Zod schema files
  - Unit test files
  - .dbml model file
  - Story intent and context (see st.md)
- **Prior Attempts:**
  - N/A (new for GCP migration)

## Change Logic
- **Approach:**
  - Use Zod for schema, .dbml for ERD, and tests for validation.
- **Alternatives:**
  - Manual schema management (rejected: higher risk, less traceability).
- **Justification:**
  - Code-based schema and tests reduce migration risk and improve traceability.

## Validation
- **Method:**
  - Run unit tests for schema and transformations.
  - Review .dbml for ERD accuracy.
- **Environments:**
  - Local dev, CI pipeline.
- **Risks:**
  - Schema drift, incomplete test coverage.

## High-Risk Changes
- **Current:**
  - Ad hoc or manual schema evolution.
- **Target:**
  - Iterative, test-driven, and visualized schema evolution.
- **Evidence:**
  - Versioned schema, passing tests, up-to-date ERD.

## Terminology And Philosophy
- **Terms:**
  - Zod, .dbml, ERD, GCP-native, schema evolution.
- **Language Choices:**
  - Use "evolution" for ongoing schema changes, "migration" for DB execution.
- **Design Assumptions:**
  - Schema must reflect real feature usage, not just planned fields.

## Compact Summary
- This ticket establishes a spec-driven, testable, and visualized data model evolution process for GCP migration, using Zod, .dbml, and unit tests, without blocking ongoing delivery or executing the migration itself.
