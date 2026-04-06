# ngps-global AWS SDK Analysis

## Purpose
This document is a machine-readable reference for AI agents analyzing AWS usage in `ngps-global`.

## Snapshot
- Analysis date: 2026-04-06
- Scope: `ngps-global/` only
- Exclusions: `node_modules`, `.git`, lockfiles (`yarn.lock`, `package-lock.json`, `pnpm-lock.yaml`)

## Core Metrics
- AWS SDK packages used (unique): 22
- AWS files (strict): 150
- AWS SDK usage occurrences (import/require lines): 294
- AWS-related files (broad text scan): 488

## Metric Definitions
- AWS SDK packages used: unique package names imported via `@aws-sdk/*` (or `aws-sdk`, if present).
- AWS files (strict): unique files containing AWS SDK import/require statements.
- AWS SDK usage occurrences: total lines matching AWS SDK import/require statements.
- AWS-related files (broad text scan): files containing AWS keywords (for example `dynamodb`, `s3`, `sqs`, `arn:`), not limited to SDK imports.

## AWS SDK Package Inventory (22)
- @aws-sdk/client-api-gateway
- @aws-sdk/client-apigatewayv2
- @aws-sdk/client-cloudwatch-logs
- @aws-sdk/client-dynamodb
- @aws-sdk/client-elasticache
- @aws-sdk/client-kinesis
- @aws-sdk/client-lambda
- @aws-sdk/client-rekognition
- @aws-sdk/client-s3
- @aws-sdk/client-scheduler
- @aws-sdk/client-ses
- @aws-sdk/client-sns
- @aws-sdk/client-sqs
- @aws-sdk/client-ssm
- @aws-sdk/client-sts
- @aws-sdk/credential-providers
- @aws-sdk/lib-dynamodb
- @aws-sdk/lib-storage
- @aws-sdk/s3-request-presigner
- @aws-sdk/util-dynamodb
- @aws-sdk/util-retry
- @aws-sdk/util-stream-node

## AWS SDK Package Usage by File Count
- @aws-sdk/lib-dynamodb: 91 files
- @aws-sdk/client-s3: 71 files
- @aws-sdk/client-dynamodb: 24 files
- @aws-sdk/client-sqs: 21 files
- @aws-sdk/client-lambda: 14 files
- @aws-sdk/util-stream-node: 14 files
- @aws-sdk/client-ssm: 9 files
- @aws-sdk/util-dynamodb: 8 files
- @aws-sdk/client-cloudwatch-logs: 7 files
- @aws-sdk/credential-providers: 6 files
- @aws-sdk/client-api-gateway: 4 files
- @aws-sdk/client-ses: 4 files
- @aws-sdk/client-sns: 4 files
- @aws-sdk/client-scheduler: 3 files
- @aws-sdk/util-retry: 3 files
- @aws-sdk/client-elasticache: 2 files
- @aws-sdk/client-kinesis: 2 files
- @aws-sdk/client-rekognition: 2 files
- @aws-sdk/client-sts: 2 files
- @aws-sdk/client-apigatewayv2: 1 files
- @aws-sdk/lib-storage: 1 files
- @aws-sdk/s3-request-presigner: 1 files

## Detailed Index
- Full package-to-file mapping: [docs/aws-analysis/ngps-global-aws-sdk-package-file-index.md](docs/aws-analysis/ngps-global-aws-sdk-package-file-index.md)

## Reproducibility
Use these commands from `ngps-global/`.

### Count strict AWS SDK files
```sh
grep -RInE "@aws-sdk/|require\(['\"]aws-sdk['\"]\)|from ['\"]aws-sdk['\"]|from ['\"]@aws-sdk/" \
	--exclude-dir=node_modules \
	--exclude-dir=.git \
	--exclude=yarn.lock \
	--exclude=package-lock.json \
	--exclude=pnpm-lock.yaml \
	. | cut -d: -f1 | sort -u | wc -l
```

### Count AWS SDK import/require occurrences
```sh
grep -RInE "from ['\"]@aws-sdk/[^'\"]+['\"]|require\(['\"]@aws-sdk/[^'\"]+['\"]\)|from ['\"]aws-sdk['\"]|require\(['\"]aws-sdk['\"]\)" \
	--exclude-dir=node_modules \
	--exclude-dir=.git \
	--exclude=yarn.lock \
	--exclude=package-lock.json \
	--exclude=pnpm-lock.yaml \
	. | wc -l
```

### List unique AWS SDK packages imported in code
```sh
grep -RInE "from ['\"]@aws-sdk/[^'\"]+['\"]|require\(['\"]@aws-sdk/[^'\"]+['\"]\)|from ['\"]aws-sdk['\"]|require\(['\"]aws-sdk['\"]\)" \
	--exclude-dir=node_modules \
	--exclude-dir=.git \
	--exclude=yarn.lock \
	--exclude=package-lock.json \
	--exclude=pnpm-lock.yaml \
	. | sed -E "s/.*from ['\"]([^'\"]+)['\"].*/\1/; s/.*require\(['\"]([^'\"]+)['\"]\).*/\1/" | sort -u
```

## Notes for AI Agents
- Prefer strict metrics for migration effort estimation tied to executable code paths.
- Use broad metrics to estimate documentation/config and operational AWS coupling.
- Re-run this analysis after dependency or infra updates.
