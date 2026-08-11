/* ============================================
   main.js
   Wires up screen navigation and button events.
   This part is mostly plumbing (showing/hiding screens) —
   feel free to build on it directly rather than rewrite it.

   Still TODO here:
   - Render level cards into #level-selector from LEVELS
   - Initialise the Blockly workspace on #blockly-div when
     entering the editor screen
   - Wire #run-btn to call runCode() from maze.js
   - Wire #retry-btn / #next-level-btn on the result screen
   ============================================ */

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((el) => el.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

document.getElementById("back-btn").addEventListener("click", () => {
  showScreen("welcome-screen");
});

// Renders one clickable card per level, using the data in LEVELS (levels.js)
function renderLevelCards() {
  const container = document.getElementById("level-selector");
  container.innerHTML = "";

  LEVELS.forEach((level) => {
    const card = document.createElement("div");
    card.className = "level-card" + (level.locked ? " locked" : "");
    card.innerHTML = `<strong>Level ${level.id}</strong><br>${level.name}`;

    if (!level.locked) {
      card.addEventListener("click", () => openLevel(level.id));
    }
    container.appendChild(card);
  });
}

// Opens the editor screen for a given level and draws the maze + character.
// NOTE: this does not set up the Blockly workspace yet — that is next.
function openLevel(levelId) {
  const level = LEVELS.find((l) => l.id === levelId);
  document.getElementById("level-title").textContent = `Level ${level.id} · ${level.name}`;
  showScreen("editor-screen");

  // Canvas needs to exist and be visible before we draw on it
  drawMaze(levelId);
  drawCharacter(level.start);
}

document.addEventListener("DOMContentLoaded", () => {
  renderLevelCards();
});

// TODO: wire run-btn once blocks.js is implemented (next session)
document.getElementById("run-btn").addEventListener("click", () => {
  console.log("TODO: get code from Blockly workspace and call runCode()");
});

