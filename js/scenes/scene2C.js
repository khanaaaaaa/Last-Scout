const scene2C = {
  bg:        'assets/bg/street.png',
  choicesBg: 'assets/bg/street_choice.png',
  char:      'assets/chars/mikasa.png',
  tag:       'Shiganshina  /  Residential District  /  07:05',
  rank:      'Scout Regiment',
  dialogue:  { speaker: 'Mikasa Ackerman', line: 'Take the child. I\'ll cover you. Don\'t stop.' },
  text: 'A hand under the rubble. A sound past crying.\n\nMikasa lands beside you. Blades drawn. Already scanning.\n\nA Titan at the end of the street. Ten meters. Moving fast.\n\nShe\'s waiting on you.',
  choices: [
    { label: 'Pull the child free and run.',      next: 'scene3', effect: s => { s.helped = true; s.mikasa = true; } },
    { label: 'Cover Mikasa while she pulls them.', next: 'scene3', effect: s => s.helped = true },
    { label: 'You can\'t move.',                  end:  'Mikasa pulls the child herself.\n\nShe doesn\'t look back.\n\nThe Titan does.\n\n-- YOU DIED' }
  ]
};
