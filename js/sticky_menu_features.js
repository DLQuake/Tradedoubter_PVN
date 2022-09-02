let featureLinks = document.querySelectorAll(".features__navigation-list-item");

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    featureLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});