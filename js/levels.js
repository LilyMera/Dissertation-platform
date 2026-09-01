/* ============================================
   levels.js
   0 = open path, 1 = wall. Coordinates are {row, col},
   starting at {0, 0} in the top-left corner.
   ============================================ */

const LEVELS = [
  {
    id: 1,
    name: "Sequences",
    instructions: "🏁 Help the character reach the flag by connecting blocks together!",
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
    instructions: "🏁 This path is longer — try using the 'repeat' block instead of many 'move forward' blocks!",
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    start: { row: 1, col: 1 },
    goal: { row: 1, col: 9 },
    locked: false,
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