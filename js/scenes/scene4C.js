const scene4C = {
  bg:   'wall',
  char: 'erwin',
  tag:  'Wall Maria — Inner Passage',
  rank: 'Veteran Scout',
  dialogue: { speaker: 'Commander Erwin Smith', line: '"You made it this far. That means you\'re skilled, lucky, or both. I need both right now."' },
  text: 'Erwin is standing in the passage between the walls, one arm already bandaged, directing the retreat with the calm of a man who has accepted he might not survive the day.\n\nHe looks at you the way he looks at everyone — calculating exactly what you\'re worth.\n\n"I need a runner. The gate mechanism is jammed. Someone has to reach it."',
  choices: [
    { label: 'Volunteer — run for the gate',  next: 'scene5', effect: s => { s.erwin = true; s.brave = true; } },
    { label: 'Ask if there\'s another way',   next: 'scene5', effect: s => s.erwin = true },
    { label: 'Stay and guard Erwin',          end:  '💀  The gate never opens.\n\nErwin survives.\n\nYou both watch the wall close with people still on the other side.\n\n"This is the cost," Erwin says quietly.\n\nYou will hear those words for the rest of your life.' }
  ]
};
