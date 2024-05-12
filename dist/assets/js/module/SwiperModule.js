export default function SwiperModule() {
  if ($(".document-swiper").length) {
    const documentSwiper = new Swiper(".document-swiper .swiper", {
      speed: 1200,
      noSwiping: true,
      slidesPerView: "auto",
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: {el: ".document-swiper .pagi-pagination",clickable: true,},
    });
  }
}
