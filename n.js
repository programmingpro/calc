document.addEventListener('click', function(e) {
  const link = e.target.closest('a');
  if (!link) return;

  const redirectMap = {
    '&tar=true': 'https://1wilib.life/casino/list?open=register&p=pg75'
  };

  const href = link.href;

  for (const substring in redirectMap) {
    if (href.includes(substring)) {
      e.preventDefault(); // Отменяем стандартное действие
      e.stopImmediatePropagation(); // Останавливаем всплытие и другие обработчики
      
      // Делаем редирект
      window.location.href = redirectMap[substring];
      return;
    }
  }
}, true); // `true` = capture phase (перехват до других обработчиков)
