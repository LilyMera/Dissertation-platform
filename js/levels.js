/* ============================================
   levels.js
   Defines the maze layout and goal for each level.

   TODO (your implementation):
   - Represent each maze as a grid (e.g. 2D array) where
     0 = open path, 1 = wall.
   - Define a start position and a goal position per level.
   - Level 1: straight path (Sequences)
   - Level 2: repeating pattern (Loops)
   - Level 3: branching path with a decision point (Conditionals)
   - Level 4 (optional): add a collectible/counter (Variables)
   ============================================ */

const LEVELS = [
  {
    id: 1,
    name: "Sequences",
    // TODO: replace with your real grid + start/goal coordinates
    grid: null,
    start: null,
    goal: null,
    locked: false,
  },
  {
    id: 2,
    name: "Loops",
    grid: null,
    start: null,
    goal: null,
    locked: true,
  },
  {
    id: 3,
    name: "Conditionals",
    grid: null,
    start: null,
    goal: null,
    locked: true,
  },
  // Level 4 (Variables) — optional, add once 1-3 are working
];
