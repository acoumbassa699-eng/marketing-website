import { Cpu, GitBranch, ShieldCheck, TerminalSquare, type LucideIcon } from "lucide-react";
import { ShellCard, StatusPill } from "@optimus/ui";
import { engineJobs, workspaces } from "@/lib/data";

const flowSteps: Array<[LucideIcon, string]> = [[TerminalSquare, "Interface"], [GitBranch, "API"], [Cpu, "Engine workers"], [ShieldCheck, "Audit"]];

export default function PlatformHome() {
  return (
    <main style={{ padding: "32px", maxWidth: 1180, margin: "0 auto" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}><strong>Optimus Platform</strong><StatusPill tone="success">Frontend Vercel · Engine VPS</StatusPill></nav>
      <section style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 24, alignItems: "stretch" }}>
        <ShellCard><p style={{ color: "#ffb199", fontWeight: 700 }}>Cloud development platform</p><h1 style={{ fontSize: 56, lineHeight: 1, margin: "12px 0" }}>Des workspaces cloud pilotés par une API et un moteur séparé.</h1><p style={{ color: "#cbd5e1", fontSize: 18 }}>Inspiré par les plateformes open source de développement distant: l'interface orchestre, l'API gouverne, le moteur exécute sur VPS.</p></ShellCard>
        <ShellCard><h2>Flux d'exécution</h2>{flowSteps.map(([Icon,label]) => <p key={label} style={{ display: "flex", gap: 12, alignItems: "center" }}><Icon size={20}/>{label}</p>)}</ShellCard>
      </section>
      <section style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24, marginTop: 24 }}>
        <ShellCard><h2>Workspaces</h2>{workspaces.map((workspace) => <div key={workspace.id} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 12, padding: "16px 0", borderTop: "1px solid rgba(255,255,255,.08)" }}><div><strong>{workspace.name}</strong><p style={{ margin: "6px 0", color: "#94a3b8" }}>{workspace.template} · {workspace.owner} · {workspace.region}</p></div><StatusPill tone={workspace.status === "running" ? "success" : workspace.status === "starting" ? "warning" : "neutral"}>{workspace.status}</StatusPill></div>)}</ShellCard>
        <ShellCard><h2>Engine queue</h2>{engineJobs.map((job) => <p key={job.id} style={{ color: "#cbd5e1" }}>{job.kind} · {job.workspaceId} · {job.status}</p>)}</ShellCard>
      </section>
    </main>
  );
}
