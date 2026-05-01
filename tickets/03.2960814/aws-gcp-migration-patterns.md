# DynamoDB to Google Cloud Migration Patterns (with Zod & Dataflow)

This document summarizes the recommended migration approach, integrating team lead (Marin) guidance and Cognizant mapping as a foundation. The plan is to:

---

## Migration Approach (Writeup & Plan)
1. **Start with a migration strategy writeup**
   - Document the overall approach, including schema mapping, transformation, and validation steps.
   - Use the Cognizant Excel mapping as a starting point (note: not 100% accurate, includes Bigtable, but is a foundation).
   - Review and iterate on the mapping with the team and stakeholders (e.g., Vijay).

2. **Define Schemas and Transformations with Zod**
   - Create Zod schemas for the old (DynamoDB) and new (Firestore) models.
   - Define transformation and validation logic in code.
   - Maintain the schema and transformation logic as the single source of truth.

3. **Pipeline Implementation with Apache Beam (Dataflow)**
   - Build the migration pipeline using Apache Beam (Google Cloud Dataflow).
   - Use the Zod schemas and transformation logic in the pipeline for validation and transformation.
   - The pipeline will:
     - Export data from DynamoDB (via S3 or direct read)
     - Transform and validate records
     - Import into Firestore (or other GCP target)

4. **Validation and Iteration**
   - Validate the migrated data (unit/integration tests, sample checks, dual writes if needed).
   - Iterate on mapping, transformation, and validation as requirements evolve.
   - Update the Zod schemas and pipeline as the mapping is refined.

5. **Stakeholder Review**
   - Share the migration plan and pipeline design with stakeholders (e.g., Vijay) for review and feedback.
   - Ensure the approach is robust and meets business/data requirements.

---

## Key Patterns
- Schema-first: Zod schemas for old/new/transformations/validations
- Pipeline-based migration: Apache Beam (Dataflow)
- Iterative mapping and validation
- Stakeholder review and sign-off before development

---

## Example References
- ngps-global/scripts/dynamodbMigrateTables.js: DynamoDB migration logic
- promo-plus/src/services/arbiter/index.js: Firestore usage example

---

_Last updated: 2026-04-30_
