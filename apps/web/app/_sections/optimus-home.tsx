const capabilities = [
  "Workspaces cloud prêts pour vos équipes",
  "API et moteur séparés pour des exécutions sûres",
  "Déploiement Vercel pour l'interface, VPS pour l'engine",
];

export function OptimusHome() {
  const platformUrl = process.env.NEXT_PUBLIC_PLATFORM_URL ?? "http://localhost:3001";

  return (
    <section className="relative isolate overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,107,53,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(124,58,237,0.18),transparent_28%)]" />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[--accent-9]">Optimus Platform</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            Développez dans le cloud avec une plateforme Optimus unifiée.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[--text-secondary] dark:text-[--dark-text-secondary]">
            Optimus transforme le site marketing en porte d'entrée officielle vers une plateforme de développement cloud: interface claire, authentification compatible Coder, API dédiée et moteur d'exécution isolé.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a className="rounded-full bg-[--accent-9] px-6 py-3 text-center font-semibold text-white shadow-lg shadow-orange-500/20" href={platformUrl}>
              Découvrir la plateforme
            </a>
            <a className="rounded-full border border-[--border] px-6 py-3 text-center font-semibold dark:border-[--dark-border]" href={`${platformUrl}/login`}>
              Connexion Optimus
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[--border-primary] bg-[--surface-secondary] p-6 shadow-2xl dark:border-[--dark-border-primary] dark:bg-[--dark-surface-secondary]">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-orange-500/20 via-violet-500/20 to-transparent p-5">
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-300">Engine isolé</span>
              <span className="text-sm text-[--text-secondary] dark:text-[--dark-text-secondary]">VPS only</span>
            </div>
            <div className="space-y-3">
              {capabilities.map((capability) => (
                <div key={capability} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-medium">
                  {capability}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
