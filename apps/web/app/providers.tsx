import { ThemeProvider } from "next-themes";
import { BaseHubThemeProvider } from "../context/basehub-theme-provider";
import { TooltipProvider } from "../common/tooltip";

// Default theme values expected by BaseHubThemeProvider
const defaultTheme = {
  accent: "orange",
  grayScale: "neutral",
};

export function Providers({ children, theme }: { children: React.ReactNode; theme?: { accent?: string; grayScale?: string; colorScheme?: string; appearance?: string } }) {
  // Merge with defaults to ensure accent and grayScale are always present
  const resolvedTheme = {
    accent: theme?.accent ?? defaultTheme.accent,
    grayScale: theme?.grayScale ?? defaultTheme.grayScale,
  };
  
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system">
      <BaseHubThemeProvider theme={resolvedTheme as { accent: string; grayScale: string }} />
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
