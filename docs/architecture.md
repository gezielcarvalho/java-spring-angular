# Architecture

## Current shape

```text
Angular 16 scaffold (not integrated)
          |
          | planned HTTP integration
          v
Spring Boot REST API
  controllers -> services -> repositories -> JPA entities
          |
          +--> H2 in-memory database for the active test profile
          +--> PostgreSQL configuration for container-oriented use
```

## Backend

The `backend/` Maven project uses Java 21 and Spring Boot. It exposes catalog resources for products and categories, with JPA persistence, validation, OpenAPI UI support, and a test-profile H2 database. PostgreSQL is declared as the runtime database driver and is represented in the Docker Compose topology.

## Frontend

The `frontend/` project uses Angular 16 with Angular Material and Tailwind. Its routes, components, services, and models establish a structure, but the API integration and user-facing implementation remain incomplete.

## Deployment boundary

Docker assets show a local container topology; they do not constitute a production deployment design. There is no confirmed CI/CD or managed-environment configuration in scope.
