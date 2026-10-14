# Decision log

| Date | Decision | Rationale | Follow-up |
| --- | --- | --- | --- |
| 2026-10-14 | Describe the repository as alpha-stage. | The frontend is not connected to the API and key production concerns are incomplete. | Reassess after integration and tests are delivered. |
| 2026-10-14 | Use build metadata as the source of truth for runtime versions. | `backend/pom.xml` declares Spring Boot 3.5.0 and Java 21, while parts of the root README still state Spring Boot 3.1.1 and Java 17. | Review and align the root README in a separate behavior-neutral maintenance task. |
| 2026-10-14 | Keep this change documentation-only. | Source changes would expand the scope beyond an honest current-state portfolio record. | Plan implementation work through separate issues. |
