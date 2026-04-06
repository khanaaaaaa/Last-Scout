const sceneText    = document.getElementById('scene-text');
const choicesDiv   = document.getElementById('choices');
const bgLayer      = document.getElementById('bg-layer');
const bgNext       = document.getElementById('bg-layer-next');
const charPortrait = document.getElementById('char-portrait');
const charName     = document.getElementById('char-name');
const loreTag      = document.getElementById('lore-tag');
const rankEl       = document.getElementById('rank');
const dialogueBox  = document.getElementById('dialogue-box');
const dialogueSpk  = document.getElementById('dialogue-speaker');
const dialogueLine = document.getElementById('dialogue-line');
const skipHint     = document.getElementById('skip-hint');
const particles    = document.getElementById('particles');
const gamePanel    = document.getElementById('game');

const state = {
  helped: false, selfish: false, coward: false, brave: false,
  levi: false, erwin: false, eren: false, armin: false, mikasa: false
};

const CHAR_NAMES = {
  eren:   'Eren Yeager',
  mikasa: 'Mikasa Ackerman',
  armin:  'Armin Arlert',
  levi:   'Captain Levi',
  erwin:  'Commander Erwin'
};

const FIRE_BGS = ['assets/bg/breach.png', 'assets/bg/titan.png'];

let typeTimer = null;
let fullText  = '';
let typing    = false;
let typeDone  = null;

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function spawnParticles(active) {
  particles.innerHTML = '';
  if (!active) return;
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left              = Math.random() * 100 + '%';
    p.style.width             = (1 + Math.random() * 2) + 'px';
    p.style.height            = (1 + Math.random() * 2) + 'px';
    p.style.background        = Math.random() > 0.5 ? '#ff6600' : '#ffaa00';
    p.style.animationDuration = (4 + Math.random() * 6) + 's';
    p.style.animationDelay    = (Math.random() * 6) + 's';
    particles.appendChild(p);
  }
}

function crossfadeBg(url) {
  return new Promise(resolve => {
    if (!url) { bgLayer.style.backgroundImage = 'none'; resolve(); return; }
    bgNext.style.transition      = 'none';
    bgNext.style.backgroundImage = 'url("' + url + '")';
    bgNext.style.opacity         = '0';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      bgNext.style.transition = 'opacity 2s ease';
      bgNext.style.opacity    = '1';
      setTimeout(() => {
        bgLayer.style.backgroundImage = 'url("' + url + '")';
        bgNext.style.opacity    = '0';
        bgNext.style.transition = 'none';
        resolve();
      }, 2100);
    }));
  });
}

function fadePanel(visible) {
  return new Promise(resolve => {
    gamePanel.style.transition = 'opacity 0.8s ease';
    gamePanel.style.opacity    = visible ? '1' : '0';
    setTimeout(resolve, 850);
  });
}

function typewrite(el, text, speed) {
  return new Promise(resolve => {
    clearInterval(typeTimer);
    fullText  = text;
    typing    = true;
    typeDone  = resolve;
    el.textContent = '';
    el.classList.add('typing');
    skipHint.classList.add('visible');
    let i = 0;
    typeTimer = setInterval(() => {
      el.textContent += text[i++];
      if (i >= text.length) {
        clearInterval(typeTimer);
        typing = false;
        el.classList.remove('typing');
        skipHint.classList.remove('visible');
        typeDone = null;
        resolve();
      }
    }, speed || 28);
  });
}

document.getElementById('panel').addEventListener('click', () => {
  if (!typing) return;
  clearInterval(typeTimer);
  const el = document.querySelector('.typing') || sceneText;
  el.textContent = fullText;
  typing = false;
  el.classList.remove('typing');
  skipHint.classList.remove('visible');
  const cb = typeDone;
  typeDone = null;
  if (cb) cb();
});

function setMeta(scene) {
  loreTag.textContent = scene.tag  || '';
  rankEl.textContent  = scene.rank || 'Scout Regiment';
  document.body.classList.toggle('danger', !!scene.danger);
  spawnParticles(FIRE_BGS.includes(scene.bg));
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
    setTimeout(() => {
      charPortrait.style.transition = 'opacity 1.2s ease';
      charPortrait.style.opacity    = '1';
    }, 1800);
  } else {
    charPortrait.style.transition = 'opacity 0.5s ease';
    charPortrait.style.opacity    = '0';
    setTimeout(() => {
      charPortrait.style.display = 'none';
      charName.style.display     = 'none';
      charPortrait.removeAttribute('data-char');
    }, 500);
  }
}

function renderChoices(choices, choicesBg) {
  return new Promise(async resolve => {
    choicesDiv.innerHTML = '';

    if (choicesBg) {
      await wait(400);
      crossfadeBg(choicesBg);
      await wait(600);
    }

    const divider = document.createElement('div');
    divider.className = 'divider';
    choicesDiv.appendChild(divider);

    for (let i = 0; i < choices.length; i++) {
      await wait(i === 0 ? 300 : 120);
      const btn = document.createElement('button');
      btn.textContent = choices[i].label;
      btn.classList.add('slide-in');
      btn.onclick = () => {
        if (choices[i].effect) choices[i].effect(state);
        const end = typeof choices[i].end === 'function' ? choices[i].end(state) : choices[i].end;
        end ? endGame(end) : loadScene(choices[i].next);
      };
      choicesDiv.appendChild(btn);
    }
    resolve();
  });
}

async function loadScene(id) {
  const scene = SCENES[id];
  if (!scene) { console.error('Missing scene:', id); return; }

  await fadePanel(false);

  choicesDiv.innerHTML  = '';
  sceneText.textContent = '';
  sceneText.classList.remove('ending');
  dialogueBox.classList.add('hidden');

  setMeta(scene);
  crossfadeBg(scene.bg);
  setChar(scene);

  await wait(1800);
  await fadePanel(true);
  await wait(400);

  if (scene.dialogue) {
    dialogueSpk.textContent  = scene.dialogue.speaker;
    dialogueLine.textContent = '';
    dialogueBox.classList.remove('hidden');
    await typewrite(dialogueLine, scene.dialogue.line, 22);
    await wait(600);
  }

  await typewrite(sceneText, scene.text, 26);
  await wait(300);
  await renderChoices(scene.choices, scene.choicesBg);
}

async function endGame(message) {
  choicesDiv.innerHTML = '';
  sceneText.classList.add('ending');
  document.body.classList.remove('danger');

  await wait(200);
  document.body.classList.add('flash', 'shake');
  setTimeout(() => document.body.classList.remove('flash', 'shake'), 900);

  await typewrite(sceneText, message, 32);
  await wait(800);

  const divider = document.createElement('div');
  divider.className = 'divider fade-in';
  choicesDiv.appendChild(divider);

  await wait(400);

  const btn = document.createElement('button');
  btn.textContent = 'PLAY AGAIN';
  btn.classList.add('play-again', 'fade-in');
  btn.onclick = async () => {
    Object.keys(state).forEach(k => state[k] = false);
    sceneText.classList.remove('ending');
    await loadScene('scene1');
  };
  choicesDiv.appendChild(btn);
}

loadScene('scene1');
