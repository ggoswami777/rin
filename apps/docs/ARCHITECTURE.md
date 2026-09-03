# Architecture Overview

Rin is an automated AI-driven Code Review & Fix platform integrated via GitHub Apps and powered by Turborepo.

## System Diagram

```mermaid
flowchart TD
    subgraph GitHub ["GitHub Platform"]
        GH_App["GitHub App Webhooks\n(PR opened, synchronized)"]
        GH_API["GitHub REST API\n(Comments, Pull Requests)"]
    end

    subgraph Rin_Backend ["apps/github-app (Hono Server)"]
        Webhook_Endpoint["/webhooks/github\n(Verification & Ingestion)"]
        Fix_Endpoint["/apply-fix\n(Automated PR branch creation)"]
        Worker["BullMQ Review Worker"]
    end

    subgraph Storage ["Infra / DB"]
        Redis[("Redis / Upstash\nBullMQ Queue")]
        Postgres[("PostgreSQL\nPrisma ORM")]
    end

    subgraph AI_Engine ["packages/ai"]
        Router["generateReview() Router"]
        OpenAI["OpenAI Provider (GPT-4o)"]
        Claude["Anthropic Provider (Claude 3.5)"]
        Gemini["Google Gemini Provider"]
        Ollama["Ollama Provider (Local)"]
    end

    GH_App -->|Webhook Event| Webhook_Endpoint
    Webhook_Endpoint -->|Queue Job| Redis
    Redis -->|Process Job| Worker
    Worker -->|Fetch diff & info| GH_API
    Worker -->|Invoke AI| Router
    Router --> OpenAI & Claude & Gemini & Ollama
    Worker -->|Store analysis| Postgres
    Worker -->|Post Review & Comments| GH_API
    Fix_Endpoint -->|Push fixes & create branch| GH_API
