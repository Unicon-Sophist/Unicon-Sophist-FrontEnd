import { FlexContainer } from 'assets/styles/global-styled';
import Paging from 'components/Paging';
import ReivewItem from 'components/ReivewItem';
import * as React from 'react';
import styled from 'styled-components';

const MyReview = () => {
	return (
		<>
			<ReivewItemContainer>
				{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
					return <ReivewItem key={item} index={item} />;
				})}
			</ReivewItemContainer>

			<Paging />
		</>
	);
};

const ReivewItemContainer = styled(FlexContainer)`
	flex-wrap: wrap;
`;
export default MyReview;
