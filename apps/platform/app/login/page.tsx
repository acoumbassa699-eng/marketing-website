import { OptimusLoginForm } from "@/components/auth/optimus-login-form";

export default function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-hero">
        <p>Plateforme de développement cloud</p>
        <h2>Construisez, exécutez et gouvernez vos environnements depuis Optimus.</h2>
      </section>
      <OptimusLoginForm />
    </main>
  );
}
