/* ============================================
   levels.js
   Defines the maze layout and goal for each level.

   The maze is represented as a grid: an array of rows,
   where each row is an array of numbers.
     0 = open path (the character can walk here)
     1 = wall (blocked)

   Coordinates are given as {row, col}, starting at {0, 0}
   in the top-left corner.
   ============================================ */

const LEVELS = [
  {
    id: 1,
    name: "Sequences",
    // A simple straight corridor: one open row surrounded by walls.
    // The character just needs 5 "move forward" blocks to reach the goal.
    grid: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ],
    start: { row: 1, col: 1 },
    goal: { row: 1, col: 5 },
    locked: false,
  },
  {
    id: 2,
    name: "Loops",
    // TODO: design a maze where the same short pattern repeats
    // several times — this is what makes a loop useful here.
    grid: null,
    start: null,
    goal: null,
    locked: true,
  },
  {
    id: 3,
    name: "Conditionals",
    // TODO: design a maze with a branching point, so the child
    // needs an "if there is a wall, turn" block to solve it.
    grid: null,
    start: null,
    goal: null,
    locked: true,
  },
  // Level 4 (Variables) — optional, add once 1-3 are working
];

