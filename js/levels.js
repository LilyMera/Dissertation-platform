/* ============================================
   levels.js
   0 = open path, 1 = wall. Coordinates are {row, col},
   starting at {0, 0} in the top-left corner.
   ============================================ */

const LEVELS = [
  {
    id: 1,
    name: "Sequences",
    instructions: "Use the blocks to move the character to the flag by connecting them in sequence! 🏁",
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
];
