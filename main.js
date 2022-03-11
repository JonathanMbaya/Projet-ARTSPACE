// PREMIERE SLIDE

const items = document.querySelectorAll('#slide');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
    
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    // console.log(count);
    
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)

// TOOLTIP

const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');

createPopper(popcorn, tooltip, {
  placement: 'right',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 8],
      },
    },
  ],
});

function show() {
    tooltip.setAttribute('data-show', '');
  
    // We need to tell Popper to update the tooltip position
    // after we show the tooltip, otherwise it will be incorrect
    popperInstance.update();
  }
  
  function hide() {
    tooltip.removeAttribute('data-show');
  }
  
  const showEvents = ['mouseenter', 'focus'];
  const hideEvents = ['mouseleave', 'blur'];
  
  showEvents.forEach((event) => {
    button.addEventListener(event, show);
  });
  
  hideEvents.forEach((event) => {
    button.addEventListener(event, hide);
  });

  

