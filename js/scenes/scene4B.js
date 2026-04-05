const scene4B = {
    bg: 'assets/bg/shadows.png',
    char: null,
    tag: 'Shiganshina - Rooftop Shadows',
    text: 'You press flat against the chimney stack.\n\nBelow - heavy footsteps. A Titan, wandering.\n\nYou count your breaths the way Levi trained the new recruits: slow and controlled.',
    choices: [
        { label: 'Stay - it will pass', end: 'It didn\'t pass.\n\nYou stayed too long.\n\nThe roof gave way beneath its hand.' },
        { label: 'Move now', next: 'scene5' }
    ]
};