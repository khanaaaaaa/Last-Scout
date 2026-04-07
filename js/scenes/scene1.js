const scene2B = {
  bg:        'assets/bg/street.png',
  choicesBg: 'assets/bg/street_choice.png',
  char:      'assets/chars/armin.png',
  tag:       'Shiganshina  //  Residential District',
  rank:      'Scout Regiment',
  dialogue:  { speaker: 'Armin Arlert', line: '"There\'s a route through the market. Follow me. I know this district."' },
  text: 'Armin is directing civilians through a side street, his voice shaking but his mind sharp.\n\nHe spots your Scout uniform and grabs your arm.\n\n"I need someone who can hold the rear. The Titans are two blocks back."',
  choices: [
    { label: 'Hold the rear with Armin',             next: 'scene3', effect: s => s.armin = true },
    { label: 'Take point — clear the route ahead',   next: 'scene3' },
    { label: 'Keep running — every man for himself', next: 'scene3', effect: s => s.coward = true }
  ]
};
