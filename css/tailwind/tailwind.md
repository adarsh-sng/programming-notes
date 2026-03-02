@theme (Tailwind v4 Exclusive)

@theme {
  --color-neon-blue: #00f3ff;
  --font-display: "Satoshi", sans-serif;
}

can use classes like text-neon-blue and font-display in your HTML automatically.

---
@layer (CSS Layers in Tailwind)
Tailwind organizes its styles into three distinct layers to prevent conflicts:

base (Lowest priority): Resets and defaults (e.g., removing default browser margins).

components (Medium priority): Card styles, button styles.

utilities (Highest priority): Single-purpose classes like text-red-500 or p-4.

---
cn -> clsx twmerge

--

asChild 