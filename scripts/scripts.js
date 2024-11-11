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
