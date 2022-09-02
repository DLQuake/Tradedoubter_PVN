let pageIndex = 1;
showPages(pageIndex);

function plusPages(n) {
    showPages(pageIndex += n);
}
function showPages(n) {
    let i;
    let pages = document.getElementsByClassName("news__pages-page");
    if (n > pages.length) { pageIndex = 1 }
    if (n < 1) { pageIndex = pages.length }
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    pages[pageIndex - 1].style.display = "block";
}