import * as React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import styled from 'styled-components';
import Color from 'assets/styles/color';
import { BodyFont, FlexContainer, H1 } from 'assets/styles/global-styled';
import mainImg from 'assets/img/main-img1.png';
import mainImg2 from 'assets/img/main-img2.jpg';
import mainImg3 from 'assets/img/main-img3.jpg';
import mainImg4 from 'assets/img/main-img4.jpg';

const MainTopSlider = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(1);
	SwiperCore.use([Autoplay]);

	return (
		<SliderMainContainer justify={'space-between'}>
			<LeftSlideContainer>
				<LeftSlideImg src={mainImg} alt="main-img" isActive={currentSlide === 1} />
				<LeftSlideImg src={mainImg2} alt="main-img2" isActive={currentSlide === 2} />
				<LeftSlideImg src={mainImg3} alt="main-img3" isActive={currentSlide === 3} />
				<LeftSlideImg src={mainImg4} alt="main-img4" isActive={currentSlide === 4} />
			</LeftSlideContainer>

			<RightSliderContainer>
				<SlidePageContainer>
					<CurrentSlide>0{currentSlide}</CurrentSlide>
					<Slash>/</Slash>
					<TotalSlide>04</TotalSlide>
				</SlidePageContainer>
				<Swiper
					speed={1000}
					autoplay={{ delay: 5000 }}
					spaceBetween={0}
					slidesPerView={1}
					onActiveIndexChange={(e: any) => {
						setCurrentSlide(e.activeIndex + 1);
					}}
				>
					<SwiperSlide>
						<SlideContainer>
							<SlideTitle>Reading Person</SlideTitle>

							<SlideDesc>
								책에서 찾아낸 한줌의 소중한 문구와 그 문구의 깊음을 아는 당신을 위한
								책과 소통하는 공간 소피스트 입니다. 책에서 찾아낸 한줌의 소중한
								문구와 당신을 위한 책과 소통하는 공간 소피스트 입니다.
							</SlideDesc>
						</SlideContainer>
					</SwiperSlide>
					<SwiperSlide>
						<SlideContainer>
							<SlideTitle>Reading Person</SlideTitle>

							<SlideDesc>
								책에서 찾아낸 한줌의 소중한 문구와 그 문구의 깊음을 아는 당신을 위한
								책과 소통하는 공간 소피스트 입니다. 책에서 찾아낸 한줌의 소중한
								문구와 당신을 위한 책과 소통하는 공간 소피스트 입니다.
							</SlideDesc>
						</SlideContainer>
					</SwiperSlide>

					<SwiperSlide>
						<SlideContainer>
							<SlideTitle>Reading Person</SlideTitle>

							<SlideDesc>
								책에서 찾아낸 한줌의 소중한 문구와 그 문구의 깊음을 아는 당신을 위한
								책과 소통하는 공간 소피스트 입니다. 책에서 찾아낸 한줌의 소중한
								문구와 당신을 위한 책과 소통하는 공간 소피스트 입니다.
							</SlideDesc>
						</SlideContainer>
					</SwiperSlide>

					<SwiperSlide>
						<SlideContainer>
							<SlideTitle>Reading Person</SlideTitle>

							<SlideDesc>
								책에서 찾아낸 한줌의 소중한 문구와 그 문구의 깊음을 아는 당신을 위한
								책과 소통하는 공간 소피스트 입니다. 책에서 찾아낸 한줌의 소중한
								문구와 당신을 위한 책과 소통하는 공간 소피스트 입니다.
							</SlideDesc>
						</SlideContainer>
					</SwiperSlide>
				</Swiper>
			</RightSliderContainer>
		</SliderMainContainer>
	);
};

export default MainTopSlider;
const SliderMainContainer = styled(FlexContainer)`
	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

const LeftSlideContainer = styled.div`
	max-width: 900px;
	max-height: 600px;
	@media only screen and (max-width: 768px) {
		max-height: 450px;
		margin-bottom: 20px;
	}
`;
const LeftSlideImg = styled.img<{ isActive: boolean }>`
	position: relative;
	height: ${({ isActive }) => (isActive ? 'auto' : '0px')};
	opacity: ${({ isActive }) => (isActive ? 1 : 0)};
	transition: 0.8s;
	left: ${({ isActive }) => (isActive ? 0 : '-50%')};
	border-bottom-right-radius: 200px;
`;
const RightSliderContainer = styled.div`
	max-width: 350px;
	margin: 0 auto;
	align-self: flex-end;
`;

const SlideTitle = styled(H1)`
	text-align: left;
	color: ${Color.pinkFontColor};
	margin-bottom: 20px;
	font-family: RIDIBatang;
`;
const SlideDesc = styled(BodyFont)`
	color: ${Color.fontGray};
	line-height: 30px;
`;
const SlidePageContainer = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	@media only screen and (max-width: 768px) {
		margin-bottom: 30px;
	}
`;
const CurrentSlide = styled.p`
	font-size: 40px;
	line-height: 36px;
	color: #642418;
	font-family: RIDIBatang;
`;
const TotalSlide = styled.p`
	font-size: 20px;
	line-height: 36px;
	font-family: RIDIBatang;
	color: ${Color.fontGray};
	position: relative;
	top: 7px;
`;
const SlideContainer = styled.div``;
const Slash = styled.p`
	color: ${Color.fontGray};
	font-size: 14px;
	line-height: 36px;
	margin-left: 10px;
	margin-right: 10px;
	position: relative;
	top: 4px;
`;
