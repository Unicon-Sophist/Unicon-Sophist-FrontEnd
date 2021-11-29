import { ContainerSmall, H1, SpacerBottom } from 'assets/styles/global-styled';
import CommonBtn from 'components/CommonBtn';
import CommonInput from 'components/CommonInput';
import * as React from 'react';
import { useEffect, useState } from 'react';

const SiginIn = () => {
	useEffect(() => {}, []);

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	return (
		<ContainerSmall>
			<H1>로그인</H1>
			<SpacerBottom size={80} />
			<CommonInput label={'이메일'} value={email} setValue={setEmail} type={'text'} />
			<SpacerBottom size={50} />
			<CommonInput
				label={'비밀번호'}
				value={password}
				setValue={setPassword}
				type={'password'}
			/>
			<SpacerBottom size={70} />

			<CommonBtn text={'로그인'} callback={() => console.log('!!!')} />
		</ContainerSmall>
	);
};

export default SiginIn;
