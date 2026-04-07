const charPortrait = document.getElementById('char-portrait');
const charName     = document.getElementById('char-name');
const loreTag      = document.getElementById('lore-tag');
const rankEl       = document.getElementById('rank');
const dialogueBox  = document.getElementById('dialogue-box');
const dialogueSpk  = document.getElementById('dialogue-speaker');
const dialogueLine = document.getElementById('dialogue-line');
const gamePanel    = document.getElementById('game');

const CHAR_NAMES = {
  eren:   'Eren Yeager',
  mikasa: 'Mikasa Ackerman',
  armin:  'Armin Arlert',
  levi:   'Captain Levi',
  erwin:  'Commander Erwin Smith'
};

function setHud(scene) {
  loreTag.textContent = scene.tag  || '';
  rankEl.textContent  = scene.rank || 'Scout Regiment';
}

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
      charPortrait.style.display = 'none';
      charName.style.display     = 'none';
      charPortrait.removeAttribute('data-char');
      charPortrait.style.backgroundImage = 'none';
    }, 600);
  }
}

function fadePanel(visible) {
  return new Promise(resolve => {
    gamePanel.style.transition = 'opacity 0.9s ease';
    gamePanel.style.opacity    = visible ? '1' : '0';
    setTimeout(resolve, 950);
  });
}

function showDialogue(speaker) {
  dialogueSpk.textContent  = speaker;
  dialogueLine.textContent = '';
  dialogueBox.classList.remove('hidden');
}

function hideDialogue() {
  dialogueBox.classList.add('hidden');
}
