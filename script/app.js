const btn = document.querySelectorAll('.button');

console.log(btn);

btn[0].addEventListener('click', () => {
  clear();
  btn[0].classList.add('active');
});

btn[1].addEventListener('click', () => {
  clear();
  btn[0].classList.add('active');
});

const clear = () => {
  const itemActive = document.querySelector('.button.active');
  if (itemActive) itemActive.classList.remove('active');
};

setTimeout(() => {
  PvsM();
  btn[1].classList.add('active');
}, 200);
