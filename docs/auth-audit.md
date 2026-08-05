# Audit authentification Optimus / Coder

## État constaté dans ce dépôt

Le dépôt local ne contient pas le backend Coder complet ni son dashboard React original. Les seuls fichiers d'authentification présents avant cette correction étaient les pages fictives créées lors de la migration précédente dans `apps/web/app/auth/*` et `apps/web/lib/auth/providers.ts`.

Ces pages ont été supprimées afin de ne pas faire croire qu'un nouveau système OAuth Optimus remplace Coder.

## Fichiers frontend liés au login

- `apps/platform/app/login/page.tsx` : page de login rebrandée Optimus.
- `apps/platform/components/auth/optimus-login-form.tsx` : formulaire visuel Optimus qui appelle les endpoints Coder existants.
- `apps/platform/app/globals.css` : identité visuelle Optimus pour la page de connexion.

## Fichiers backend liés à l'authentification

Aucun backend d'authentification Coder n'est présent dans ce dépôt. Le backend disponible est seulement le squelette `services/api/src/server.ts`, qui ne contient pas de logique de session ou OAuth.

## Endpoints Coder conservés par l'interface Optimus

- `POST /api/v2/users/login` pour le login email/mot de passe.
- `GET /api/v2/users/oauth2/github/callback` pour le flux GitHub OAuth Coder.
- `GET /api/v2/users/oidc/callback` pour le flux OIDC Coder.

## Décision de correction

L'expérience visuelle de login est rebrandée en Optimus, mais aucune API interne Coder n'a été remplacée ou simulée. Pour un fonctionnement complet en production, `apps/platform` doit être servi devant le vrai backend Coder ou proxyfier `/api/v2/*` vers lui.
