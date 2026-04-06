const scene2C = {
  bg:        'assets/bg/street.png',
  choicesBg: 'assets/bg/street_choice.png',
  char:      'assets/chars/mikasa.png',
  tag:       'Shiganshina  /  Residential District',
  rank:      'Scout Regiment',
  dialogue:  { speaker: 'Mikasa Ackerman', line: '"You — Scout. Take the child. I\'ll cover you."' },
  text: 'Mikasa drops from a rooftop beside you, blades drawn, ODM gear hissing.\n\nShe doesn\'t ask. She points at the child pinned under a collapsed wall and looks at you.\n\nA Titan is half a block away.',
  choices: [
    { label: 'Pull the child free and run',           next: 'scene3', effect: s => { s.helped = true; s.mikasa = true; } },
    { label: 'Tell Mikasa you\'ll cover her instead', next: 'scene3', effect: s => s.helped = true },
    { label: 'Freeze — you cannot move',              end:  'Mikasa saves the child herself.\n\nShe doesn\'t look back at you.\n\nThe Titan does.\n\n— YOU DIED' }
  ]
};
