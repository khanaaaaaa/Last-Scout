const sceneText  = document.getElementById('scene-text');
const choicesDiv = document.getElementById('choices');

const state = {
  helped: false, selfish: false, coward: false, brave: false,
  levi: false, erwin: false, eren: false, armin: false, mikasa: false
};

let firstLoad = true;

async function renderChoices(choices, choicesBg) {
  choicesDiv.innerHTML = '';

  if (choicesBg) {
    crossfadeBg(choicesBg, 1800);
    await wait(400);
  }

  const divider = document.createElement('div');
  divider.className = 'divider';
  choicesDiv.appendChild(divider);

  for (let i = 0; i < choices.length; i++) {
    await wait(i === 0 ? 300 : 130);
    const choice = choices[i];
    const btn = document.createElement('button');
    btn.textContent = choice.label;
    btn.setAttribute('data-index', (i + 1) + '.');
    btn.classList.add('slide-in');
    btn.style.animationDelay = (i * 0.07) + 's';
    btn.onclick = () => {
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
  hideDialogue();
  setHud(scene);
  document.body.classList.toggle('danger', !!scene.danger);
  spawnParticles(scene.bg);
  crossfadeBg(scene.bg, 2000);
  setChar(scene);

  await wait(firstLoad ? 800 : 1600);
  firstLoad = false;

  await fadePanel(true);
  await wait(400);

  if (scene.dialogue) {
    showDialogue(scene.dialogue.speaker);
    await typewrite(dialogueLine, scene.dialogue.line, 20);
    await wait(600);
  }

  await typewrite(sceneText, scene.text, 24);
  await wait(300);
  await renderChoices(scene.choices, scene.choicesBg);
}

async function endGame(message) {
  choicesDiv.innerHTML = '';
  sceneText.classList.add('ending');
  document.body.classList.remove('danger');

  await wait(200);
  document.body.classList.add('flash', 'shake');
  setTimeout(() => document.body.classList.remove('flash', 'shake'), 950);

  await typewrite(sceneText, message, 34);
  await wait(900);

  const divider = document.createElement('div');
  divider.className = 'divider fade-in';
  choicesDiv.appendChild(divider);

  await wait(400);

  const btn = document.createElement('button');
  btn.textContent = 'PLAY AGAIN';
  btn.classList.add('play-again', 'fade-in');
  btn.onclick = () => {
    Object.keys(state).forEach(k => state[k] = false);
    sceneText.classList.remove('ending');
    firstLoad = true;
    loadScene('scene1');
  };
  choicesDiv.appendChild(btn);
}
