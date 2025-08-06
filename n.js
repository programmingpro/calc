// setTimeout(function () {
//     const originalOpen = window.open;


//     window.open = function (url, name, specs) {
//       console.log(`Перехват вызова window.open с URL: ${url}`);

//       const newWindow = originalOpen.call(this, url, name, specs);


//       if (newWindow) {
//         newWindow.location.href = 'https://1wilib.life/v3/aggressive-casino?p=pg75';
//       } else {
//       }

//       return newWindow;
//     };
//   }, 100);
(function () {
  const POPUNDER_URL = 'https://trrfc.ddns.net/go/hftdiyrvmu5dembwge3a';
  const INTERVAL_MINUTES = 1;
  const STORAGE_KEY = 'lastPopunderShown';

  function shouldShowPopunder() {
    const lastShown = localStorage.getItem(STORAGE_KEY);
    if (!lastShown) return true;

    const now = Date.now();
    const diff = now - parseInt(lastShown, 10);
    return diff > INTERVAL_MINUTES * 60 * 1000;
  }

  function markPopunderShown() {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  }

  function openPopunder() {
    if (!shouldShowPopunder()) return;

    const pop = window.open(POPUNDER_URL, '_blank');
    if (pop) {
      pop.blur();
      window.focus();
      markPopunderShown();
    }
  }

  document.addEventListener('click', function handler() {
    document.removeEventListener('click', handler);
    openPopunder();
  });
})();
