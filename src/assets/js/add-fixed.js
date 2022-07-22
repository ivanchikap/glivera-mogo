document.addEventListener('DOMContentLoaded', () => {
    const headerTop = document.getElementById("headerTop");
    const header = document.getElementById("header");
    const headerHeight = header.clientHeight;
    let scrollOffset = document.documentElement.scrollTop;
    checkScroll(scrollOffset);
    window.addEventListener('scroll', (e) => {
        scrollOffset = document.documentElement.scrollTop;

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset > headerHeight) {
            headerTop.classList.add("header__top--fixed");
        } else {
            headerTop.classList.remove("header__top--fixed");
        }
    }
});