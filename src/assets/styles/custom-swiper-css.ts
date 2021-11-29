import active from 'assets/img/pagination-active.png';

const customSwiperCss = `
html {

}

.swiper-container .swiper-button-next:after {
  content: "";
  background-image :url(${active});
  width: 80px;
  height: 80px;
}

.swiper-container .swiper-button-prev:after {
  content: "";
  background-image :url(${active});
  width: 80px;
  height: 80px;
  transform: rotate(
    180deg);
}

.swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {

}

.swiper-button-prev, .swiper-button-next {
  width: auto;
}
`;

export default { customSwiperCss };
