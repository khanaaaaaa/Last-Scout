const scene5 = {
  bg:   'assets/bg/gate.png',
  char: null,
  tag:  'Wall Rose — Inner Gate · Last Light',
  text: 'The gate to Wall Rose.\n\nIt\'s still open — barely. The Survey Corps is holding the line.\n\nYour legs have nothing left. Your lungs burn.\n\nThis is the moment.',
  choices: [
    {
      label: 'Run',
      end: state => {
        if (state.helped)
          return 'The child makes it through the gate.\n\nYou push them forward with the last of your strength.\n\nYou don\'t make it.\n\n"The Scouts who died gave meaning to those who lived."\n— Erwin Smith';
        if (state.selfish)
          return 'You make it through.\n\nYou are alive.\n\nThe child\'s face stays with you.\n\nNo one will ever know your name — or what you left behind.';
        if (Math.random() < 0.2)
          return 'You collapse past the gate.\n\nSomehow — still breathing.\n\n"I don\'t know how you made it," a medic says.\n\nNeither do you.';
        return 'The gate begins to close.\n\nYou are ten steps away.\n\nThen five.\n\nThen the world goes quiet.\n\n"Every Scout who fell — fell moving forward."\n— Survey Corps Oath';
      }
    }
  ]
};
