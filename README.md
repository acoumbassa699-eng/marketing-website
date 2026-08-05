# Optimus Monorepo

Optimus Platform est désormais organisé comme un monorepo professionnel pour séparer le site marketing, la future interface de développement cloud, l'API et le moteur d'exécution.

## Architecture

```txt
apps/
  web/        Site marketing existant
  platform/   Interface plateforme de développement cloud, login Optimus compatible Coder
services/
  api/        Backend API déployé sur VPS
  engine/     Workers et logique d'exécution déployés sur VPS uniquement
packages/
  ui/         Composants React partagés
  config/     Configuration TypeScript commune
  types/      Types métier partagés
```

## Authentification Optimus compatible Coder

Le login affiché par `apps/platform` est rebrandé Optimus tout en conservant les endpoints Coder documentés: `POST /api/v2/users/login`, GitHub OAuth et OIDC. Le détail de l'audit est disponible dans `docs/auth-audit.md`.

Flux prévu:

```txt
Frontend Vercel → services/api sur VPS → services/engine sur VPS
```

Le moteur ne doit jamais être inclus dans un déploiement Vercel.

## Commandes

```bash
pnpm install
pnpm dev
pnpm build
pnpm typecheck
pnpm lint
```

Commandes ciblées:

```bash
pnpm --filter @optimus/web dev
pnpm --filter @optimus/platform dev
pnpm --filter @optimus/api dev
pnpm --filter @optimus/engine dev
```

## Variables d'environnement

`apps/web` conserve `BASEHUB_TOKEN`. Le login produit est porté par `apps/platform` et doit être connecté au backend Coder via `/api/v2/*`:

```txt
BASEHUB_TOKEN=
CODER_ACCESS_URL=
```

`services/api` peut pointer vers le moteur:

```txt
OPTIMUS_ENGINE_URL=http://localhost:4100
```

## Déploiement cible

- Vercel: `apps/web`, `apps/platform`
- VPS: `services/api`, `services/engine`
