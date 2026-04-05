const scene2A = {
    bg: 'assets/bg/wall.png',
    char: 'assets/chars/eren.png',
    tag: 'Wall Maria - Outer Gate',
    text: 'You charge toward the breach. Through the dust you see it, a Pure Titan, fifteen meters, eyes locked on you.\n\nBehind you, Eren\'s voice echoes in your memory: "I\'ll kill every  last one of them."\n\nYou are not Eren.',
    choices: [
        { label: 'Attack - draw its attention', end: 'It didn\'t even look at you.\n\You were too slow.\n\nThe Scouts will find your gear. Not you.' },
        { label: 'Fall back - live to fight', next: 'scene3' }
    ]
};