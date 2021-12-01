import CommonModal from 'components/CommonModal';
import { FC } from 'react';
import * as React from 'react';
import { useState } from 'react';
import FirstLoginPopup from 'pages/popup/FirstLoginPopup';
import ReviewPopup from 'pages/popup/ReviewPopup';

const Main: FC = () => {
	const [firstLoginPopupVisible, setFirstLoginPopupVisible] = useState<boolean>(false);
	const [reviewPopupVisible, setReviewPopupVisible] = useState<boolean>(false);

	return (
		<main className="">
			<input
				type="button"
				onClick={() => setFirstLoginPopupVisible(true)}
				value={'로그인 팝업'}
			/>

			<input type="button" onClick={() => setReviewPopupVisible(true)} value={'리뷰 팝업'} />

			<CommonModal
				visible={firstLoginPopupVisible}
				onClose={() => setFirstLoginPopupVisible(false)}
			>
				<FirstLoginPopup />
			</CommonModal>

			<CommonModal visible={reviewPopupVisible} onClose={() => setReviewPopupVisible(false)}>
				<ReviewPopup />
			</CommonModal>
		</main>
	);
};

export default Main;
