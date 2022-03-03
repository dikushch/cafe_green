window.onload = function () {
  window.setTimeout(function () {
    document.querySelector('.preloader').classList.add('closing');
    window.setTimeout(function () {
      document.querySelector('.preloader').classList.add('close');
      animActive();
    }, 300);
  }, 1000);
};

// #################

let brg = document.querySelector('.brg');
let header = document.querySelector('.header');
let body = document.querySelector('body');
let links = document.querySelectorAll('.menu__link');

brg.addEventListener('click', function () {
  brg.classList.toggle('open');
  header.classList.toggle('open');
  body.classList.toggle('lock');
});

for (let link of links) {
  link.addEventListener('click', function () {
    brg.classList.remove('open');
    header.classList.remove('open');
    body.classList.remove('lock');
  });
}

// ################

const anchors = document.querySelectorAll('a[href^="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// #################

let carte_btn = document.querySelectorAll('.carte__btn');
let carte_group = document.querySelectorAll('.carte__group');
let active = 0;
let carte_container_height = document.querySelector('.carte').offsetHeight;

if (window.matchMedia('(min-width: 769px)').matches) {
  active = document.querySelector('.carte__btn');
  active.disabled = true;
  active.classList.add('open');
  active.nextElementSibling.classList.add('open');
  active.nextElementSibling.nextElementSibling.classList.add('open');
  document.querySelector('.carte').style.height = (carte_container_height + active.nextElementSibling.nextElementSibling.offsetHeight) + 'px';
}

carte_btn.forEach(function (item) {
  item.addEventListener('click', function () {
    if (active != 0 && active != item) {
      active.classList.remove('open');
      active.disabled = false;
      active.nextElementSibling.classList.remove('open');
      active.nextElementSibling.nextElementSibling.classList.remove('open');
    }
    item.classList.toggle('open');
    item.nextElementSibling.classList.toggle('open');
    item.nextElementSibling.nextElementSibling.classList.toggle('open');
    active = item;
    if (window.matchMedia('(min-width: 769px)').matches) {
      active.disabled = true;
      document.querySelector('.carte').style.height = (carte_container_height + item.nextElementSibling.nextElementSibling.offsetHeight) + 'px';
    }
  });
});

window.addEventListener('resize', function () {
  if (window.matchMedia('(max-width: 768px)').matches) {
    document.querySelector('.carte').style.height = '';
  }
});

// #################

let animItems = document.querySelectorAll('.anim');

function animActive() {
  let windowCenter = (window.innerHeight / 1.2) + window.scrollY;
  animItems.forEach(item => {
    let itemScroll = item.offsetTop;
    if (windowCenter >= itemScroll) {
      item.classList.add('anim_active');
    }
  });
}

window.addEventListener('scroll', function () {
  animActive();
});