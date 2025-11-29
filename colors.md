Colors & CSS Variables

This project uses a unified stylesheet across pages. Below is the canonical palette and the CSS variables defined in the root and their dark-mode overrides.

Light mode (defaults)
- --accent: #ff4d88  (pink; used for primary actions, CTAs, and gradients)
- --accent-dark: #d32f2f  (red; used for hover states, darker gradient stop)
- --muted: #6b6b6b  (muted text)
- --bg: #ffffff  (page background)
- --card: #ffffff  (card/panel background)
- --pink-bg: #fff5f8  (light pink used for tags/pills)
- --text: #0b1220  (primary text color)
- --shadow: 0 6px 20px rgba(0,0,0,0.08)
- --max-width: 1100px
- --radius: 12px

Dark mode (applies when `body.dark` is present)
- --bg: #000000  (black page background)
- --card: #3b0b0b  (maroon card/panel background)
- --accent: #ff8a00  (orange primary accent in dark)
- --accent-dark: #d35400  (darker orange stop)
- --muted: #b0b0b0

Notes
- Mobile browsers and OS UI now use the light-mode `--accent` value for the page theme color via the `<meta name="theme-color" content="#ff4d88">` tag on each page.
- To change the site accent globally, update `--accent` and `--accent-dark` in the top-level `:root` definition inside the HTML `<style>` blocks.
- The dark mode values are applied by toggling `body.dark` (existing JS toggles in the pages toggle this class).

How to preview colors quickly
- Open any page and toggle dark mode (the site already includes JS to toggle `body.dark`).
- For more precise changes, edit the hex value and refresh the page.

If you want, I can output a small image swatch file or JSON palette file for design tools next.