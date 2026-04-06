const scene2A = {
  bg:        'assets/bg/titan.png',
  choicesBg: 'assets/bg/titan_choice.png',
  char:      'assets/chars/eren.png',
  tag:       'Wall Maria  /  Outer Gate',
  rank:      'Scout Regiment',
  danger:    true,
  dialogue:  { speaker: 'Eren Yeager', line: '"Don\'t just stand there — MOVE. If you freeze, you die."' },
  text: 'Eren is here — still human, still a cadet. He\'s screaming at a group of frozen soldiers.\n\nHis eyes are wild. You\'ve heard the stories. His mother was eaten here.\n\nA fifteen-meter Pure Titan rounds the corner. It hasn\'t seen you yet.',
  choices: [
    { label: 'Fight alongside Eren',        next: 'scene3',  effect: s => s.eren = true },
    { label: 'Grab Eren and pull him back', next: 'scene3B', effect: s => s.eren = true },
    { label: 'Run — you have no gear',      end:  'The Titan\'s hand closes around you before you take three steps.\n\nEren watches.\n\nHe will remember your face as one of the ones who ran.\n\n— YOU DIED' }
  ]
};
