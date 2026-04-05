const scene3 = {
  bg:   'rooftop',
  char: 'levi',
  tag:  'Shiganshina — Rooftops · 9:00 AM',
  rank: 'Scout',
  dialogue: { speaker: 'Captain Levi', line: '"Stop breathing so loud. You\'re not dead yet — act like it."' },
  text: 'You reach the rooftops.\n\nCaptain Levi is already here, crouched on a chimney stack, scanning the district below with cold eyes.\n\nHe glances at you once.\n\n"Gate\'s still open. Erwin\'s holding the inner wall with what\'s left of the regiment. You have one job — get there."',
  choices: [
    { label: 'Follow Levi\'s orders',              next: 'scene4A', effect: s => s.levi = true },
    { label: 'Fire a signal flare for survivors',  next: 'scene4B' },
    { label: 'Descend and find Commander Erwin',   next: 'scene4C', effect: s => s.erwin = true }
  ]
};
