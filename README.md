# mrkaqz.github.io

Personal site hosted on GitHub Pages at **[ronnarong.dev](https://www.ronnarong.dev)**.

## Projects

| Project | Description | Stack |
|---------|-------------|-------|
| [Simple Downlink](/downlink/) | Timing tool for satellite downlink command sequences. Generates precise HIGH/LOW signals with audio feedback. | PWA · v4.7 |
| [Queue](https://github.com/mrkaqz/queue) | Lightweight, self-hosted queue management system for small businesses (clinics, shops, service counters). TV display, operator panel, PWA push notifications & voice announcements. | Python · Docker · PWA |
| [Read Screen](https://github.com/mrkaqz/readscreen) | Windows OCR utility that captures live directional drilling surveys (Depth, Inc, Az) from the Rig Floor Console and exports to CSV. | Python · v1.5 |
| [LAS Analyzer](/las-analyzer/) | Browser-based tool for analyzing MWD/RSS drilling data from LAS 2.0 files. Drag-and-drop upload, outlier filtering, and interactive crossplot charts. | HTML · v2.1.0 |
| [Landing Projection](/landing/) | Browser-based Minimum Curvature calculator for directional drilling surveys. Three-station output, live TD slider, dogleg severity indicators & dual units. | HTML · v1.1 |
| [drillingDB](https://github.com/mrkaqz/drillingDB) | Local-network web app that digitises directional drilling motor output tracking. Batch import, cross-well analytics, BHA library & Excel export. | Python · FastAPI · v0.5 |
| [Question Viewer](/question/) | Browser-based viewer for e-learning quiz exports. Load a local `questionData.js.download` file to browse all questions with correct answers highlighted. Supports multiple choice, ordering, and drag-and-drop types with live search. | HTML · v1.0 |

## Structure

```
mrkaqz.github.io/
├── index.html        # Landing page
├── downlink/         # Simple Downlink app
├── landing/          # Directional Drilling Landing Projection tool
├── las-analyzer/     # LAS file analyzer
├── question/         # Question Viewer app
└── CNAME             # Custom domain config
```

## Deploy

Pushes to `main` deploy automatically via GitHub Pages. No build step required.
