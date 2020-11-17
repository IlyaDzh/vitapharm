const fullImage = document.querySelector(".product-images__large>img");
const images = document.querySelectorAll(".product-images__list>div");

images.forEach(image =>
    image.addEventListener("click", event => {
        fullImage.src = event.target.currentSrc;
        removeActiveClass();
    })
);

function removeActiveClass() {
    images.forEach(image => {
        if (fullImage.src === image.children[0].currentSrc) {
            image.classList.add("active");
        } else {
            image.classList.remove("active");
        }
    });
}
