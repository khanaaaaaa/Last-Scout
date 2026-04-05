const scene4A = {
    bg: 'assets/bg/flare.png',
    char: null,
    tag: 'Shiganshina - Above the Smoke',
    text: 'The red flare splits the sky.\n\nFor a second it\'s beautiful - the way Hange always said battle could be, if you weren\'t dying in it.\n\nSomething below turns its head upward.',
    choices: [
        { label: 'Wait - someone will see it.', end: 'They saw it.\n\nJust not who you were hoping for.\n\n"Even in death, a Scout\'s flare guides others." - Survey Corps motto' },
        { label: 'Move now, before it locates you.', next: 'scene5' }
    ]
};