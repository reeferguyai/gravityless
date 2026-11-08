# PotGrowHub + Reeferdude project blueprint

This document consolidates the supplied PotGrowHub master prompt and Reeferdude architecture notes into a repository reference. It is an architecture/specification document, not a claim that the features have been implemented.

## Product concept

A sustainable, adult-oriented cannabis education and accessories platform combining:

- PotGrowHub cultivation education and grow-room telemetry concepts.
- Reeferdude's spatial, conversational interface and creator/design tools.
- An eco-conscious marketplace concept, with supplier claims verified before they are presented as facts.

The original notes describe a broad and aspirational product. Build and release in small, testable increments; do not treat speculative integrations, product availability, legal compliance, environmental impact, or AI output as verified.

## Experience and visual direction

- Obsidian/deep-green foundations with emerald, amber, and purple accents.
- Cosmic/starfield and drifting-element visuals, with reduced-motion behavior and a usable non-WebGL fallback.
- A responsive navigation and conversational workspace that remains operable by keyboard and assistive technology.
- Spatial effects should be progressive enhancement, not a prerequisite for core content or navigation.

## Proposed product areas

- Home / portal and navigation.
- Educational knowledge and strain-information library.
- Grow-room learning, calculators, and optional telemetry dashboards.
- Design studio and product visualization.
- Marketplace, cart, checkout, orders, and delivery information.
- AI assistant/persona experiences.
- User profile, saved work, preferences, and rewards.
- Privacy, age, accessibility, legal, safety, and regional-compliance information.

The supplied 100+ page list is retained as a planning inventory in [MASTER-FILE-MAP.md](MASTER-FILE-MAP.md). It should be prioritized and deduplicated before implementing routes.

## Architecture direction from the supplied notes

The notes propose a Vite/React frontend; optional Three.js/WebXR experiences; a Node/Express API; PostgreSQL and/or other specialized stores; and optional Python services. These are proposals, not existing dependencies in this repository. Select the smallest stack that meets validated requirements before adding dependencies.

Potential domains include:

- UI, routes, accessibility, and content.
- Authentication and user preferences.
- Product and supplier data, with auditable sourcing claims.
- Orders and payment-provider boundaries.
- Optional telemetry ingestion with device authorization and retention limits.
- AI services with clear safety, privacy, and medical/legal disclaimers.

Keep secrets and personal data out of source control. Use server-side authorization for privileged integrations and validate all external input.

## Reliability, safety, and compliance principles

1. Treat legal requirements as jurisdiction-specific and obtain qualified legal review before commerce or age-restricted functionality is enabled.
2. Do not make medical claims or present generated recommendations as diagnosis or treatment.
3. Do not imply that products are biodegradable, certified, in stock, or carbon-neutral unless evidence supports the specific claim.
4. Minimize personal data, define retention periods, and document consent and deletion pathways.
5. Protect payment and identity data by using established providers; do not store card details or identity documents in application logs.
6. Provide keyboard access, semantic markup, sufficient contrast, zoom support, and `prefers-reduced-motion` behavior.
7. Make automated agents auditable and require human approval for purchases, supplier commitments, or other consequential actions.
8. Treat the listed traffic monetization, behavioral personalization, and attention-loop concepts as optional, and prioritize user consent and privacy.

## Suggested implementation sequence

1. Decide the initial product scope and canonical brand/domain.
2. Create a minimal, accessible static frontend with real content and working navigation.
3. Add tests, linting, build checks, and deployment configuration.
4. Add backend features only when their data, security, and operational requirements are defined.
5. Add OAuth integrations through explicit user consent and least-privilege scopes (see [Google Workspace integration setup](GOOGLE-WORKSPACE-INTEGRATION.md)).
6. Add WebGL, AI, telemetry, commerce, and personalization as separately reviewed features.

## Source note

This is a consolidated summary of the user-provided `potgrowhub_master_prompt.md` and `porkey.md` material. It preserves the major concepts while distinguishing planned functionality from implemented code. Keep the original source exports separately if exact archival fidelity is required.
