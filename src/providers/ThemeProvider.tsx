import { useEffect } from "react";
import type { Theme } from "../styles/theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  root.style.setProperty("--bg", theme.colors.bg);
  root.style.setProperty("--card", theme.colors.card);
  root.style.setProperty("--text", theme.colors.text);
  root.style.setProperty("--muted", theme.colors.muted);
  root.style.setProperty("--accent", theme.colors.accent);

  root.style.setProperty("--container", theme.layout.container);
  root.style.setProperty("--pad", theme.layout.pad);
}

export default function ThemeProvider({
  theme,
  children,
}: {
  theme: Theme;
  children: React.ReactNode;
}) {
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return <>{children}</>;
}
