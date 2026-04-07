const scene3 = {
  bg:        'assets/bg/rooftop.png',
  choicesBg: 'assets/bg/rooftop_choice.png',
  char:      'assets/chars/levi.png',
  tag:       'Shiganshina  /  Rooftops  /  09:00',
  rank:      'Scout Regiment',
  dialogue:  { speaker: 'Captain Levi', line: 'You\'re not dead yet. Stop acting like it.' },
  text: 'The rooftops are quiet. Below, Shiganshina burns.\n\nLevi is already here. Watching. Calculating.\n\n"Gate\'s still open. Erwin\'s holding the inner wall. One job. Get there."',
  choices: [
    { label: 'Follow Levi\'s orders.',         next: 'scene4A', effect: s => s.levi = true },
    { label: 'Fire a signal flare.',           next: 'scene4B' },
    { label: 'Find Commander Erwin.',          next: 'scene4C', effect: s => s.erwin = true }
  ]
};
