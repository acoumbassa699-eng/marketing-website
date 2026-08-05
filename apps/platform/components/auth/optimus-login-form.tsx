"use client";

import { useState } from "react";

const coderPasswordLoginEndpoint = "/api/v2/users/login";
const coderGithubOAuthEndpoint = "/api/v2/users/oauth2/github/callback";
const coderOIDCEndpoint = "/api/v2/users/oidc/callback";

export function OptimusLoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitLogin(formData: FormData) {
    setError(null);
    setIsSubmitting(true);

    const response = await fetch(coderPasswordLoginEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        email: String(formData.get("email") ?? ""),
        password: String(formData.get("password") ?? ""),
      }),
    });

    setIsSubmitting(false);

    if (!response.ok) {
      setError("Connexion impossible. Vérifiez vos identifiants Optimus.");
      return;
    }

    const data = (await response.json()) as { session_token?: string };
    if (data.session_token) {
      window.localStorage.setItem("coder_session_token", data.session_token);
    }
    window.location.assign("/");
  }

  return (
    <div className="auth-card">
      <div className="brand-mark" aria-hidden="true">O</div>
      <p className="eyebrow">Optimus Cloud Development</p>
      <h1>Connectez-vous à Optimus</h1>
      <p className="intro">Accédez à vos workspaces, templates et agents de développement sécurisés.</p>

      <form action={submitLogin} className="login-form">
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required placeholder="vous@entreprise.com" />
        </label>
        <label>
          Mot de passe
          <input name="password" type="password" autoComplete="current-password" required placeholder="••••••••" />
        </label>
        {error ? <p className="error" role="alert">{error}</p> : null}
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Connexion…" : "Se connecter"}</button>
      </form>

      <div className="oauth-grid" aria-label="Connexions SSO">
        <a href={coderGithubOAuthEndpoint}>Continuer avec GitHub</a>
        <a href={coderOIDCEndpoint}>Continuer avec SSO / OIDC</a>
      </div>

      <p className="technical-note">Interface rebrandée Optimus — endpoints, sessions et OAuth restent ceux de Coder.</p>
    </div>
  );
}
