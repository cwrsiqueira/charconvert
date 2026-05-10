(function () {
  const card = document.createElement('div');
  card.className = 'card header-card';
  card.innerHTML =
    '<div class="header-card-brand">' +
      '<i class="fa-solid fa-font header-card-icon" aria-hidden="true"></i>' +
      '<div>' +
        '<span class="header-card-title">Char Converter</span>' +
        '<span class="header-card-subtitle">Converta maiúsculas, minúsculas, slug e mais</span>' +
      '</div>' +
    '</div>';

  const script = document.currentScript;
  script.parentElement.insertBefore(card, script);
})();
