# Zero-Touch Deployment System (Next.js & Docker)

[CI/CD Pipeline](https://github.com/romeopopescu/zero-touch-deployment-system/actions)

A complete, "zero-touch" CI/CD pipeline that automatically builds, tests, containerizes, and deploys a full-stack Next.js application.

**This isn't just an app; it's an automated factory for shipping code.**

**Live Demo:** [https://zero-touch-deployment-system.onrender.com](https://zero-touch-deployment-system.onrender.com)

---

## How It Works: The Pipeline

This system is built on GitHub Actions and automatically triggers on every `push` to the `main` branch.

Here is the entire workflow:

```plaintext
[Push code to main]
       |
       v
[GitHub Action Triggered]
 |
 +--> 1. Test & Lint
 |     - Installs dependencies (`npm ci`)
 |     - Runs ESLint (`npm run lint`)
 |     - Runs Jest tests (`npm run test`)
 |     - Uploads coverage report (Bonus)
 |
 +--> 2. Build & Push Docker Image (if tests pass)
 |     - Logs into GitHub Container Registry (GHCR)
 |     - Builds a multi-stage, production-optimized Docker image
 |     - Pushes image to `ghcr.io/username/repo:latest`
 |
 +--> 3. Trigger Deployment (if build passes)
      - Calls Render.com deploy hook (`curl`)
      - Render pulls the new image from GHCR and deploys
 
```
## Tech Stack 

**Application** 

Next.js: Full-stack React framework (App Router)

TypeScript: For static typing

Jest & React Testing Library: For unit and component testing

**DevOps & Infrastructure**

GitHub Actions: For CI/CD automation

Docker: For containerization

GitHub Container Registry (GHCR): For hosting the Docker image

Render: For production hosting (pulls from GHCR)

## Key Features

Zero-Touch Deployment: Code pushed to main is live in production automatically.

Quality Gates: The pipeline fails if linting or tests don't pass, preventing bad code from being deployed.

Production-Grade Dockerfile: Uses a multi-stage build to create a tiny, fast, and secure final container.

Test Coverage: Generates a test coverage report on every run.
