menu = document.querySelector('.menu')
menu.addEventListener('click', () => {
    sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('active');
    menu.textContent = !sidebar.classList.contains('active')? '☰' : '✖';
});