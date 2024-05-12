export default function PopupModule() {
  // Function to toggle active class
  function toggleActiveClass(element) {
    element.toggleClass("is-active");
  }
  $("body").click(function (e) {
    if (!$(e.target).closest(".js-menu").length) {
      $(".js-menu").removeClass("is-active");
    }
  });

  // Search
  $(".js-menu .user").click(function (e) {
    toggleActiveClass($(this).parents(".js-menu"));
  });
}
