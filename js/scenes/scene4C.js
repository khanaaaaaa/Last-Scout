const scene4C = {
  bg:        'assets/bg/wall.png',
  choicesBg: 'assets/bg/wall_choice.png',
  char:      'assets/chars/erwin.png',
  tag:       'Wall Maria  /  Inner Passage  /  09:20',
  rank:      'Veteran Scout',
  dialogue:  { speaker: 'Commander Erwin Smith', line: 'You made it. Good. I need someone skilled, lucky, or both.' },
  text: 'Erwin. One arm bandaged. Calm like a man who has already done the math.\n\n"Gate mechanism is jammed. Someone has to reach it manually. Alone."\n\nThe wall shudders behind you.',
  choices: [
    { label: 'I\'ll go.',                  next: 'scene5', effect: s => { s.erwin = true; s.brave = true; } },
    { label: 'Is there another way.',      next: 'scene5', effect: s => s.erwin = true },
    { label: 'Stay and guard Erwin.',      end:  'The gate never opens.\n\nYou watch the wall seal with people still on the other side.\n\n"This is the cost," Erwin says.\n\n-- MISSION FAILED' }
  ]
};
