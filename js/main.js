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

// TODO: replace with real level-card rendering from LEVELS (levels.js)
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("level-selector");
  container.innerHTML = "<p>TODO: render level cards from LEVELS here.</p>";
});

// TODO: wire run-btn once blocks.js / maze.js are implemented
document.getElementById("run-btn").addEventListener("click", () => {
  console.log("TODO: get code from Blockly workspace and call runCode()");
});
