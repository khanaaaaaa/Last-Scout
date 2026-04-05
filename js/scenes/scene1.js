const scene1 = {
    bg: 'assets/bg/wall.png',
    char: null,
    tag: 'Year 850 · Shiganshina District · Wall Maria',
    text: 'The sirens tear through the morning.\n\nSomething has broken through the gate. The Colossal Titan. They said it was impossible.\n\nYou are a low-ranking Scout. No ODM gear. No plan.',
    choices: [
        { label: 'Stand and fight', next: 'scene2A' },
        { label: 'Run with the crowd', next: 'scene2B'},
        { label: 'Help a trapped child', next: 'scene2C', effect: s => s.helped = true }
    ]
};