const scene5 = {
  bg:        'assets/bg/gate.png',
  choicesBg: 'assets/bg/gate_choice.png',
  char:      null,
  tag:       'Wall Rose  /  Inner Gate  /  Last Light',
  rank:      'Veteran Scout',
  dialogue:  null,
  text: 'The gate is still open.\n\nTwo hundred meters. Your legs stopped working properly three blocks back.\n\nThe amber light through the gate is the most beautiful thing you have ever seen.',
  choices: [
    {
      label: 'Run.',
      end: state => {
        if (state.helped && state.levi)
          return 'The child goes through first.\n\nLevi is on the wall above. He nods. Once.\n\nFrom Levi, that is everything.\n\nYou don\'t make it through.\n\n-- MISSION COMPLETE';

        if (state.helped && state.erwin)
          return 'The child makes it.\n\nErwin writes your name in the regiment log. Not the casualty column. The other one.\n\n-- MISSION COMPLETE';

        if (state.helped && state.eren)
          return 'The child makes it.\n\nYears later you\'ll see Eren\'s face on a wanted poster.\n\nYou\'ll remember: I knew him before.\n\n-- MISSION COMPLETE';

        if (state.helped)
          return 'You push the child through with everything you have left.\n\nThe gate closes.\n\nYou are on the wrong side.\n\n-- END';

        if (state.brave && state.erwin)
          return 'The gate opens. People flood through.\n\nErwin finds you against the wall, unable to stand.\n\n"Good work, Scout."\n\nYou don\'t know why that makes you cry.\n\n-- MISSION COMPLETE';

        if (state.coward)
          return 'You make it through.\n\nArmin sees you in the crowd. He looks at you.\n\nThen looks away.\n\n-- END';

        if (state.eren)
          return 'You make it through.\n\nYou never find out if Eren did.\n\n-- END';

        if (Math.random() < 0.15)
          return 'You make it through. You don\'t know how.\n\nNeither does the medic.\n\n-- END';

        return 'The gate closes.\n\nYou are close enough to touch the stone.\n\nNot close enough.\n\n-- YOU DIED';
      }
    }
  ]
};
