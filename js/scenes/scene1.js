const scene1 = {
  bg:        'assets/bg/breach.png',
  choicesBg: 'assets/bg/breach_choice.png',
  char:      null,
  tag:       'Year 850  /  Shiganshina  /  07:00',
  rank:      'Scout Regiment',
  dialogue:  null,
  text: 'The gate is gone.\n\nWhere stone stood, there is now a hole and through it, steam. The Colossal Titan. Sixty meters. Looking down at Shiganshina like it is nothing.\n\nYour squad is gone. No ODM gear. Just you.\n\nThirty seconds before the first Titans follow it through.',
  choices: [
    { label: 'Run toward the breach',         next: 'scene2A' },
    { label: 'Evacuate with the civilians',    next: 'scene2B' },
    { label: 'Help a child trapped in rubble', next: 'scene2C', effect: s => s.helped = true }
  ]
};
