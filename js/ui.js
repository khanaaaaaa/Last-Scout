const charPortrait   = document.getElementById('char-portrait');
const charName       = document.getElementById('char-name');
const dialogueBox    = document.getElementById('dialogue-box');
const dialogueTab    = document.getElementById('dialogue-speaker-tab');
const dialogueLine   = document.getElementById('dialogue-line');

const CHAR_NAMES = {
  eren:   'Eren Yeager',
  mikasa: 'Mikasa Ackerman',
  armin:  'Armin Arlert',
  levi:   'Captain Levi',
  erwin:  'Commander Erwin Smith'
};

function setChar(scene) {
  if (scene.char) {
    charPortrait.style.backgroundImage = 'url("' + scene.char + '")';
    const key = scene.char.split('/').pop().replace('.png', '');
    charPortrait.setAttribute('data-char', key);
    charName.textContent       = CHAR_NAMES[key] || key;
    charPortrait.style.opacity = '0';
    charPortrait.style.display = 'block';
    charName.style.display     = 'block';
    setTimeout(() => { charPortrait.style.opacity = '1'; }, 2000);
  } else {
    charPortrait.style.opacity = '0';
    setTimeout(() => {
      charPortrait.style.display         = 'none';
      charName.style.display             = 'none';
      charPortrait.style.backgroundImage = 'none';
      charPortrait.removeAttribute('data-char');
    }, 600);
  }
}

function showDialogue(speaker) {
  dialogueTab.textContent = speaker;
  dialogueTab.classList.remove('hidden');
  dialogueLine.textContent = '';
  soundDialogue();
}

function hideDialogue() {
  dialogueTab.classList.add('hidden');
  dialogueLine.textContent = '';
}
