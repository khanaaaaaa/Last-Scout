const scene2B = {
    bg: 'assets/bg/street.png',
    char: 'assets/chars/armin.png',
    tag: 'Shiganshina - Residential District',
    text: 'The crowd surges. You move with it.\n\nArmin once said: "Someone who can\'t sacrifice anything can never change anything."\n\nYou keep running. The smoke swallows the street behind you.',
    choices: [
        { label: 'Keep running toward the inner gate', next: 'scene3' },
        { label: 'Duck into a building and hide', end: 'The Titans don\'t search buildings.\n\nBut the fire does.\n\nThey always check the shadows.' }
    ]
};