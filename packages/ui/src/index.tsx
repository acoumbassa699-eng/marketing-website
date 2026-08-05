import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { clsx } from "clsx";

export function ShellCard({ className, ...props }: ComponentPropsWithoutRef<"section">) {
  return <section className={clsx("rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl", className)} {...props} />;
}

export function StatusPill({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "success" | "warning" }) {
  const tones = { neutral: "bg-slate-500/15 text-slate-200", success: "bg-emerald-500/15 text-emerald-200", warning: "bg-amber-500/15 text-amber-200" };
  return <span className={clsx("rounded-full px-3 py-1 text-xs font-semibold", tones[tone])}>{children}</span>;
}
