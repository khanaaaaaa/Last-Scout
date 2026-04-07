const scene2B = {
  bg:        'assets/bg/street.png',
  choicesBg: 'assets/bg/street_choice.png',
  char:      'assets/chars/armin.png',
  tag:       'Shiganshina  /  Residential District  /  07:06',
  rank:      'Scout Regiment',
  dialogue:  { speaker: 'Armin Arlert', line: 'East through the market. I know this district. Follow me.' },
  text: 'Armin grabs your arm. His voice shakes but his eyes don\'t.\n\n"Two blocks east, then north. Six minutes before they reach this street."\n\nHe needs an answer.',
  choices: [
    { label: 'Hold the rear. Keep them moving.', next: 'scene3', effect: s => s.armin = true },
    { label: 'Take point. Clear the route.',      next: 'scene3' },
    { label: 'Keep running.',                     next: 'scene3', effect: s => s.coward = true }
  ]
};
