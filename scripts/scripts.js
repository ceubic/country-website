document.addEventListener("DOMContentLoaded", () => {
    const navButton = document.getElementById('nav-button');
    const nav = document.getElementById('nav');

    navButton.addEventListener('click', () => {
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
        }
    });
    
});

document.addEventListener("DOMContentLoaded", () => {
    const navButton = document.getElementById('nav-button');
    const nav = document.getElementById('nav');

    navButton.addEventListener('click', () => {
        nav.classList.toggle('show');
        navButton.classList.toggle('change');
    });
});

document.querySelector('a[href^="#"]').addEventListener('click', function(event) {
    event.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('.site-navigation');
    const navButton = document.getElementById('nav-button');

    let lastScrollTop = 0;


    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {

            nav.classList.add('transparent');
        } else {

            nav.classList.remove('transparent');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });


    navButton.addEventListener('click', () => {
        nav.classList.remove('transparent');
    });
});



