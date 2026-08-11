# CodeQuest

A child-friendly digital platform for teaching programming fundamentals
to children aged 7-12, built with Blockly. Dissertation project (QHO656),
Southampton Solent University.

## Project structure

```
index.html        Screen markup (welcome, editor, result)
css/style.css      Visual style, based on the wireframes (Design section, AE2)
js/levels.js       Level/maze data — grid layout, start, goal per level
js/blocks.js       Custom Blockly block definitions (Move, Turn, Repeat...)
js/maze.js         Maze rendering + character movement/execution engine
js/main.js         Screen navigation and event wiring
```

## Status

Skeleton created 11 Aug 2026. UI shell and screen navigation in place;
core logic (blocks, maze rendering, code execution) still to be implemented —
see TODO comments in each file.

## Running locally

Just open `index.html` in a browser — no build step required for now.
If Blockly's CDN script causes issues offline, download the Blockly
library locally into a `lib/` folder and update the `<script>` src in
`index.html`.

## Notes on AI use

Parts of this starter scaffold (HTML structure, CSS, file layout, and
TODO comments) were drafted with AI assistance to save setup time.
The core logic (block definitions, maze/movement engine) is implemented
manually. See Appendix A of the AE2 report for the full AI use declaration.
