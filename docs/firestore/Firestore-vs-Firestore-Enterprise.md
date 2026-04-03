# Firestore Standard vs Enterprise

The benchmark details are:

## How Enterprise works differently from Standard

This section focuses on mechanics, not marketing claims.

### 1. Storage model and index storage behavior

Standard edition:

- Uses hybrid storage (SSD + HDD).
- Automatically creates single-field indexes.
- Composite indexes are added manually.
- Practical effect: easier defaults, but automatic indexes increase index storage footprint.

Enterprise edition:

- Uses SSD storage.
- Does not auto-create single-field indexes.
- Indexes are optional and explicitly managed.
- Supports broader index options (for example sparse, non-sparse, unique).
- Practical effect: better control over index footprint and write-path behavior, but requires stronger index governance.

Why this matters:

- Storage cost is not only "GB price". It is data + index footprint + write amplification from index maintenance.
- Enterprise can reduce unnecessary index storage, but SSD base storage is priced higher.

### 2. Query execution behavior

Standard edition:

- Many query patterns require indexes and fail fast when a required index is missing.
- Operationally, this pushes teams into "index-first" query design.

Enterprise edition:

- Queries can execute without pre-created indexes.
- If index coverage is missing, execution can degrade toward broader scans.
- Query Explain and Query Insights are central for tuning.

Why this matters:

- Enterprise gives higher query-shape flexibility, but that flexibility can create expensive plans if not tuned.

### 3. Billing mechanics are fundamentally different

Standard edition:

- Billed primarily per document reads/writes/deletes.

Enterprise edition:

- Billed by data processed:
- Read Units in 4 KiB tranches.
- Write Units in 1 KiB tranches.
- Real-time update units are separate in Enterprise Native mode.

Why this matters:

- Two queries returning the same 100 rows can have very different cost depending on bytes scanned and projection width.
- Large documents and broad projections inflate Enterprise unit consumption.

### 4. Execution engine capabilities

Standard edition:

- Core query model with stricter query-shape limits.

Enterprise edition:

- Advanced query engine.
- Pipeline operations for richer server-side processing (aggregation/grouping/transform stages and expression functions).
- MongoDB compatibility mode with a broad but not complete feature matrix.

Why this matters:

- Complex filtering and transformation can move from app loops into database-side execution.
- This can improve architecture simplicity and reduce application-side CPU/egress, if query plans are index-aware.

### 5. Hard operational boundaries for large datasets

For Enterprise pipeline execution, key limits include:

- Query deadline: 60 seconds.
- Materialized memory during query execution: 128 MiB.

For vector search:

- Max embedding dimension: 2048.
- Max nearest-neighbor results: 1000.

Why this matters for 470,000,000 records:

- The system must be designed for selective access paths.
- Broad, weakly selective aggregations can hit deadline/memory limits even when features are available.

### Practical recommendation for your migration context

- Use Enterprise if you need advanced server-side query composition, Mongo compatibility, or vector retrieval.
- Treat index design as a first-class architecture artifact, not a tuning afterthought.
- Define workload classes early (point reads, bounded range reads, analytical aggregations, vector retrieval) and benchmark each class with production-like cardinality.

References:

- https://firebase.google.com/docs/firestore/editions
- https://firebase.google.com/docs/firestore/compare-editions-for-native-mode
- https://firebase.google.com/docs/firestore/enterprise/pipelines-overview
- https://firebase.google.com/docs/firestore/pipelines/get-started-with-pipelines
- https://firebase.google.com/docs/firestore/enterprise/supported-features-80
- https://docs.cloud.google.com/firestore/docs/vector-search
- https://cloud.google.com/firestore/pricing
- https://cloud.google.com/firestore/enterprise/pricing

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

