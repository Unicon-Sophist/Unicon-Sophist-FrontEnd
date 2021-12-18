import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { categoryList, isMobileSize } from 'utils';
import styled from 'styled-components';
import Color from 'assets/styles/color';

const CategorSlider = () => {
	return (
		<Swiper spaceBetween={isMobileSize ? 10 : 35} slidesPerView={isMobileSize ? 3 : 6}>
			{categoryList.map((i, index) => {
				return (
					<SwiperSlide key={'category' + index}>
						<CategoryItemContainer>
							<CategoryIcon src={i.img} />
							<CategoryFont>{i.title}</CategoryFont>
						</CategoryItemContainer>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default CategorSlider;

const CategoryItemContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-radius: 10px;
	background: #fefefe;
	border: 1px solid #eeeeee;
	width: 200px;
	height: 200px;

	&:hover {
		background-color: #f7f7f7;
	}

	@media only screen and (max-width: 768px) {
		width: 100px;
		height: 100px;
	}
`;
const CategoryIcon = styled.img`
	width: 64px;
	height: 64px;
	margin-bottom: 20px;

	@media only screen and (max-width: 768px) {
		width: 32px;
		height: 32px;
		margin-bottom: 5px;
	}
`;
const CategoryFont = styled.p`
	font-size: 20px;
	line-height: 38px;
	color: ${Color.fontGray};
	@media only screen and (max-width: 768px) {
		font-size: 16px;
		line-height: 24px;
	}
`;
