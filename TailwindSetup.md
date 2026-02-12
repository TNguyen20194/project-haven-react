IF setup color using @theme

```js
@import "tailwindcss";

@theme inline {
  --color-bg: var(--bg);
  --color-fg: var(--fg);
  --color-card: var(--card);
  --color-border: var(--border);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
}

/* default (light) */
:root {
  --bg: rgb(255 255 255);
  --fg: rgb(15 23 42);
  --card: rgb(255 255 255);
  --border: rgb(226 232 240);
  --primary: rgb(59 130 246);
  --primary-foreground: rgb(255 255 255);
}

.theme-dark {
  --bg: rgb(2 6 23);
  --fg: rgb(226 232 240);
  --card: rgb(15 23 42);
  --border: rgb(51 65 85);
  --primary: rgb(99 102 241);
  --primary-foreground: rgb(255 255 255);
}

.theme-forest {
  --bg: rgb(250 255 245);
  --fg: rgb(20 83 45);
  --card: rgb(240 253 244);
  --border: rgb(187 247 208);
  --primary: rgb(34 197 94);
  --primary-foreground: rgb(5 46 22);
}

.theme-dark {
  outline: 4px solid red;
}
```


```js
import React, { createContext, useContext, useMemo, useState } from "react";

export type ThemeName = "light" | "dark" | "forest";

type ThemeCtx = {
  theme: ThemeName;
  setTheme: (t: ThemeName) => void;
};

const ThemeContext = createContext<ThemeCtx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>("light");
  const className = theme === "light" ? "" : `theme-${theme}`;

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={className}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
import { useTheme } from "./hooks/theme";

function ThemeButtons() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <button
        className="px-3 py-2 rounded border border-border"
        onClick={() => setTheme("light")}
      >
        Light
      </button>
      <button
        className="px-3 py-2 rounded border border-border"
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
      <button
        className="px-3 py-2 rounded border border-border"
        onClick={() => setTheme("forest")}
      >
        Forest
      </button>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-bg text-fg p-6 transition-all duration-300 ease-in-out">
      <ThemeButtons />

      <div className="mt-6 rounded-xl bg-card border border-border p-4">
        <button className="rounded bg-primary text-primary-foreground px-4 py-2">
          Primary
        </button>
      </div>
    </main>
  );
}

```