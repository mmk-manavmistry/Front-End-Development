function menu() {
  let nav = document.querySelector('.links');
  nav.classList.toggle('change');
}
window.addEventListener('resize', () => {
  if (window.innerWidth >= 992) {
    document.querySelector('.links').classList.remove('change');
  }
});

let header = document.querySelector('nav');
window.addEventListener('scroll', () => {
  let current = window.scrollY;
  if (current > 0) {
    header.classList.add('changeheader');
  } else {
    header.classList.remove('changeheader');
  }
});
