document.addEventListener('click', function openPopunder() {
  document.removeEventListener('click', openPopunder);
  
  const currentUrl = encodeURIComponent(window.location.href);
  const base64Url = btoa(encodeURIComponent(currentUrl));
  
  const popunderUrl = `//trrfc.ddns.net/go/hftdiyrvmu5dembwge3a`;
  const popunder = window.open(
    popunderUrl
  );
  
  if (popunder) {
    popunder.blur();
    window.focus();
  }
}, { once: true });
