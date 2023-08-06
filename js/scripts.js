// Fixed Header
const nav = document.querySelector('.site > header');

function fixedNav() {
    // will add class .fixed once scroll at 1000 pixel
    if (window.scrollY > 1000) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
}

window.addEventListener('scroll', fixedNav);

// Menu
const trigger = document.querySelector('.menu-trigger');
const addClass = document.querySelector('.site');

trigger.addEventListener('click', function () {
    addClass.classList.toggle('show-menu');
    document.body.classList.toggle('overflow-me');
});

// Show sub menu
const subMenu = document.querySelectorAll('.has-child > a');
subMenu.forEach(menu => menu.addEventListener('click', toggle));

function toggle() {
    subMenu.forEach(item => item !== this ? item.classList.remove('expand') : null);

    if (this.parentNode.classList !== 'expand') {
        this.parentNode.classList.toggle('expand');
    }
}

// Search form
const search = document.querySelector('.search-trigger');
const close = document.querySelector('.search-close');
const theClass = document.querySelector('.site');

search.addEventListener('click', function () {
    theClass.classList.toggle('show-search');
});

close.addEventListener('click', function () {
    theClass.classList.remove('show-search');
});

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination'
    }
});

// Load more content
const loadMore = document.querySelector('.load-more');
let currentItems = 3;

if (loadMore) {
    loadMore.addEventListener('click', function (e) {
        const elementList = [...document.querySelectorAll('.post-list article')];

        for (let i = currentItems; i < currentItems + 3; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'flex';
            }
        }
        currentItems += 3;

        // Button will be hidden after fully load
        if (currentItems >= elementList.length) {
            event.target.style.display = 'none';
        }
    });
}

// Get Full Year
const year = document.getElementById('year');
year.innerHTML = new Date().getFullYear();
