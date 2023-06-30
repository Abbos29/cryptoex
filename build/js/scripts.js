// Custom Scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  menu.addEventListener("click", (event) => {
    if(event.target){
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)







// DROPDOWN

var mainButtons = document.getElementsByClassName("dropdown__btn");
var buttonContainers = document.getElementsByClassName("dropdown__body");
var dynamicButtons = document.getElementsByClassName("dynamic-button");

for (var i = 0; i < mainButtons.length; i++) {
    mainButtons[i].addEventListener("click", function() {
        var container = this.nextElementSibling;
        container.style.display = "block";
    });
}

function replaceMainButton(button, containerIndex) {
    var container = buttonContainers[containerIndex - 1];
    var mainButton = container.previousElementSibling;
    mainButton.innerHTML = button.innerHTML;
    container.style.display = "none";
}

// Set the first buttons as selected initially
replaceMainButton(dynamicButtons[0], '1');
replaceMainButton(dynamicButtons[0], '2');

