const notificationNode=document.querySelector(".js-notif"),closeNotificationNode=document.querySelector(".js-close-notif");closeNotificationNode.addEventListener("click",(function(){notificationNode.style.animation="close-notification 2s forwards"}));const contentNode=document.querySelector(".js-content"),exitWindowNode=document.querySelector(".js-exit-window"),outputAfterExitNode=document.querySelector(".js-output-after-exit");exitWindowNode.addEventListener("click",(function(){contentNode.style.animation="close-reg-window 1.5s forwards",setTimeout((function(){outputAfterExitNode.innerHTML="Перезагрузите страницу"}),800)}));