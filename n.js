(function () {
  const banner = document.createElement('div');

  Object.assign(banner.style, {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    maxHeight: '200px',
    background: '#fff',
    borderTop: '2px solid #ccc',
    boxShadow: '0 -4px 12px rgba(0,0,0,0.25)',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    color: '#000',
    zIndex: '2147483647', // поверх всего
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    opacity: '0',
    transition: 'opacity 0.5s ease',
  });

  banner.innerHTML = `
    <img src="http://qiw.lol/4.jpg" alt="Ad" style="width:100px;height:100px;border-radius:12px;flex-shrink:0;">
    <div style="flex:1;">
      <div style="font-weight:bold;font-size:18px;margin-bottom:8px;">🔥 1 новое сообщение от Алены</div>
      <div style="margin-bottom:10px;">Привет, не против познакомиться?) Я ищу секс на одну ночь)</div>
      <a href="https://snurik.top/click?o=2&a=7685" target="_blank" style="display:inline-block;padding:8px 16px;background:#007bff;color:#fff;text-decoration:none;border-radius:6px;">Ответить</a>
    </div>
    <span id="banner-close" style="position:absolute;top:10px;right:20px;cursor:pointer;font-size:24px;font-weight:bold;">&times;</span>
  `;

  document.body.appendChild(banner);

  // Плавное появление
  setTimeout(() => {
    banner.style.opacity = '1';
  }, 100);

  // Закрытие
  banner.querySelector('#banner-close').onclick = () => {
    banner.style.opacity = '0';
    setTimeout(() => banner.remove(), 500);
  };
})();
