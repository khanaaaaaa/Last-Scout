const bgLayer   = document.getElementById('bg-layer');
const bgNext    = document.getElementById('bg-layer-next');
const particles = document.getElementById('particles');

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const FIRE_BGS = ['assets/bg/breach.png', 'assets/bg/titan.png'];

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

function spawnParticles(bgUrl) {
  particles.innerHTML = '';
  if (!FIRE_BGS.includes(bgUrl)) return;
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className               = 'particle';
    p.style.left              = Math.random() * 100 + '%';
    p.style.width             = (1 + Math.random() * 2.5) + 'px';
    p.style.height            = (1 + Math.random() * 2.5) + 'px';
    p.style.background        = Math.random() > 0.4 ? '#ff5500' : '#ffaa00';
    p.style.animationDuration = (5 + Math.random() * 7) + 's';
    p.style.animationDelay    = (Math.random() * 7) + 's';
    particles.appendChild(p);
  }
}
