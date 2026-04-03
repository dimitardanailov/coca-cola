# Firestore Standard vs Enterprise

The benchmark details are:

## 1. Unit economics benchmark for point reads and writes

Using us-central1 list prices:

- Standard: reads $0.03 per 100,000 docs, writes $0.09 per 100,000 docs.
- Enterprise: reads $0.05 per 1,000,000 read units (4 KiB tranche), writes $0.26 per 1,000,000 write units (1 KiB tranche).

For small promo docs (read <= 4 KiB, write <= 1 KiB), Enterprise can be materially cheaper on operations.

Example at 120M reads + 60M writes per month:

- Standard ops ~= $36 + $54 = $90
- Enterprise ops ~= $6 + $15.6 = $21.6

Signal: about 4.2x lower op cost in this specific small-document workload.

Sources:

- https://firebase.google.com/docs/firestore/editions
- https://cloud.google.com/firestore/pricing
- https://cloud.google.com/firestore/enterprise/pricing

## 2. Storage-cost counter-benchmark

Storage pricing can flip the economics:

- Standard storage starts around $0.15 per GB-month (hybrid SSD/HDD).
- Enterprise storage starts around $0.24 per GB-month (SSD).

Example at 500 GB:

- Standard ~= $75/month
- Enterprise ~= $120/month

Signal: Enterprise storage can be about 60% higher, so decision depends on ops-heavy vs storage-heavy profile.

Sources:

- https://cloud.google.com/firestore/pricing
- https://cloud.google.com/firestore/enterprise/pricing

## 3. Query-plan benchmark on complex filters

Standard depends on required indexes for many query patterns.
Enterprise advanced engine can execute without mandatory indexes (indexes are optional), then you optimize with Query Explain and Query Insights.

Benchmark test:

- Run 20 complex queries (multi-filter, aggregation-like patterns, broader filtering) on cold and warm data.
- Measure p50 and p95 latency, plus failure/blocked-query rate before index tuning and after tuning.

Signal to watch:

- Time-to-first-correct-query.
- p95 stability under evolving query shapes.

Sources:

- https://firebase.google.com/docs/firestore/editions
- https://firebase.google.com/docs/firestore/enterprise/overview-enterprise-edition-modes
- https://firebase.google.com/docs/firestore/enterprise/pipelines-overview

## 4. Write amplification benchmark (index overhead impact)

Standard auto-creates single-field indexes and often requires additional composite indexes. This can increase write-path overhead depending on schema and query design.
Enterprise gives more explicit index control and broader index options.

Benchmark test:

- Ingest 10M synthetic participation events with your actual schema variants.
- Measure write throughput, write-unit/doc-write cost, and index storage growth.

Signal:

- Cost per million ingested events.
- Sustained write throughput during campaign spikes.

Sources:

- https://firebase.google.com/docs/firestore/compare-editions-for-native-mode
- https://firebase.google.com/docs/firestore/query-data/index-overview
- https://firebase.google.com/docs/firestore/pipelines/get-started-with-pipelines

## 5. Migration-friction benchmark with MongoDB-compatible mode

Enterprise supports MongoDB-compatible API, MQL, BSON, drivers, and tooling.

Benchmark test:

- Take one representative service path and implement two prototypes:
- A) Firestore-native adaptation
- B) MongoDB-compatible adaptation in Enterprise
- Measure engineering hours, changed lines, defect count in UAT, and time to production parity.

Signal:

- Real migration effort reduction, not theoretical portability.

Sources:

- https://firebase.google.com/docs/firestore/enterprise/mongodb-compatibility-overview
- https://firebase.google.com/docs/firestore/enterprise/supported-features-80

