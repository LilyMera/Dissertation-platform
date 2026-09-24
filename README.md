
# CodeQuest

A child-friendly digital platform for teaching programming fundamentals
to children aged 7-12, built with Blockly. Final-year dissertation project
(QHO656), Southampton Solent University.

## What it does

CodeQuest teaches three core programming concepts — sequences, loops and
conditionals — through a maze-solving game. Children drag and connect
Blockly blocks (move forward, turn right, repeat, wall ahead?, if) to
guide a character to a goal across three levels of increasing difficulty.

## Project structure

index.html Screen markup (welcome, editor, result) + Blockly toolbox
css/style.css Visual style — retro, warm, high-contrast design
js/levels.js Level/maze data — grid layout, start, goal per level
js/blocks.js Custom Blockly blocks (move_forward, turn_right,
wall_ahead) and their JavaScript code generators
js/maze.js Maze rendering + async execution engine (moves the
character step by step, checks walls in real time)
js/main.js Screen navigation, level selection, Blockly workspace setup


## Status

All three levels are complete and fully playable:
- Level 1 (Sequences) — straight path
- Level 2 (Loops) — longer path, demonstrating the value of the `repeat` block
- Level 3 (Conditionals) — path with a turn, using a custom `wall_ahead?`
  block combined with Blockly's built-in `if` block

The execution engine uses async/await so that block-generated code runs
step by step in real time (required for Level 3's conditional logic to
work correctly).

Evaluated via expert/heuristic review (Hanna, Risden and Alexander, 1997),
following a delay to ethical clearance for testing with children that was
outside the project's control (see AE2 report, Section 3.3).

## Running locally

Open `index.html` directly in a modern browser (Chrome, Edge or Firefox
recommended). No installation, build step, or server is required.
 it's a static web page. An internet connection is needed, as the Blockly
library is loaded from a public CDN (unpkg.com).

## Notes on AI use

AI assistance was used throughout development — including scaffolding,
debugging (e.g. diagnosing a Blockly API version mismatch), designing
the async execution engine, and drafting explanatory code comments —
with concepts re-explained and reviewed by the developer at each stage.
See Appendix A of the AE2 report for the full AI use declaration.