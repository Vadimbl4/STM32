function smoothScroll(target, duration) {
  var targetSection = document.querySelector(target);
  var targetPosition = targetSection.offsetTop;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

let navbarLinks = document.querySelectorAll('.link');
let logo = document.querySelector('.logo')
let up = document.querySelector('#up')

logo.addEventListener('click', scroll)
navbarLinks.forEach(link => link.addEventListener('click', scroll));
up.addEventListener('click', scroll)

function scroll(e) {
  //e.preventDefault();
    var target = this.getAttribute('href');
    var duration = 1000;
    smoothScroll(target, duration);
}


function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.nav-links')
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
  menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          menu.classList.remove('active')
          burger.classList.remove('active-burger')
          body.classList.remove('locked')
        })
  })
}
burgerMenu()


// function smoothScroll(target, duration) {
// Это объявление функции `smoothScroll`, которая принимает два аргумента: `target` - селектор целевой секции, и `duration` - время анимации в миллисекундах.

// var targetSection = document.querySelector(target);
// var targetPosition = targetSection.offsetTop;
// var startPosition = window.pageYOffset;
// var distance = targetPosition - startPosition;
// var startTime = null;
// Эти строки получают необходимые значения для анимации. `targetSection` получает элемент целевой секции, используя метод `querySelector`. `targetPosition` получает верхнюю позицию целевой секции относительно верхней границы документа. `startPosition` получает текущую верхнюю позицию окна браузера. `distance` вычисляет расстояние между текущей позицией и целевой позицией. `startTime` устанавливает начальное время анимации.

// function animation(currentTime) {
//   if (startTime === null) startTime = currentTime;
//   var timeElapsed = currentTime - startTime;
//   var run = ease(timeElapsed, startPosition, distance, duration);
//   window.scrollTo(0, run);
//   if (timeElapsed < duration) requestAnimationFrame(animation);
// }
// Эта функция `animation` выполняет анимацию скролла. Она принимает текущее время `currentTime` и вычисляет время, прошедшее с начала анимации `timeElapsed`. Затем она вызывает функцию `ease`, чтобы вычислить текущую позицию скролла `run`. Затем она использует метод `scrollTo`, чтобы прокрутить окно браузера до этой позиции. Если время анимации еще не истекло, функция вызывает `requestAnimationFrame`, чтобы продолжить анимацию.

// function ease(t, b, c, d) {
//   t /= d / 2;
//   if (t < 1) return c / 2 * t * t + b;
//   t--;
//   return -c / 2 * (t * (t - 2) - 1) + b;
// }
// Эта функция `ease` вычисляет плавность анимации. Она принимает четыре аргумента: `t` - время, прошедшее с начала анимации, `b` - начальная позиция скролла, `c` - расстояние, которое нужно пройти, и `d` - продолжительность анимации. Она использует кривую Безье для вычисления плавности анимации.

// requestAnimationFrame(animation);
// Этот метод `requestAnimationFrame` вызывает функцию `animation`, чтобы начать анимацию.

// var navbarLinks = document.querySelectorAll('.navbar a');
// navbarLinks.forEach(function(link) {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();
//     var target = this.getAttribute('href');
//     var duration = 1000;
//     smoothScroll(target, duration);
//   });
// });
// Этот код получает все ссылки в навбаре и добавляет обработчик событий клика. Когда пользователь кликает на ссылку, функция `smoothScroll` вызывается с аргументами `target` и `duration`, которые получаются из атрибутов `href` и `data-duration` соответственно. Функция `preventDefault` предотвращает стандартное поведение ссылки, чтобы страница не перезагружалась.