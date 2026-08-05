import { ThemeProvider } from "next-themes";
import { BaseHubThemeProvider } from "../context/basehub-theme-provider";
import { TooltipProvider } from "../common/tooltip";

export function Providers({ children, theme }: { children: React.ReactNode; theme: Parameters<typeof BaseHubThemeProvider>[0]["theme"] }) {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system">
      <BaseHubThemeProvider theme={theme} />
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
