const scene2A = {
  bg:        'assets/bg/titan.png',
  choicesBg: 'assets/bg/titan_choice.png',
  char:      'assets/chars/eren.png',
  tag:       'Wall Maria  /  Outer Gate  /  07:04',
  rank:      'Scout Regiment',
  danger:    true,
  dialogue:  { speaker: 'Eren Yeager', line: 'Don\'t freeze. Move. Now.' },
  text: 'Eren Yeager. Fifteen years old, shaking hands, murder in his eyes.\n\nHe\'s screaming at soldiers who have already given up.\n\nA Pure Titan rounds the corner behind him. Fifteen meters. He hasn\'t seen it.\n\nFour seconds.',
  choices: [
    { label: 'Fight alongside Eren',        next: 'scene3',  effect: s => s.eren = true },
    { label: 'Grab Eren and pull him back', next: 'scene3B', effect: s => s.eren = true },
    { label: 'Run. You have no gear.',      end:  'Three steps.\n\nThe hand comes down.\n\nEren watches.\n\n-- YOU DIED' }
  ]
};
