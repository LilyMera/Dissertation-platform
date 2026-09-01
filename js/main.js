/* ============================================
   main.js
   Screen navigation, level selection, and wiring up
   the Blockly workspace + Run/Reset/Back buttons.
   ============================================ */

let workspace = null; // holds the active Blockly workspace

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((el) => el.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function renderLevelCards() {
  const container = document.getElementById("level-selector");
  container.innerHTML = "";

  LEVELS.forEach((level) => {
    const card = document.createElement("div");
    card.className = "level-card" + (level.locked ? " locked" : "");
    card.innerHTML = `Level ${level.id}<span class="level-sub">${level.name}</span>`;
    if (!level.locked) {
      card.addEventListener("click", () => openLevel(level.id));
    }
    container.appendChild(card);
  });
}

function openLevel(levelId) {
  const level = LEVELS.find((l) => l.id === levelId);
  document.getElementById("level-title").textContent = `Level ${level.id} · ${level.name}`;
  document.getElementById("level-instructions").textContent = level.instructions || "";
  showScreen("editor-screen");

  drawMaze(levelId);
  drawCharacter(level.start);

  // Set up a fresh Blockly workspace each time we enter a level.
  // (Disposing the old one first avoids memory leaks / duplicate workspaces.)
  if (workspace) workspace.dispose();
    workspace = Blockly.inject("blockly-div", {
    toolbox: document.getElementById("toolbox"),
    scrollbars: false,
    trashcan: true,
    renderer: "zelos",
    theme: Blockly.Themes.Zelos,
  });
  
}

document.getElementById("back-btn").addEventListener("click", () => {
  showScreen("welcome-screen");
});

document.getElementById("run-btn").addEventListener("click", () => {
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  if (!code.trim()) {
    setFeedback("Drag some blocks in first!");
    return;
  }
  runCode(code);
});

document.getElementById("reset-btn").addEventListener("click", () => {
  drawCharacter(currentLevel.start);
  setFeedback("Run your code to see if you reach the flag.");
});

document.getElementById("retry-btn").addEventListener("click", () => {
  showScreen("editor-screen");
  drawCharacter(currentLevel.start);
  setFeedback("Run your code to see if you reach the flag.");
});

document.getElementById("next-level-btn").addEventListener("click", () => {
  // TODO once Level 2 has a real grid: unlock and open it here.
  showScreen("welcome-screen");
});

document.addEventListener("DOMContentLoaded", () => {
  renderLevelCards();
});
