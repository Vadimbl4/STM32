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

logo.addEventListener('click', scroll)
navbarLinks.forEach(link => link.addEventListener('click', scroll));

function scroll(e) {
  e.preventDefault();
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




const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const pagination = document.querySelector('.pagination');

let currentImageIndex = 0;

images[currentImageIndex].classList.add('active');

function showImage(index) {
  images[currentImageIndex].classList.remove('active');
  images[index].classList.add('active');
  currentImageIndex = index;
  updatePagination();
}

function nextImage() {
  let newIndex = currentImageIndex + 1;
  if (newIndex >= images.length) {
    newIndex = 0;
  }
  showImage(newIndex);
}

function prevImage() {
  let newIndex = currentImageIndex - 1;
  if (newIndex < 0) {
    newIndex = images.length - 1;
  }
  showImage(newIndex);
}

function updatePagination() {
  pagination.innerHTML = '';
  for (let i = 0; i < images.length; i++) {
    const button = document.createElement('button');
    button.addEventListener('click', () => showImage(i));
    if (i === currentImageIndex) {
      button.classList.add('active');
    }
    pagination.appendChild(button);
  }
}

function autoScroll() {
  nextImage();
}

let intervalId = setInterval(autoScroll, 3000);

slider.addEventListener('mouseover', () => clearInterval(intervalId));
slider.addEventListener('mouseout', () => intervalId = setInterval(autoScroll, 3000));

nextButton.addEventListener('click', () => {
  clearInterval(intervalId);
  nextImage();
  intervalId = setInterval(autoScroll, 3000);
});

prevButton.addEventListener('click', () => {
  clearInterval(intervalId);
  prevImage();
  intervalId = setInterval(autoScroll, 3000);
});

updatePagination();


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