// auto update date and time
function updatedatetime() {
    const now = new Date();
    const dateString  = now.toLocaleString();
    document.getElementById('clock').innerText = dateString;
}
updatedatetime();
setInterval(updatedatetime, 1000);

// toggle menu
const menu = document.getElementById('menu')
const menuToggle = document.getElementById('menuToggle')
function toggleMenu() {
    menu.classList.toggle('open');
}
function closeMenu(event) {
    if (!menu.contains(event.target) && event.target !== menuToggle) {
        menu.classList.remove('open');
    }
}
menuToggle.addEventListener('click', function(event){
    event.stopPropagation();
    toggleMenu();
})

document.addEventListener('click', closeMenu)
