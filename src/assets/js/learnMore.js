const learnMore = document.getElementById("learnMore");
const hrefNeeded = learnMore.getAttribute("href");

learnMore.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionToScroll = document.getElementById(hrefNeeded.substring(1, hrefNeeded.length));
    sectionToScroll.scrollIntoView({block: "center", behavior: "smooth"});
});

