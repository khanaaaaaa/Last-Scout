function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function crossfadeBg(url, duration) {
  duration = duration || 2200;
  return new Promise(resolve => {
    if (!url) { bgLayer.style.backgroundImage = 'none'; resolve(); return; }
    bgNext.style.transition      = 'none';
    bgNext.style.backgroundImage = 'url("' + url + '")';
    bgNext.style.opacity         = '0';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      bgNext.style.transition = 'opacity ' + (duration / 1000) + 's ease';
      bgNext.style.opacity    = '1';
      setTimeout(() => {
        bgLayer.style.backgroundImage = 'url("' + url + '")';
        bgNext.style.opacity    = '0';
        bgNext.style.transition = 'none';
        resolve();
      }, duration + 100);
    }));
  });
}

function fadePanel(visible) {
  const panel = document.getElementById('game');
  return new Promise(resolve => {
    panel.style.transition = 'opacity 0.9s ease';
    panel.style.opacity    = visible ? '1' : '0';
    setTimeout(resolve, 950);
  });
}

function flashDeath() {
  document.body.classList.add('flash', 'shake');
  soundDeath();
  return wait(950).then(() => document.body.classList.remove('flash', 'shake'));
}

function flashSuccess() {
  soundSuccess();
}
