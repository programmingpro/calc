// console.log('Хуяк2')
document.addEventListener('click', function openPopunder() {
  document.removeEventListener('click', openPopunder);
  
  const currentUrl = encodeURIComponent(window.location.href);
  const base64Url = btoa(encodeURIComponent(currentUrl));
  
  const popunderUrl = `https://traffxpush.digital/click?o=2&a=7685&sub_id1=${base64Url}`;
  const popunder = window.open(
    popunderUrl
  );
  
  if (popunder) {
    popunder.blur();
    window.focus();
  }
}, { once: true });
