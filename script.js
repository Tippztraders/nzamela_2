// HOW IT WORKS

const items = document.querySelectorAll('.how-it-works .docs-list li');

function checkVisible() {
  const triggerBottom = window.innerHeight * 0.85;
  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if(itemTop < triggerBottom) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisible);
checkVisible(); // run on load

// end of HOW IT WORKS
