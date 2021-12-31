import React from 'react';
const { Kakao } = window;

const loginWithKakao = () => {
	const scope = '';
	Kakao.Auth.login({
		scope,
		success: function (response) {
			window.Kakao.Auth.setAccessToken(response.access_token);
			console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);

			const ACCESS_TOKEN = window.Kakao.Auth.getAccessToken();
			console.log(ACCESS_TOKEN);
			window.Kakao.API.request({
				url: '/v2/user/me',
				success: function ({ kakao_account }) {
					const { email, profile } = kakao_account;
					console.log(email, profile);
				},
				fail: function (error) {
					console.log(error);
				},
			});
		},
		fail: function (error) {
			console.log(error);
		},
	});
};

const KakaoLogin = () => {
	return (
		<div>
			<a id="custom-login-btn" onClick={loginWithKakao}>
				<img
					src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
					width="222"
				/>
			</a>
		</div>
	);
};

export default KakaoLogin;
