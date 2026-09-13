# FTC Team 6198 — Lobster Machine Website

A static website for FIRST Tech Challenge Team 6198 (Lobster Machine), designed for **Vercel** deployment.

## Project structure

```text
/
├── index.html
├── team.html
├── mentors.html
├── status.html
├── events.html
├── sponsors.html
├── vercel.json
└── assets/
    ├── css/
    │   └── site.css
    ├── js/
    │   ├── data.js
    │   └── site.js
    ├── images/
    │   ├── Logo.webp
    │   ├── LeagueMeet1-Picture1-480w.webp
    │   ├── LeagueMeet1-Picture1-960w.webp
    │   ├── LeagueMeet1-Picture1-1600w.webp
    │   └── ...
    └── members/
        └── (approved member/mentor photos go here)
```

## Vercel deployment

1. Put this folder in a GitHub repository.
2. In Vercel, select **Add New → Project**.
3. Import the GitHub repository.
4. Framework preset: **Other** (or leave Vercel to detect the static site).
5. Build command: **leave empty**.
6. Output directory: **leave empty / repository root**.
7. Deploy.

The site is intentionally dependency-free. There is no Node build step required.

## Images

The competition photos originally came from high-resolution phone images. They were optimized for the web before being placed in `assets/images/`:

- Original dimensions are reduced to a practical 1600px maximum dimension.
- WebP versions are supplied at **480px, 960px, and 1600px** widths.
- Optimized JPEG files remain as a fallback.
- EXIF metadata is removed from the web copies, including location metadata.
- Gallery images use responsive `srcset`/`sizes` so mobile devices do not download desktop-sized images unnecessarily.
- Below-the-fold gallery images use lazy loading and asynchronous decoding.
- Images have explicit dimensions to minimize layout shift.
- Vercel caches `/assets/*` for one year with immutable caching.

### Adding a new competition photo

For a new image, create responsive WebP versions at approximately 480px, 960px, and 1600px widths and an optimized JPEG fallback. Then copy the same `<picture>` pattern used in `events.html`.

Do **not** upload raw phone photos directly into the public site when an optimized version can be used.

## Member and mentor photos

The source archive did not include individual headshots. Do not assign competition photos to named students unless the identity is confirmed.

Place approved headshots in:

```text
assets/members/
```

Then edit `assets/js/data.js`:

```js
photo: "assets/members/anant-parikh.webp"
```

Recommended headshot format:

- consistent crop, approximately 4:3
- school-appropriate
- WebP preferred
- roughly 800px wide is more than enough for the cards

The Team page already provides responsive image handling for supplied member photos.

## Email routing

The site uses Proton Mail plus-addresses that match the team's Sieve rules:

| Address | Purpose |
| --- | --- |
| `bhs.ftc6198@proton.me` | General team email |
| `bhs.ftc6198+sponsorship@proton.me` | Sponsorship / finance inquiries → `Finances` |
| `bhs.ftc6198+events@proton.me` | Events / outreach → `Outreach Inquiries` |
| `bhs.ftc6198+mentors@proton.me` | Mentor inquiries → `Mentors` flag |
| `bhs.ftc6198+team@proton.me` | Team inquiries → `Team` flag |
| `bhs.ftc6198+photo-submission@proton.me` | Photo submissions → `Photo Submissions` |

## Editing content

- **Team / mentor names, roles, bios:** `assets/js/data.js`
- **Global colors, layout, cards, typography:** `assets/css/site.css`
- **Theme toggle, mobile navigation, image error handling:** `assets/js/site.js`
- **Home page:** `index.html`
- **Team page:** `team.html`
- **Events/gallery:** `events.html`
- **Sponsors:** `sponsors.html`
- **Progress/build log:** `status.html`
- **Mentors:** `mentors.html`

## Design principles

The website prioritizes:

1. **Immediate comprehension** — visitors should understand who the team is within seconds.
2. **Credibility** — competition results, people, work, and partners are presented as evidence.
3. **Human connection** — team members and their roles are visible instead of treating the robot as the entire story.
4. **Low-friction sponsorship** — sponsorship is a primary navigation and conversion path.
5. **Progressive disclosure** — short summaries lead into deeper team, progress, event, and sponsorship information.
6. **Performance** — especially important for visitors on phones at competitions or community events.
7. **Maintainability** — repeated data and behavior are centralized so future students can edit the site without hunting through every page.

## Before publishing

- Add approved student headshots.
- Confirm the current sponsor list and sponsorship benefits.
- Confirm all competition dates before each season.
- Verify the donation/501(c)(3) language with the school/program before making tax-related claims.
- Test every email link.
- Test the site in both light and dark mode on mobile and desktop.

---

## About Team 6198

FTC Team 6198, Lobster Machine, is a student robotics team from Barrington High School. Learn more at the [team website](https://ftc6198-bhs.github.io).

The team builds, programs, and competes with robots while developing engineering, leadership, and outreach skills.

## License

The website code is released under the MIT License in [LICENSE](LICENSE).
