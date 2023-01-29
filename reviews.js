const reviews = document.querySelectorAll(".review");
const previews = document.querySelectorAll(".author");

const removeActiveStatus = () =>{
    previews.forEach((preview, ndx)=>{
        preview.classList.remove("author--active");
        reviews[ndx].classList.remove("review__active");
    });
};

previews.forEach((preview, ndx) => {
    preview.addEventListener("click", () =>{
        removeActiveStatus();
        preview.classList.add("author--active");
        reviews[ndx].classList.add("review__active");
    });
});