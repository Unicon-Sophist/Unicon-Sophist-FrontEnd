import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import * as React from 'react';
import ClassItem from './ClassItem';

SwiperCore.use([Navigation]);

function CommonSwiper() {
	return (
		<Swiper spaceBetween={20} slidesPerView={4} navigation>
			<SwiperSlide>
				<ClassItem />
			</SwiperSlide>
			<SwiperSlide>
				<ClassItem />
			</SwiperSlide>
			<SwiperSlide>
				<ClassItem />
			</SwiperSlide>
			<SwiperSlide>
				<ClassItem />
			</SwiperSlide>
			<SwiperSlide>
				<ClassItem />
			</SwiperSlide>
			<SwiperSlide>
				<ClassItem />
			</SwiperSlide>
			<SwiperSlide>
				<ClassItem />
			</SwiperSlide>
			<SwiperSlide>
				<ClassItem />
			</SwiperSlide>
			<SwiperSlide>
				<ClassItem />
			</SwiperSlide>
			<SwiperSlide>
				<ClassItem />
			</SwiperSlide>
			<SwiperSlide>
				<ClassItem />
			</SwiperSlide>
		</Swiper>
	);
}

export default CommonSwiper;
