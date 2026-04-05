const sceneText   = document.getElementById('scene-text');
const choicesDiv  = document.getElementById('choices');
const bgLayer     = document.getElementById('bg-layer');
const charPortrait= document.getElementById('char-portrait');
const charName    = document.getElementById('char-name');
const loreTag     = document.getElementById('lore-tag');
const rankEl      = document.getElementById('rank');
const dialogueBox = document.getElementById('dialogue-box');
const dialogueSpk = document.getElementById('dialogue-speaker');
const dialogueLine= document.getElementById('dialogue-line');

const state = {
  helped: false, selfish: false, coward: false, brave: false,
  levi: false, erwin: false, eren: false, armin: false, mikasa: false
};

let typeTimer = null;

function typewrite(text, onDone) {
  clearInterval(typeTimer);
  sceneText.textContent = '';
  let i = 0;
  typeTimer = setInterval(() => {
    sceneText.textContent += text[i++];
    if (i >= text.length) {
      clearInterval(typeTimer);
      if (onDone) onDone();
    }
  }, 20);
}

function setScene(scene) {
  // background
  bgLayer.setAttribute('data-bg', scene.bg || 'default');

  // danger pulse
  document.body.classList.toggle('danger', !!scene.danger);

  // character
  if (scene.char) {
    charPortrait.setAttribute('data-char', scene.char);
    charName.textContent = scene.char.charAt(0).toUpperCase() + scene.char.slice(1);
    charPortrait.style.display = 'block';
    charName.style.display = 'block';
  } else {
    charPortrait.removeAttribute('data-char');
    charPortrait.style.display = 'none';
    charName.style.display = 'none';
  }

  // hud
  loreTag.textContent = scene.tag || '';
  rankEl.textContent  = 'Rank: ' + (scene.rank || 'Scout');

  // dialogue
  if (scene.dialogue) {
    dialogueSpk.textContent  = scene.dialogue.speaker;
    dialogueLine.textContent = scene.dialogue.line;
    dialogueBox.classList.remove('hidden');
  } else {
    dialogueBox.classList.add('hidden');
  }
}

function renderChoices(choices) {
  choicesDiv.innerHTML = '';
  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice.label;
    btn.classList.add('fade-in');
    btn.onclick = () => {
      if (choice.effect) choice.effect(state);
      const end = typeof choice.end === 'function' ? choice.end(state) : choice.end;
      end ? endGame(end) : loadScene(choice.next);
    };
    choicesDiv.appendChild(btn);
  });
}

function loadScene(id) {
  const scene = SCENES[id];
  if (!scene) { console.error('Scene not found:', id); return; }
  choicesDiv.innerHTML = '';
  sceneText.classList.remove('ending');
  setScene(scene);
  typewrite(scene.text, () => renderChoices(scene.choices));
}

function endGame(message) {
  choicesDiv.innerHTML = '';
  sceneText.classList.add('ending');
  document.body.classList.remove('danger');
  typewrite(message, () => {
    document.body.classList.add('flash');
    document.body.classList.add('shake');
    setTimeout(() => {
      document.body.classList.remove('flash');
      document.body.classList.remove('shake');
    }, 800);

    const btn = document.createElement('button');
    btn.textContent = '↺  Play Again';
    btn.classList.add('fade-in');
    btn.onclick = () => {
      Object.keys(state).forEach(k => state[k] = false);
      sceneText.classList.remove('ending');
      loadScene('scene1');
    };
    choicesDiv.appendChild(btn);
  });
}

loadScene('scene1');
