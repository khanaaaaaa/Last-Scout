var currentScene = null;
var isTyping = false;
var typeInterval = null;
var gameState = {
  helped: false,
  selfish: false,
  coward: false,
  brave: false,
  levi: false,
  erwin: false,
  eren: false,
  armin: false,
  mikasa: false
};

var bgEl = document.getElementById('background-image');
var storyText = document.getElementById('story-text');
var buttonsArea = document.getElementById('buttons-area');
var dialogueArea = document.getElementById('dialogue-area');
var speakerName = document.getElementById('speaker-name');
var dialogueText = document.getElementById('dialogue-text');
var locationText = document.getElementById('location-text');
var charImg = document.getElementById('character-img');
var charNameText = document.getElementById('character-name-text');
var clickToContinue = document.getElementById('click-to-continue');

function startTyping(element, text, speed, callback) {
  if (isTyping) {
    clearInterval(typeInterval);
    element.textContent = text;
    isTyping = false;
    clickToContinue.style.display = 'none';
    if (callback) callback();
    return;
  }

  isTyping = true;
  element.textContent = '';
  clickToContinue.style.display = 'block';
  var i = 0;

  typeInterval = setInterval(function() {
    element.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(typeInterval);
      isTyping = false;
      clickToContinue.style.display = 'none';
      if (callback) callback();
    }
  }, speed || 25);
}

function showScene(sceneId) {
  var scene = SCENES[sceneId];
  if (!scene) {
    alert('Scene not found: ' + sceneId);
    return;
  }

  currentScene = scene;
  buttonsArea.innerHTML = '';
  storyText.textContent = '';
  dialogueArea.style.display = 'none';
  dialogueText.textContent = '';

  if (scene.bg) {
    bgEl.style.backgroundImage = "url('" + scene.bg + "')";
  } else {
    bgEl.style.backgroundImage = 'none';
  }

  if (scene.tag) {
    locationText.textContent = scene.tag;
    locationText.style.display = 'inline-block';
  } else {
    locationText.style.display = 'none';
  }

  if (scene.char) {
    charImg.style.backgroundImage = "url('" + scene.char + "')";
    charImg.style.display = 'block';
    charImg.style.opacity = '0';
    setTimeout(function() { charImg.style.opacity = '1'; }, 100);
    var key = scene.char.split('/').pop().replace('.png', '');
    var names = {
      eren: 'Eren Yeager',
      mikasa: 'Mikasa Ackerman',
      armin: 'Armin Arlert',
      levi: 'Captain Levi',
      erwin: 'Commander Erwin Smith'
    };
    charNameText.textContent = names[key] || key;
  } else {
    charImg.style.opacity = '0';
    setTimeout(function() {
      charImg.style.display = 'none';
      charImg.style.backgroundImage = 'none';
      charNameText.textContent = '';
    }, 500);
  }

  if (scene.dialogue) {
    dialogueArea.style.display = 'block';
    speakerName.textContent = scene.dialogue.speaker;
    startTyping(dialogueText, scene.dialogue.line, 20, function() {
      setTimeout(function() {
        startTyping(storyText, scene.text, 22, function() {
          showButtons(scene.choices);
        });
      }, 500);
    });
  } else {
    startTyping(storyText, scene.text, 22, function() {
      showButtons(scene.choices);
    });
  }
}

function showButtons(choices) {
  buttonsArea.innerHTML = '';
  for (var i = 0; i < choices.length; i++) {
    var btn = document.createElement('button');
    btn.textContent = (i + 1) + '. ' + choices[i].label;

    (function(choice) {
      btn.onclick = function() {
        if (choice.effect) {
          choice.effect(gameState);
        }

        var endResult = choice.end;
        if (typeof choice.end === 'function') {
          endResult = choice.end(gameState);
        }

        if (endResult) {
          showEnding(endResult);
        } else {
          showScene(choice.next);
        }
      };
    })(choices[i]);

    buttonsArea.appendChild(btn);
  }
}

function showEnding(message) {
  buttonsArea.innerHTML = '';
  dialogueArea.style.display = 'none';
  charImg.style.display = 'none';
  charNameText.textContent = '';

  document.body.style.backgroundColor = '#1a0000';
  setTimeout(function() {
    document.body.style.backgroundColor = '#111111';
  }, 600);

  startTyping(storyText, message, 30, function() {
    var btn = document.createElement('button');
    btn.textContent = 'Play Again';
    btn.className = 'play-again-btn';
    btn.onclick = function() {
      gameState.helped  = false;
      gameState.selfish = false;
      gameState.coward  = false;
      gameState.brave   = false;
      gameState.levi    = false;
      gameState.erwin   = false;
      gameState.eren    = false;
      gameState.armin   = false;
      gameState.mikasa  = false;
      showScene('scene1');
    };
    buttonsArea.appendChild(btn);
  });
}

document.getElementById('story-box').onclick = function() {
  if (isTyping) {
    clearInterval(typeInterval);
    storyText.textContent = currentScene ? currentScene.text : '';
    isTyping = false;
    clickToContinue.style.display = 'none';
    if (currentScene) showButtons(currentScene.choices);
  }
};

showScene('scene1');
