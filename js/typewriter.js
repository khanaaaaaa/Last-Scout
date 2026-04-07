const skipHint = document.getElementById('skip-hint');

let _typeTimer = null;
let _fullText  = '';
let _typing    = false;
let _typeDone  = null;
let _activeEl  = null;

function typewrite(el, text, speed) {
  return new Promise(resolve => {
    clearInterval(_typeTimer);
    _fullText = text;
    _typing   = true;
    _typeDone = resolve;
    _activeEl = el;
    el.textContent = '';
    el.classList.add('typing');
    skipHint.classList.add('visible');
    let i = 0;
    _typeTimer = setInterval(() => {
      el.textContent += text[i++];
      if (i >= text.length) {
        clearInterval(_typeTimer);
        _typing   = false;
        _typeDone = null;
        _activeEl = null;
        el.classList.remove('typing');
        skipHint.classList.remove('visible');
        resolve();
      }
    }, speed || 28);
  });
}

function skipTypewrite() {
  if (!_typing || !_activeEl) return;
  clearInterval(_typeTimer);
  _activeEl.textContent = _fullText;
  _activeEl.classList.remove('typing');
  _typing = false;
  skipHint.classList.remove('visible');
  const cb = _typeDone;
  _typeDone = null;
  _activeEl = null;
  if (cb) cb();
}

document.getElementById('panel').addEventListener('click', skipTypewrite);
