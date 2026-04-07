function setHud(scene) {
  const loreTag = document.getElementById('lore-tag');
  const rankEl  = document.getElementById('rank');
  loreTag.textContent = scene.tag  || '';
  rankEl.textContent  = scene.rank || 'Scout Regiment';
  document.body.classList.toggle('danger', !!scene.danger);
}
