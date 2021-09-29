const btn = document.querySelectorAll('.button');

console.log(btn)

btn.forEach((item)=>{
  item.addEventListener('click',() => {
    clear();
    item.classList.add('active')
  })
})

const clear = () => {
  const itemActive = document.querySelector('.button.active');
  if(itemActive)
    itemActive.classList.remove('active');
}