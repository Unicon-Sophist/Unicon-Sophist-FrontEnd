import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import * as React from 'react';
import ClassItem from './ClassItem';

SwiperCore.use([Navigation]);

function CommonSwiper() {
	return (
		<Swiper spaceBetween={30} slidesPerView={3} navigation>
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
