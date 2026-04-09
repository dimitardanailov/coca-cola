# Technology Stack

## Purpose

Knowledge reference for the active Promo Plus migration projects.
Scope: `promo-plus` (application) and `promo-plus-core-infrastructure` (infrastructure).

> `ngps-global` is the current AWS-based system and is out of scope for this file.

---

## promo-plus

Backend system for promo mechanics. Part of the core MarTech stack of The Coca-Cola Company.
Designed to be channel-agnostic and integrated with multiple consumer-facing experiences.

- Repository: `github.com/The-Coca-Cola-Company/promo-plus`

### Runtime and Language

- Runtime: Node.js
- Language: JavaScript (ESM)
- HTTP framework: h3 v2 (nightly build in use during development)

### Key Dependencies

| Package | Purpose |
|---|---|
| `h3` | HTTP server framework |
| `zod` | Runtime schema validation |
| `firebase-admin` | Firebase / Firestore access |
| `date-fns` + `@date-fns/tz` | Date handling with timezone support |
| `p-series` | Sequential async task execution |
| `@the-coca-cola-company/ngps-global-common-messages` | Shared message contracts from legacy platform |

### Testing

- Framework: Vitest
- Mode: unit tests via `vitest run`
- Setup file: `src/test/setup.js`

### Source Structure

| Folder | Purpose |
|---|---|
| `src/domains/` | Core business domains (checkers, flows, proof-of-purchase) |
| `src/services/` | Internal services (arbiter) |
| `src/collections/` | Data collections / repositories |
| `src/middlewares/` | HTTP middleware layer |
| `src/utils/` | Shared utilities |
| `src/internal-services/` | Internal service integrations |
| `src/cache/` | Caching layer |

---

## promo-plus-core-infrastructure

Infrastructure-as-code for the Promo Plus platform on Google Cloud.

- Repository: `github.com/The-Coca-Cola-Company/promo-plus-core-infrastructure`
- IaC tool: OpenTofu (compatible with Terraform `>= 1.8.0`)

### Cloud Provider

- Platform: Google Cloud Platform (GCP)
- Providers: `hashicorp/google` and `hashicorp/google-beta` (version `>= 6.0, < 7.0`)

### GCP Services in Use

| Module | GCP Service |
|---|---|
| `bigquery` | BigQuery |
| `bigtable` | Bigtable |
| `cloud-armor` | Cloud Armor (WAF / DDoS) |
| `cloud-run-service` | Cloud Run |
| `firebase` | Firebase |
| `firestore` | Firestore |
| `load-balancing` | Cloud Load Balancing |
| `memorystore` | Memorystore (Valkey) |
| `networking` | VPC / Shared VPC |
| `psc` + `psc-consumer` | Private Service Connect |
| `secrets` | Secret Manager |
| `storage` | Cloud Storage |
| `vpc-connector` | Serverless VPC Access |

### Environments

| Name | Purpose |
|---|---|
| `alpha` | Early integration |
| `beta` | Pre-production |
| `gamma` | Staging / QA |
| `prod` | Production |
| `rudy` | Developer sandbox (default) |

### Key Variables

| Variable | Description |
|---|---|
| `environment` | Deployment target environment |
| `service_project_id` | GCP project for services (Cloud Run, Firestore, etc.) |
| `shared_networking_project_id` | GCP Shared VPC host project |
| `memorystore_project_id` | GCP project for Memorystore instances |
| `primary_region` | Primary GCP region |
| `secondary_region` | Failover GCP region |

### State Backend

- Remote backend configured via `backend.tf`
- Environment-specific variable files: `environments/<env>.tfvars`
