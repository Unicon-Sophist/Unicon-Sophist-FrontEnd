import active from 'assets/img/pagination-active.png';
import Color from './color';
import arr from 'assets/img/paging-arr.png';
import arrActive from 'assets/img/paging-arr-active.png';

const customSwiperCss = `
html {}

// swiper css
.swiper-container .swiper-button-next:after {
  content: "";
  background-image :url(${active});
  width: 60px;
  height: 60px;
  background-size: contain;
}

.swiper-container .swiper-button-prev:after {
  content: "";
  background-image :url(${active});
  width: 60px;
  height: 60px;
  transform: rotate(180deg);
  background-size: contain;
}

.swiper-button-prev, .swiper-button-next {
  width: auto;
  top: calc(50% - 40px)
}

// paging css
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination li a {
  font-size: 16px;
  line-height: 18px;
  color: ${Color.grayCCCC};
  margin-right: 10px;
  width: 36px;
  height: 36px;  
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination li a:hover, .pagination li.active a {
  border-radius: 50%;
  background-color: ${Color.subOrange};
  color: white;
}

.pagination li.disabled a[aria-label="Go to previous page"] {
  background-image: url(${arrActive});
}

.pagination li.disabled a[aria-label="Go to next page"] {
  background-image: url(${arrActive});
  transform: rotate(180deg);
}

.pagination li a[aria-label="Go to previous page"] {
  font-size: 0px;
  background-image: url(${arr});
  width: 36px;
  height: 36px;
  background-repeat: no-repeat;
  background-position: center;
}

.pagination li a[aria-label="Go to next page"] {
  font-size: 0px;
  background-image: url(${arr});
  width: 36px;
  height: 36px;
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(180deg);
}

.pagination li:first-child, .pagination li:last-child {
  display: none;
}


.pagination li.disabled a[aria-label="Go to previous page"]:hover, .pagination li.disabled a[aria-label="Go to next page"]:hover,
.pagination li a[aria-label="Go to previous page"]:hover, .pagination li a[aria-label="Go to next page"]:hover {
  background-color: white;
  color: ${Color.grayCCCC};
}
`;

export default { customSwiperCss };
