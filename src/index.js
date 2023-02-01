const notificationNode = document.querySelector('.js-notif');
const closeNotificationNode = document.querySelector('.js-close-notif');

closeNotificationNode.addEventListener('click', function() {
  notificationNode.style.animation = 'close-notification 2s forwards';
});

const contentNode = document.querySelector('.js-content');
const exitWindowNode = document.querySelector('.js-exit-window');
const outputAfterExitNode = document.querySelector('.js-output-after-exit');

exitWindowNode.addEventListener('click', function() {
  contentNode.style.animation = 'close-reg-window 1.5s forwards';
  function afterExitText() {
    outputAfterExitNode.innerHTML = 'Перезагрузите страницу';
  }

  setTimeout(afterExitText, 800);
});

