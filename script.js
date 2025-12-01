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

//Carousel Navigators
document.addEventListener("DOMContentLoaded" , () => {
const slideLeft = document.getElementById("slideLeft");
const slideRight = document.getElementById("slideRight")
const newsContainer = document.getElementById("newsContainer")

const slideWidth = () => newsContainer.querySelector(".carousel-slide").offsetWidth;

slideLeft.addEventListener ("click", () => {
    newsContainer.scrollBy({
        left: -slideWidth(),
        behavior: "smooth"
    })
})

slideRight.addEventListener ("click", () => {
    newsContainer.scrollBy({
        left: slideWidth(),
        behavior: "smooth"
    })
})


const autoScrollSpeed = 3000

setInterval(() => {
    const maxScroll = newsContainer.scrollWidth - newsContainer.clientWidth

    if (newsContainer.scrollLeft >= maxScroll) {
        newsContainer.scrollTo({
            left: 0, 
            behavior: "smooth"
        })
    }
    else{
        newsContainer.scrollBy({
            left: slideWidth(),
            behavior: "smooth"
        })
    }
}, autoScrollSpeed)
})