import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import * as React from 'react';
import { isMobileSize } from 'utils';
import { GroupType } from 'types';
import ClassItem from 'components/ClassItem';
SwiperCore.use([Navigation]);

const GroupList = ({ list }: { list: GroupType[] }) => {
	console.log(list);
	return (
		<Swiper spaceBetween={isMobileSize ? 10 : 30} slidesPerView={3} navigation>
			{list.map((i) => {
				return (
					<SwiperSlide key={i.groupDetailCd}>
						<ClassItem item={i} size={isMobileSize ? 130 : 300} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default GroupList;
