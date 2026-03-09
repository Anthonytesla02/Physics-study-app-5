## Packages
react-markdown | Rendering markdown content for lessons
remark-math | Parsing math formulas in markdown
rehype-katex | Rendering math formulas to HTML using KaTeX
katex | CSS and fonts for KaTeX math rendering

## Notes
- App uses an explicit layout with a reading-focused textbook aesthetic.
- The user flow defaults to a simple username-based auth that creates a user if one doesn't exist (simulating the 404 -> Create flow).
- Needs `katex/dist/katex.min.css` imported for math to render correctly.
