const scene4A = {
  bg:        'assets/bg/rooftop.png',
  choicesBg: 'assets/bg/rooftop_choice.png',
  char:      'assets/chars/levi.png',
  tag:       'Shiganshina  /  Rooftops  /  09:12',
  rank:      'Veteran Scout',
  dialogue:  { speaker: 'Captain Levi', line: 'East. Stay low. Don\'t be a hero.' },
  text: 'One finger. East. That\'s your entire briefing.\n\nThen he\'s gone. ODM gear, three buildings, four seconds.\n\nYou are alone. But you have a direction.',
  choices: [
    { label: 'Follow Levi\'s route east.',        next: 'scene5' },
    { label: 'Go west. You saw survivors there.', end:  'Levi\'s route was east for a reason.\n\nThe Armored Titan steps through the western wall.\n\nThere is no western route.\n\n-- YOU DIED' }
  ]
};
