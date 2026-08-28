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
  return "moveForward();\n";
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
  return "turnRight();\n";
};
