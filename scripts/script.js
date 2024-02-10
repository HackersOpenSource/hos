// bars toggle 
const toogleBars = () => {
  const menu = document.getElementById('menu');
  const mclass = menu.className;

  if (mclass === 'nav_bar') {
  document.classList.remove('nav_bar').add('menu_bar');
  } else {
    document.classList.remove('menu_bar').add('nav_bar');
  }
  
}

