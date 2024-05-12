export default function PopupSearchModule() {
  // Function to toggle active class
  function toggleActiveClass(element) {
    element.toggleClass("is-active");
  }
  $("body").click(function (e) {
    if (!$(e.target).closest(".js-menu-search").length) {
      $(".js-menu-search").removeClass("is-active");
    }
  });

  // Search
  $(".js-menu-search .search").click(function (e) {
    toggleActiveClass($(this).parents(".js-menu-search"));
  });
}
