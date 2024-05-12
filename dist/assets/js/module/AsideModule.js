export default function AsideModule() {
  $(document).ready(function () {
    function toggleDirectory() {
      $(".aside-wrap").toggleClass("is-active");
      $("body").css(
        "overflow",
        $(".aside-wrap").hasClass("is-active") ? "hidden" : "auto"
      );
    }

    $(".aside-icon, .aside-close, .aside-overlay").on("click", toggleDirectory);
  });

  $(document).ready(function () {
    $(".subBtn").click(function (e) {
      e.preventDefault();
      $(this).toggleClass("is-active");
      $(this).next(".recheck-sidebar").stop().slideToggle();
    });
  });
}
