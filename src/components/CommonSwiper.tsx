import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import * as React from 'react';
import { isMobileSize } from 'utils';

SwiperCore.use([Navigation]);

function CommonSwiper({ Item, viewSize }: { Item: JSX.Element; viewSize?: number }) {
	return (
		<Swiper
			spaceBetween={isMobileSize ? 10 : 30}
			slidesPerView={viewSize ? viewSize : 3}
			navigation
		>
			<SwiperSlide>{Item}</SwiperSlide>
			<SwiperSlide>{Item}</SwiperSlide>
			<SwiperSlide>{Item}</SwiperSlide>
			<SwiperSlide>{Item}</SwiperSlide>
			<SwiperSlide>{Item}</SwiperSlide>
			<SwiperSlide>{Item}</SwiperSlide>
			<SwiperSlide>{Item}</SwiperSlide>
			<SwiperSlide>{Item}</SwiperSlide>
			<SwiperSlide>{Item}</SwiperSlide>
			<SwiperSlide>{Item}</SwiperSlide>
			<SwiperSlide>{Item}</SwiperSlide>
		</Swiper>
	);
}

export default CommonSwiper;
