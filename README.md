# FTC Team 6198 — Lobster Machine

A deliberately simple static website for a student robotics team.

## Principles

- Content lives in HTML rather than being assembled at runtime.
- CSS provides the visual system; JavaScript is limited to navigation and theme interaction.
- No framework or build step is required.
- Placeholder content is labeled instead of being presented as fact.
- Team/student information should be verified and approved before publication.

## Structure

- `index.html` — team overview
- `team.html` — student roster and mentors
- `engineering.html` — engineering process
- `competition.html` — competition archive
- `outreach.html` — community work
- `sponsors.html` — partners and sponsorship
- `assets/css/site.css` — design system and layout
- `assets/js/site.js` — navigation/theme interaction only

## Updating the site

When information changes, edit the relevant HTML page. Do not create a new JavaScript data layer for static content.

Before publishing student information, verify names, roles, photographs, and publication permissions with the appropriate team/school staff.

## Deployment

The site can be deployed directly to Vercel as a static project. No build command is required.
