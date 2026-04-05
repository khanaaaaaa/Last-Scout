const scene4B = {
  bg:   'flare',
  char: null,
  tag:  'Shiganshina — Above the Smoke',
  rank: 'Scout',
  dialogue: null,
  text: 'You fire a red flare.\n\nIt tears through the smoke and hangs in the sky like a dying star.\n\nFor three seconds, everything is still.\n\nThen — from across the district — two green flares answer.\n\nSomeone is alive. Someone saw you.',
  choices: [
    { label: 'Move toward the green flares',    next: 'scene5' },
    { label: 'Fire a second flare to confirm',  end:  '💀  The second flare gives away your position.\n\nNot to the Scouts.\n\nTo the fifteen-meter Titan that had been standing perfectly still in the smoke.' }
  ]
};
