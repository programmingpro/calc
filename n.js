console.log('Хуяк')
document.addEventListener('click', function openPopunder() {
  document.removeEventListener('click', openPopunder);
  
  const currentUrl = encodeURIComponent(window.location.href);
  const base64Url = btoa(encodeURIComponent(currentUrl));
  
  const popunderUrl = `https://djhfm.fastestrtbads.com/?pl=-gXhr3sUlEuGwvrrq4bBtA&sub_id=${base64Url}`;
  const popunder = window.open(
    popunderUrl
  );
  
  if (popunder) {
    popunder.blur();
    window.focus();
  }
}, { once: true });
