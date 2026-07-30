# rmstopczynski.github.io

Personal portfolio site for Ryan Stopczynski — data governance & analytics engineer.

Live at **[rmstopczynski.github.io](https://rmstopczynski.github.io)**

## Stack

Plain HTML/CSS/JS — no build step, no framework. Deployed via GitHub Pages directly from `main`.

- `index.html` — page structure and content
- `style.css` — design system (custom properties for color/type/spacing)
- `script.js` — tab switching, scroll-reveal, active-nav-link tracking, sticky nav
- `Ryan_Stopczynski_Resume.pdf` — downloadable resume, linked from the hero and contact sections

## Design

A "systems telemetry" visual language — dark control-room palette, monospace data readouts, and an animated pipeline diagram in the hero — grounded in the actual subject matter of the projects showcased (ETL pipelines, Airflow DAGs, Kafka streams, data-governance catalogs) rather than a generic template look.

## Local development

No build tools required — clone and open `index.html` directly, or serve it with any static file server:

```bash
python -m http.server 8000
```

## Content updates

Project descriptions link out to each project's own README, which contains the full build log, architecture diagrams, and honest notes on tradeoffs and debugging — kept there rather than duplicated here so there's one source of truth per project.
