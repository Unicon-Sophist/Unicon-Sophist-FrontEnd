import { useMemo } from 'react';
import { createPortal } from 'react-dom';
import * as React from 'react';

interface PropsTypes {
	elementId: string;
	children: React.ReactNode;
}

const Portal = (props: PropsTypes) => {
	const rootElement = useMemo(
		() => document.getElementById(props.elementId),
		[props.elementId],
	) as HTMLElement;

	return createPortal(props.children, rootElement);
};

export default Portal;
