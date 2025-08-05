document.addEventListener('click', function (e) {
  const link = e.target.closest('a');
  if (!link) return;

  // Карта: подстрока в URL => ссылка для редиректа
  const redirectMap = {
    '&tar=true': 'https://1wilib.life/casino/list?open=register&p=pg75',
  };

  try {
    const href = link.href;

    for (const substring in redirectMap) {
      if (href.includes(substring)) {
        e.preventDefault();
        window.location.href = redirectMap[substring];
        break;
      }
    }
  } catch (err) {
    console.error('Ошибка при обработке ссылки:', err);
  }
});
