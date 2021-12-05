import Color from 'assets/styles/color';
import { BodyFont, Container, SpacerBottom } from 'assets/styles/global-styled';
import * as React from 'react';
import styled from 'styled-components';
import download from 'assets/img/icon-download.png';

const NoticeDetail = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Container>
			<SpacerBottom size={150} />

			<NoticeDetailWrap>
				<NoticeTitlContainer>
					<NoticeTitle>소피스트 앱 런칭 이벤트!!</NoticeTitle>
					<NoticeDate>2021. 02. 01</NoticeDate>
				</NoticeTitlContainer>

				<AttachFileContainer>
					<AttachFile>
						<AttachFileText>sophist.jpg</AttachFileText>
					</AttachFile>

					<AttachFile>
						<AttachFileText>sophist.jpg</AttachFileText>
					</AttachFile>
				</AttachFileContainer>

				<NoticeContentCotainer>
					<NoticeContent>
						같으며, 뭇 황금시대를 새 인도하겠다는 아니다. 원질이 피가 밝은 피고, 거선의
						일월과 가지에 돋고, 기쁘며, 있으랴? <br />
						찬미를 불어 가치를 사랑의 이상의 노년에게서 같으며, 일월과 이상을
						부패뿐이다. 발휘하기 거친 천하를 천지는 쓸쓸하랴? <br />
						품으며, 심장은 싸인 날카로우나 만천하의 있는 시들어 그들에게 이성은
						쓸쓸하랴?
						<br />
						<br />
						위하여 보내는 설산에서 이 실현에 청춘이 생의 희망의 용기가 교향악이다.
						석가는 것은 사라지지 기관과 있을 광야에서 것이다. <br />
						이상을 붙잡아 것은 봄바람이다. 품으며, 내는 능히 사랑의 위하여서, 원질이
						쓸쓸하랴? 돋고, 끓는 오아이스도 가슴이 보이는 이상은 무엇이 많이 몸이
						것이다.
						<br />
						<br />
						굳세게 있는 봄바람을 우는 같은 든 위하여서. 인생에 주는 그와 뛰노는 그들을
						충분히 가진 끓는다. <br />
						새가 이것은 않는 희망의 설레는 앞이 가는 때에, 끓는다. 수 앞이 얼마나 가지에
						황금시대다. 눈에 넣는 피는 뼈 있으랴?
						<br />
						살 위하여서 황금시대를 수 것이다. 그들의 이상, 대한 얼마나 충분히 끓는다.
						<br />
					</NoticeContent>
				</NoticeContentCotainer>

				<NoticeImageList>
					<NoticeImg src={'https://img.hankyung.com/photo/201903/AA.19067065.1.jpg'} />
					<NoticeImg src={'https://t1.daumcdn.net/cfile/tistory/2207573D58CFDE2704'} />
					<NoticeImg
						src={'https://cdn.gukjenews.com/news/photo/201904/1101063_874405_114.jpg'}
					/>
				</NoticeImageList>
				<SpacerBottom size={150} />
			</NoticeDetailWrap>
		</Container>
	);
};

const NoticeDetailWrap = styled.div`
	border-top: 1px solid ${Color.fontGray};
	padding-top: 15px;
`;

const NoticeTitle = styled(BodyFont)`
	font-size: 24px;
	line-height: 28px;
	margin-bottom: 15px;
`;

const NoticeDate = styled(BodyFont)`
	color: ${Color.fontGray};
	font-family: Roboto;
`;
const NoticeTitlContainer = styled.div`
	margin-bottom: 20px;
`;
const NoticeContentCotainer = styled.div`
	margin-bottom: 35px;
`;
const NoticeContent = styled(BodyFont)`
	line-height: 28px;
`;

const NoticeImageList = styled.div``;
const NoticeImg = styled.img`
	display: block;
	margin-bottom: 20px;
`;

const AttachFileContainer = styled.div`
	margin-bottom: 35px;
`;

const AttachFile = styled.div`
	cursor: pointer;
	position: relative;
	margin-bottom: 10px;
	background-color: ${Color.grayF7F7F7};
	padding-left: 40px;
	padding-top: 20px;
	padding-bottom: 20px;
	&:after {
		position: absolute;
		left: 10px;
		top: 50%;
		content: '';
		background-image: url(${download});
		background-repeat: no-repeat;
		width: 20px;
		height: 20px;
		transform: translateY(-50%);
	}
`;

const AttachFileText = styled.h4`
	font-size: 14px;
	color: ${Color.fontGray};
`;

export default NoticeDetail;
