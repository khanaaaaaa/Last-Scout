let _ctx = null;

function getCtx() {
  if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
  return _ctx;
}

function playTone(freq, type, duration, vol, delay) {
  try {
    const ctx  = getCtx();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime + (delay || 0));
    gain.gain.setValueAtTime(vol || 0.04, ctx.currentTime + (delay || 0));
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + (delay || 0) + duration);
    osc.start(ctx.currentTime + (delay || 0));
    osc.stop(ctx.currentTime  + (delay || 0) + duration);
  } catch(e) {}
}

function soundSceneLoad() { playTone(180, 'sine',     0.6,  0.03); }
function soundDialogue()  { playTone(320, 'triangle', 0.08, 0.02); }
function soundChoice()    { playTone(440, 'triangle', 0.06, 0.015); }
function soundSelect()    { playTone(260, 'square',   0.12, 0.025); }
function soundDeath() {
  playTone(120, 'sawtooth', 0.8, 0.05, 0);
  playTone(80,  'sawtooth', 1.2, 0.04, 0.1);
  playTone(50,  'sine',     2.0, 0.03, 0.3);
}
function soundSuccess() {
  playTone(440, 'sine', 0.3, 0.03, 0);
  playTone(550, 'sine', 0.3, 0.03, 0.15);
  playTone(660, 'sine', 0.5, 0.03, 0.3);
}
