document.addEventListener('DOMContentLoaded', () => {
    const accordion = document.getElementById('accordion');

    accordion.addEventListener('click', (e) => {
        const target = e.target;
        const accordionItems = accordion.querySelectorAll(".accordion__item");
        const isAccordionHead = target.classList.contains("accordionHead");
        const isAccordionHeadSpan = target.classList.contains("accordionHeadSpan");

        if (isAccordionHead || isAccordionHeadSpan) {
            const accordionItem = target.closest(".accordion__item");

            accordionItems.forEach((item) => {
                item.classList.remove("active");
            });

            accordionItem.classList.toggle('active');
        }
    })
});