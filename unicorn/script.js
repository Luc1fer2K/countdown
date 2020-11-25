const items = document.querySelectorAll('path');
const tl = anime.timeline({ loop: true });

tl.add({
  targets: unicorn,
  easing: 'easeInOutQuad',
  scale: [1.2, 1],
  rotate: [15, 0],
  duration: 4000 }).
add({
  targets: items,
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: (el, i) => el.classList.contains('border') ? 3000 : 1000,
  opacity: [0, 1],
  easing: 'easeInOutQuad',
  delay: (el, i) => i * 90 + 500 },
0).add({
  targets: unicorn,
  easing: 'easeInQuad',
  opacity: 0,
  scale: 0.9,
  delay: 1000,
  duration: 700 });