const scene2C = {
    bg: 'assets/bg/street.png',
    char: 'assets/chars/mikasa.png',
    tag: 'Shiganshina - Residential District',
    text: 'A child is pinned under fallen debris, screaming.\n\nMikasa would not hesitate. You think of her, and you don\'t either.',
    choices: [
        { label: 'Pull them free and carry them', next: 'scene3', effect: s => s.helped = true },
        { label: 'You can\'t carry them. Leave.', next: 'scene3', effect: s => s.selfish = true }
    ]
};