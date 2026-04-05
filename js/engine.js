const sceneText = document.getElementById("scene-text");
const choicesDiv = document.getElementById("choices");

const state = { helped: false, selfish: false };

let typeTimer = null;

function typewrite(text, onDone) {
  clearInterval(typeTimer);
  sceneText.textContent = "";
  sceneText.classList.remove("fade-in");

  let i = 0;
  typeTimer = setInterval(() => {
    sceneText.textContent += text[i++];
    if (i >= text.length) {
      clearInterval(typeTimer);
      if (onDone) onDone();
    }
  }, 22);
}

function renderChoices(choices) {
  choicesDiv.innerHTML = "";
  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.label;
    btn.classList.add("fade-in");
    btn.onclick = () => {
      if (choice.effect) choice.effect(state);
      const end = typeof choice.end === "function" ? choice.end(state) : choice.end;
      end ? endGame(end) : loadScene(choice.next);
    };
    choicesDiv.appendChild(btn);
  });
}

function loadScene(id) {
  const scene = SCENES[id];
  choicesDiv.innerHTML = "";
  typewrite(scene.text, () => renderChoices(scene.choices));
}

function endGame(message) {
  choicesDiv.innerHTML = "";
  typewrite(message, () => {
    document.body.classList.add("flash");
    setTimeout(() => document.body.classList.remove("flash"), 600);

    const btn = document.createElement("button");
    btn.textContent = "↺  Play Again";
    btn.classList.add("fade-in");
    btn.onclick = () => {
      state.helped = false;
      state.selfish = false;
      loadScene("scene1");
    };
    choicesDiv.appendChild(btn);
  });
}

loadScene("scene1");