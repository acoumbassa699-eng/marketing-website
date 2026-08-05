import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Optimus Platform", description: "Cloud development control plane for Optimus." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body>{children}</body></html>;
}
