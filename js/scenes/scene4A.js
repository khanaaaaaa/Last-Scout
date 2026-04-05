const scene4A = {
  bg:   'rooftop',
  char: 'levi',
  tag:  'Shiganshina — Rooftops',
  rank: 'Veteran Scout',
  dialogue: { speaker: 'Captain Levi', line: '"East route. Stay low. Don\'t be a hero — heroes are just corpses with good timing."' },
  text: 'Levi doesn\'t waste words.\n\nHe points east. One finger. That\'s your entire briefing.\n\nThen he\'s gone — ODM gear firing, a blur between rooftops, already three buildings away.\n\nYou are alone again. But you have a direction.',
  choices: [
    { label: 'Follow Levi\'s route east',         next: 'scene5' },
    { label: 'Go west — you saw survivors there', end:  '💀  Levi\'s route was east for a reason.\n\nYou find out why when the Armored Titan steps through the western wall.\n\nThere is no western route anymore.' }
  ]
};
