import * as React from 'react';
import { useState, useEffect } from 'react';
import { throttle } from 'lodash';
import IntroVisual from './IntroVisual';
import IntroList from './IntroList';

const Intro = () => {
	const [scrollPostion, setScrollPostion] = useState(0);
	const scrollEvent = throttle(() => {
		const scrollTop = window.scrollY;
		setScrollPostion(scrollTop);
	}, 100);

	useEffect(() => {
		window.addEventListener('scroll', scrollEvent);

		return () => window.removeEventListener('scroll', scrollEvent);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<IntroVisual />
			<IntroList scrollPostion={scrollPostion} />
		</>
	);
};

export default Intro;
