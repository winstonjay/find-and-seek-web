

function scrollToBottom() {
  let scrollingElement = (document.scrollingElement || document.body);
  scrollingElement.scrollTop = scrollingElement.scrollHeight;
}

document.getElementById('scroll-button').onclick = scrollToBottom;