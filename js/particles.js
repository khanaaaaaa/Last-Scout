const FIRE_BGS = ['assets/bg/breach.png', 'assets/bg/titan.png'];

function spawnParticles(bgUrl) {
  const container = document.getElementById('particles');
  container.innerHTML = '';
  if (!FIRE_BGS.includes(bgUrl)) return;
  for (let i = 0; i < 24; i++) {
    const p = document.createElement('div');
    p.className               = 'particle';
    p.style.left              = Math.random() * 100 + '%';
    p.style.width             = (1 + Math.random() * 2.5) + 'px';
    p.style.height            = (1 + Math.random() * 2.5) + 'px';
    p.style.background        = Math.random() > 0.4 ? '#ff5500' : '#ffaa00';
    p.style.animationDuration = (5 + Math.random() * 8) + 's';
    p.style.animationDelay    = (Math.random() * 8) + 's';
    container.appendChild(p);
  }
}
