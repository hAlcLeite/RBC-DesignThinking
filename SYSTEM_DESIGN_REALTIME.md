# EmberShield Real-Time System Design

This document explains how the EmberShield system design operates in real time based on the architecture diagram.

## Real-Time Flow (End to End)
1) EmberNode captures video and runs on-device ML to detect fire/smoke.
2) The device sends an HTTP POST event to the API Gateway with rate limiting.
3) Events are published to a Kafka stream for buffering and fan-out.
4) The Process Engine consumes events, creates incidents, and enriches context.
5) Processed data is stored in specialized databases:
   - S3 for raw artifacts (images, clips, evidence snapshots).
   - AWS Timestream for time-series sensor and risk signals.
   - PostGIS for fast spatial queries and map overlays.
   - MongoDB for document-style incident records and event history.
6) The Alert Engine evaluates thresholds and rules, then triggers webhooks.
7) EmberGrid Dashboard shows live map, analytics, and logs.

## Component Responsibilities
- EmberNode Camera + On-Device ML: detects smoke/fire locally to reduce latency and bandwidth, sends compact events rather than raw video.
- API Gateway / Rate Limiter: authenticates devices, throttles noisy sensors, and protects downstream services.
- Event Streams (Kafka): decouples ingestion from processing, smooths bursts, and supports replay.
- Process Engine (Incident Creation): de-duplicates events, correlates with location/time, and opens or updates incidents.
- S3 Database: stores heavy media and incident evidence for later review.
- AWS Timestream: stores time-series metrics for risk trend analysis.
- PostGIS: supports map views and geospatial filtering at scale.
- MongoDB: stores incident documents, device metadata, and alert history.
- Alert Engine (Webhooks): sends notifications to dashboards, services, or partners.
- EmberGrid Dashboard: visualizes live risk, incident status, and device logs.

## Data Model (Example Event)
Events are lightweight and structured for fast processing:
- device_id, timestamp, location
- class (fire, smoke), confidence
- snapshot_uri (optional S3 link)
- sensor_context (temperature, humidity, wind)

## Real-Time Behavior
- Latency target: seconds from detection to alert.
- Kafka buffers short spikes in event volume.
- Process Engine uses idempotency keys to avoid duplicate incidents.
- Alerts are sent only when thresholds or rules are met to reduce noise.

## Reliability and Resilience
- Devices retry with backoff if the API gateway is unavailable.
- Kafka retains events for replay and recovery.
- Process Engine can restart without data loss due to stream offsets.
- Alert Engine re-tries webhook delivery on transient failures.

## Security and Privacy
- Device authentication at the API gateway (token or certificate).
- Encrypt media in S3 and restrict access per user policy.
- Store only necessary metadata in MongoDB for auditing and support.
- Opt-in sharing for insurers or external partners.

## Notes for a Prototype Build
The current codebase demonstrates the detection pipeline and control logic. The cloud components in this document describe the intended real-time system architecture for scaling beyond a single home.
