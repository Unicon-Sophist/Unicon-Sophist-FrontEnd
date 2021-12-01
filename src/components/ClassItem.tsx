import * as React from 'react';
import book from 'assets/img/book.png';
import styled from 'styled-components';

const ClassItem = () => {
	return (
		<ClassItemContainer>
			<ClassImgContainer>
				<ClassImg src={book} alt={'class-img'} />
			</ClassImgContainer>
			<TitleContainer>
				<TitleText></TitleText>
				<GroupText></GroupText>
			</TitleContainer>

			<ContentContainer>
				<Content></Content>
			</ContentContainer>
			<TagContainer>
				<Tag></Tag>
			</TagContainer>
		</ClassItemContainer>
	);
};

const ClassImgContainer = styled.div`
	position: relative;
`;

const ClassItemContainer = styled.div`
	position: relative;
`;
const ClassImg = styled.img``;
const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const ContentContainer = styled.div``;
const TagContainer = styled.div``;
const TitleText = styled.p``;
const Content = styled.h4`
	display: inline-block;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;
const GroupText = styled.h4``;
const Tag = styled.p``;

export default ClassItem;
