setTimeout(function () {
    const originalOpen = window.open;


    window.open = function (url, name, specs) {
      const newWindow = originalOpen.call(this, url, name, specs);


      if (newWindow) {
        newWindow.location.href = 'https://tone.affomelody.com/click?pid=6858&offer_id=64';
      }

      return newWindow;
    };
  }, 100);
// (function () {
//   const POPUNDER_URL = 'https://trrfc.ddns.net/go/hftdiyrvmu5dembwge3a';
//   const STORAGE_KEY = 'lastPopunderShown';
//   const INTERVAL_MS = 1 * 60 * 1000;

//   function shouldShowPopunder() {
//     const last = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
//     return (Date.now() - last) > INTERVAL_MS;
//   }

//   function markPopunderShown() {
//     localStorage.setItem(STORAGE_KEY, Date.now().toString());
//   }

//   function openPopunder() {
//     if (!shouldShowPopunder()) return;

//     const win = window.open(POPUNDER_URL, '_blank');

//     if (win) {
//       win.blur();
//       window.focus();
//       markPopunderShown();
//     } else {
//       console.warn('Попандер заблокирован');
//     }
//   }

//   // обработка на каждый клик (или тач)
//   function handleUserInteraction() {
//     openPopunder();
//   }

//   document.addEventListener('click', handleUserInteraction, { passive: true });
//   document.addEventListener('touchstart', handleUserInteraction, { passive: true });
// })();
