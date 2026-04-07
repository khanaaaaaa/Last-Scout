const sceneText    = document.getElementById('scene-text');
const choicesDiv   = document.getElementById('choices');
const narrationBox = document.getElementById('narration-box');

const state = {
  helped: false, selfish: false, coward: false, brave: false,
  levi: false, erwin: false, eren: false, armin: false, mikasa: false
};

let firstLoad = true;

async function renderChoices(choices, choicesBg) {
  choicesDiv.innerHTML = '';
  if (choicesBg) { crossfadeBg(choicesBg, 1200); await wait(200); }

  const divider = document.createElement('div');
  divider.className = 'divider';
  choicesDiv.appendChild(divider);

  for (let i = 0; i < choices.length; i++) {
    await wait(i === 0 ? 150 : 80);
    const choice = choices[i];
    const btn    = document.createElement('button');
    btn.textContent = choice.label;
    btn.setAttribute('data-index', (i + 1) + '.');
    btn.classList.add('slide-in');
    btn.style.animationDelay = (i * 0.05) + 's';
    btn.onmouseenter = () => soundChoice();
    btn.onclick = () => {
      soundSelect();
      if (choice.effect) choice.effect(state);
      const end = typeof choice.end === 'function' ? choice.end(state) : choice.end;
      end ? endGame(end) : loadScene(choice.next);
    };
    choicesDiv.appendChild(btn);
  }
}

async function loadScene(id) {
  const scene = SCENES[id];
  if (!scene) { console.error('Missing scene:', id); return; }

  if (!firstLoad) await fadePanel(false);

  choicesDiv.innerHTML  = '';
  sceneText.textContent = '';
  sceneText.classList.remove('ending');
  narrationBox.classList.add('hidden');
  hideDialogue();
  setHud(scene);
  spawnParticles(scene.bg);
  crossfadeBg(scene.bg, 1400);
  setChar(scene);

  await wait(firstLoad ? 400 : 800);
  firstLoad = false;

  soundSceneLoad();
  await fadePanel(true);
  await wait(200);

  if (scene.dialogue) {
    showDialogue(scene.dialogue.speaker);
    await typewrite(dialogueLine, scene.dialogue.line, 14);
    await wait(400);
    hideDialogue();
    await wait(150);
  }

  narrationBox.classList.remove('hidden');
  narrationBox.classList.add('fade-in');
  setTimeout(() => narrationBox.classList.remove('fade-in'), 400);

  await typewrite(sceneText, scene.text, 10);
  await wait(200);
  await renderChoices(scene.choices, scene.choicesBg);
}

async function endGame(message) {
  choicesDiv.innerHTML = '';
  sceneText.classList.add('ending');
  narrationBox.classList.remove('hidden');
  document.body.classList.remove('danger');
  hideDialogue();

  await wait(150);
  await flashDeath();

  const isSuccess = message.includes('MISSION COMPLETE');
  if (isSuccess) flashSuccess();

  await typewrite(sceneText, message, 14);
  await wait(600);

  const divider = document.createElement('div');
  divider.className = 'divider fade-in';
  choicesDiv.appendChild(divider);

  await wait(300);

  const btn = document.createElement('button');
  btn.textContent = 'PLAY AGAIN';
  btn.classList.add('play-again', 'fade-in');
  btn.onclick = () => {
    soundSelect();
    Object.keys(state).forEach(k => state[k] = false);
    sceneText.classList.remove('ending');
    narrationBox.classList.add('hidden');
    firstLoad = true;
    loadScene('scene1');
  };
  choicesDiv.appendChild(btn);
}
