import type React from "react"
import "../basehub.config"
import "../styles/globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import { basehub } from "basehub"
import { Toolbar } from "basehub/next-toolbar"
import { Providers } from "./providers"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  fallback: ["monaco", "monospace"],
})

export const dynamic = "force-static"
export const revalidate = 30

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Fetch settings for theme (with fallback)
  let theme = { colorScheme: "system" as const, appearance: "light" as const }
  
  try {
    const data = await basehub().query({
      settings: {
        theme: {
          colorScheme: true,
          appearance: true,
        },
      },
    })
    theme = data.settings.theme
  } catch (e) {
    // Use default theme
  }

  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`min-h-svh max-w-[100vw] bg-[--surface-primary] text-[--text-primary] dark:bg-[--dark-surface-primary] dark:text-[--dark-text-primary] ${geistMono.variable} ${geist.variable} font-sans`}
      >
        <Providers theme={theme}>
          <Toolbar />
          <main className="min-h-[calc(100svh-64px)]">{children}</main>
        </Providers>
      </body>
    </html>
  )
}

export const metadata = {
  generator: "v0.dev",
}
