const scene3B = {
  bg:        'assets/bg/titan.png',
  choicesBg: 'assets/bg/titan_choice.png',
  char:      'assets/chars/eren.png',
  tag:       'Wall Maria  /  Outer Gate  /  Collapse',
  rank:      'Scout Regiment',
  danger:    true,
  dialogue:  { speaker: 'Eren Yeager', line: '"Let go — I have to kill it. I have to kill them ALL."' },
  text: 'Eren fights you. He\'s stronger than he looks.\n\nHis eyes are somewhere else — somewhere dark. You\'ve heard what happened to his mother.\n\nYou hold him anyway.\n\nThe Titan passes. It didn\'t see you.\n\nEren goes quiet. Just for a moment.\n\n"...Thanks," he says. Like it costs him something.',
  choices: [
    { label: 'Get him to the rooftops', next: 'scene3', effect: s => { s.eren = true; s.helped = true; } }
  ]
};
