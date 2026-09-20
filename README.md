# Right-Thinks / 睿思健康服務中心網站

> **Lifecycle: ACTIVE / PUBLIC WEBSITE**

This repository is the source for the public 睿思健康服務中心 website.

## Current architecture

- React + Vite frontend
- Public website content lives under `src/`
- Production deployment is handled by GitHub Pages through `.github/workflows/deploy.yml`
- The deployment workflow builds from `main` and publishes `dist/`

## Maintenance boundary

- Treat this repository as an active public-facing site, not a sandbox or Lovable demo.
- Preserve the existing GitHub Pages deployment path unless a task explicitly changes hosting.
- Public contact information and health-service copy are production content; review user-visible changes carefully.
- Use normal branch / PR workflow and run the existing build/tests that are relevant to the change.

The previous README was the original Lovable placeholder and did not describe the repository's current role.
