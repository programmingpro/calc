(function () {
  const notif = document.createElement('div');

  // Стили контейнера
  Object.assign(notif.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '320px',
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    padding: '15px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    color: '#000',
    zIndex: '9999',
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    opacity: '0',
    transition: 'opacity 0.5s ease',
  });

  // HTML содержимое
  notif.innerHTML = `
    <img src="http://qiw.lol/4.jpg" alt="Ad" style="flex-shrink:0; width:60px; height:60px; border-radius:8px;">
    <div style="flex-grow:1;">
      <div style="font-weight:bold; margin-bottom:5px;">🔥 1 новое сообщение от Алены</div>
      <div>Привет, не против познакомиться?) Я ищу секс на одну ночь) </div>
      <a href="https://snurik.top/click?o=2&a=7685" target="_blank" style="color:#007bff;text-decoration:none;margin-top:5px;display:inline-block;">Ответить</a>
    </div>
    <span style="position:absolute;top:5px;right:10px;cursor:pointer;font-size:16px;" id="notif-close">&times;</span>
  `;

  // Добавить в body
  document.body.appendChild(notif);

  // Плавное появление
  setTimeout(() => {
    notif.style.opacity = '1';
  }, 100);

  // Закрытие по нажатию на "×"
  notif.querySelector('#notif-close').onclick = () => {
    notif.style.opacity = '0';
    setTimeout(() => notif.remove(), 500);
  };
})();
