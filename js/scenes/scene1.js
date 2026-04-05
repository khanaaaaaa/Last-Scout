const scene1 = {
  bg:   'breach',
  char: null,
  tag:  'Year 850 · Shiganshina · 7:00 AM',
  rank: 'Scout',
  dialogue: null,
  text: 'The ground shakes.\n\nA foot the size of a house crashes through the outer gate of Wall Maria.\n\nThe Colossal Titan. Steam pours off its body like a furnace. People scatter. Horses bolt.\n\nYou are a third-year Scout. No ODM gear. Your squad is gone. You are alone.',
  choices: [
    { label: '⚔️  Run toward the breach',          next: 'scene2A' },
    { label: '🏃  Evacuate with the civilians',     next: 'scene2B' },
    { label: '🤝  Help a child trapped in rubble',  next: 'scene2C', effect: s => s.helped = true }
  ]
};
