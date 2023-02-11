(function () {

  const closeEveryItemInContainer = (container) =>{
  const items = container.find(".products-menu__item");
  const content = container.find(".products-menu__content");

  items.removeClass("active");
  content.width(0);
};

const measureWidth = (item) => {
    let reqItemWidth = 0;

    const screenWidth = $(window).width();

    const titlesBlocks = item.find(".products-menu__title");
    const titlesWidth = titlesBlocks.width()* 3;

    const textContainer = item.find(".products-menu__container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));

    const container = item.closest(".products-menu");
    
    const isMobile=window.matchMedia("(max-width: 768px)");

    if (isMobile.matches) {
      reqItemWidth = screenWidth - titlesWidth
      }
      else {
        reqItemWidth = 500
      }

      return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingLeft - paddingRight
      }
};

const openItem = (item) => {
    const hiddenContent = item.find(".products-menu__content");
    const reqWidth = measureWidth(item).container;
    const textBlock =item.find(".products-menu__container");
    const textBlockWidth = measureWidth(item).textContainer;

    item.addClass("active");
    hiddenContent.width(reqWidth);
    textBlock.width(textBlockWidth)

};

$(".products-menu__title").on("click", e =>{
e.preventDefault();

const $this = $(e.currentTarget);
const item = $this.closest(".products-menu__item");
const itemOpened = item. hasClass("active");
const container = $this.closest(".products-menu");

if (itemOpened){
  closeEveryItemInContainer(container);
}else {
  closeEveryItemInContainer(container);
  openItem (item); 
}

});

$(".products-menu__close").on("click", e =>{
  e.preventDefault();

  closeEveryItemInContainer($(".products-menu"));
});
}());