const scene5 = {
  bg:   'gate',
  char: null,
  tag:  'Wall Rose — Inner Gate · Last Light',
  rank: 'Veteran Scout',
  dialogue: null,
  text: 'The gate to Wall Rose.\n\nIt\'s open — barely. A crack of amber light through the stone.\n\nThe Survey Corps is holding the line behind you. You can hear the ODM gear, the screaming, the thunder of footsteps.\n\nYour legs have nothing left.\n\nThis is the last step.',
  choices: [
    {
      label: 'Run',
      end: state => {
        if (state.helped && state.levi)
          return '🌅  The child is through the gate.\n\nLevi sees you from the wall above.\n\nHe says nothing. But he nods once.\n\nFrom Levi, that is everything.\n\n"Dedicate your heart."\n— Survey Corps Oath';

        if (state.helped && state.erwin)
          return '🕊️  The child makes it.\n\nErwin records your name in the regiment log.\n\nNot as a hero. As a Scout who did their job.\n\nThat is enough.\n\n"The Scouts who died gave meaning to those who lived."\n— Erwin Smith';

        if (state.helped && state.eren)
          return '🕊️  The child makes it through.\n\nEren is somewhere in the crowd behind you.\n\nYears later, when the world calls him a monster, you will remember the rooftop.\n\nThe way he said thanks like it cost him something.';

        if (state.helped)
          return '🕊️  You push the child through the gate with the last of your strength.\n\nYou don\'t make it.\n\nThey will remember your face.\n\nSomeday they will tell someone about the Scout who carried them.\n\nThat someone will become a Scout because of you.';

        if (state.brave && state.erwin)
          return '⚔️  The gate opens.\n\nPeople flood through.\n\nErwin finds you afterward, sitting against the wall, unable to stand.\n\n"Good work, Scout," he says.\n\nYou don\'t know why that makes you cry.';

        if (state.coward)
          return '🥀  You make it through.\n\nYou are alive.\n\nArmin\'s face is in the crowd. He looks at you.\n\nHe doesn\'t say anything.\n\nNeither do you.\n\nYou will spend years trying to forget this day.\n\nYou never will.';

        if (state.eren)
          return '⚔️  You make it through.\n\nEren is somewhere behind you — you don\'t know if he survived.\n\nYears later, you will see his face on a wanted poster.\n\nYou will remember the rooftop.\n\nThe way he said thanks like it cost him something.';

        if (Math.random() < 0.15)
          return '🌅  You collapse past the gate.\n\nA medic rolls you over.\n\n"How did you make it?" she asks.\n\nYou have no answer.\n\nSometimes survival has no reason.\n\nThat is the hardest thing to live with.';

        return '💀  The gate begins to close.\n\nYou are close enough to touch the stone.\n\nNot close enough.\n\n"Every Scout who fell — fell moving forward."\n— Survey Corps Oath';
      }
    }
  ]
};
