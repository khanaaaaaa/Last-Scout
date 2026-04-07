const scene4B = {
  bg:        'assets/bg/flare.png',
  choicesBg: 'assets/bg/flare_choice.png',
  char:      null,
  tag:       'Shiganshina  /  Above the Smoke  /  09:15',
  rank:      'Scout Regiment',
  dialogue:  null,
  text: 'Red flare. Straight up.\n\nYou count. One. Two. Three. Four. Five.\n\nTwo green flares answer from the northeast.\n\nSomeone is alive. Someone is still thinking.',
  choices: [
    { label: 'Move toward the green flares.',   next: 'scene5' },
    { label: 'Fire a second flare to confirm.', end:  'The Titan forty meters to your left had been standing still for three minutes.\n\nYour second flare gave it a reason to move.\n\n-- YOU DIED' }
  ]
};
