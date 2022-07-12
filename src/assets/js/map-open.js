document.addEventListener('DOMContentLoaded', (e) => {
    const mapTitle = document.querySelector(".mapTitle");
    const map = document.querySelector(".map");

    mapTitle.addEventListener('click', (e) => {
        console.log('click');
        map.classList.add("active");
    });

    map.addEventListener('mouseleave', (e) => {
        map.classList.remove("active");
    });
});