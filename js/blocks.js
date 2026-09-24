/* ============================================
   blocks.js
   Defines the two custom blocks children will drag into
   the workspace: "move forward" and "turn right".
   The "repeat" block is not custom — we use Blockly's
   own built-in block (controls_repeat_ext), which already
   looks similar to the wireframe and saves us from writing
   loop logic ourselves.

   Every Blockly block has TWO parts:
   1. Blockly.Blocks[...] — defines what the block looks like
      (its shape, text, colour, and how it connects to others).
   2. Blockly.JavaScript[...] — defines what line(s) of JS code
      the block should produce when the workspace is converted
      to code. We don't run real movement logic here — we just
      output a call to a function (moveForward(), turnRight())
      that we define ourselves in maze.js.
   ============================================ */

Blockly.Blocks["move_forward"] = {
  init: function () {
    this.appendDummyInput().appendField("move forward");
    this.setPreviousStatement(true, null); // can connect below another block
    this.setNextStatement(true, null); // can have another block connect below it
    this.setColour(170); // teal-ish, matches the wireframes
    this.setTooltip("Moves the character one step forward.");
  },
};

Blockly.JavaScript.forBlock["move_forward"] = function (block, generator) {
  return "await moveForward();\n";
};

Blockly.Blocks["turn_right"] = {
  init: function () {
    this.appendDummyInput().appendField("turn right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(170);
    this.setTooltip("Turns the character 90° to the right.");
  },
};

Blockly.JavaScript.forBlock["turn_right"] = function (block, generator) {
  return "await turnRight();\n";
};
Blockly.Blocks["wall_ahead"] = {
  init: function () {
    this.appendDummyInput().appendField("wall ahead?");
    this.setOutput(true, "Boolean"); // this block returns a value (true/false) rather than connecting to other blocks
    this.setColour(210);
    this.setTooltip("True if there is a wall directly in front of the character.");
  },
};

Blockly.JavaScript.forBlock["wall_ahead"] = function (block, generator) {
  return ["isWallAhead()", 0];
};
//  "wall_ahead?" is a value-returning block (Boolean), unlike move_forward
// and turn_right which are action blocks. Because it answers a question
// rather than performing a step, it uses setOutput() instead of
// setPreviousStatement/setNextStatement, so it can be plugged into the
// condition slot of an "if" block rather than connecting above/below
// other blocks in a sequence.