const scene3B = {
  bg:        'assets/bg/titan.png',
  choicesBg: 'assets/bg/titan_choice.png',
  char:      'assets/chars/eren.png',
  tag:       'Wall Maria  /  Outer Gate  /  07:08',
  rank:      'Scout Regiment',
  danger:    true,
  dialogue:  { speaker: 'Eren Yeager', line: 'Let go. I have to kill it. Let go of me.' },
  text: 'He fights like you\'re the enemy.\n\nYou hold on anyway.\n\nThe Titan passes. It doesn\'t see you.\n\nEren goes quiet. Three seconds of silence.\n\n"...Thanks." Like it costs him something.',
  choices: [
    { label: 'Get him to the rooftops.', next: 'scene3', effect: s => { s.eren = true; s.helped = true; } }
  ]
};
