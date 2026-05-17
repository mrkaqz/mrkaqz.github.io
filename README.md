# mrkaqz.github.io

Personal site hosted on GitHub Pages at **[ronnarong.dev](https://www.ronnarong.dev)**.

## Projects

| Project | Description | Stack |
|---------|-------------|-------|
| [Landing Projection](/landing/) | Directional drilling well landing projection tool. Calculates Build Rate, Turn Rate, and DLS using the Minimum Curvature Method. Supports ft/m units, deg/100ft · deg/30m · deg/10m DLS rates, live TD depth slider, and footage-to-target callouts. | HTML · v1.0 |
| [Simple Downlink](/downlink/) | Timing tool for satellite downlink command sequences. Generates precise HIGH/LOW signals with audio feedback. | PWA · v4.5 |
| [Queue](https://github.com/mrkaqz/queue) | Lightweight, self-hosted queue management system for small businesses (clinics, shops, service counters). TV display, operator panel, PWA push notifications & voice announcements. | Python · Docker · PWA |
| [Read Screen](https://github.com/mrkaqz/readscreen) | Windows OCR utility that captures live directional drilling surveys (Depth, Inc, Az) from the Rig Floor Console and exports to CSV. | Python · v1.4 |
| [LAS Analyzer](https://www.ronnarong.dev/las-analyzer/) | Browser-based tool for analyzing MWD/RSS drilling data from LAS 2.0 files. Drag-and-drop upload, outlier filtering, and interactive crossplot charts. | HTML · v2.1.0 |
| [Landing Projection](https://www.ronnarong.dev/landing/) | Browser-based Minimum Curvature calculator for directional drilling surveys. Three-station output, live TD slider, dogleg severity indicators & dual units. | HTML · v1.1 |
| [drillingDB](https://github.com/mrkaqz/drillingDB) | Local-network web app that digitises directional drilling motor output tracking. Batch import, cross-well analytics, BHA library & Excel export. | Python · FastAPI · v0.5 |

## Structure

```
mrkaqz.github.io/
├── index.html        # Landing page
├── downlink/         # Simple Downlink app
├── landing/          # Directional Drilling Landing Projection tool
└── CNAME             # Custom domain config
```

## Deploy

Pushes to `main` deploy automatically via GitHub Pages. No build step required.
