import React from 'react';
import styled from 'styled-components';
import xbtn from 'assets/img/xbtn.svg';
import Portal from './Portal';

const CommonModal = ({
	onClose,
	maskClosable = true,
	closable = true,
	visible = false,
	children,
}: {
	onClose: () => void;
	maskClosable?: boolean;
	closable?: boolean;
	visible: boolean;
	children?: React.ReactNode;
}) => {
	const onMaskClick = (e: React.MouseEvent) => {
		if (maskClosable && e.target === e.currentTarget) {
			onClose();
		}
	};

	const close = (e: React.MouseEvent) => {
		if (onClose) {
			onClose();
		}
	};

	return (
		<Portal elementId="modal-root">
			<ModalOverlay visible={visible} />
			<ModalWrapper onClick={onMaskClick} tabIndex={-1} visible={visible}>
				<ModalInner tabIndex={0}>
					{closable && (
						<XbtnContainer>
							<Xbtn src={xbtn} onClick={close} />{' '}
						</XbtnContainer>
					)}
					{children}
				</ModalInner>
			</ModalWrapper>
		</Portal>
	);
};

const XbtnContainer = styled.div`
	width: 100%;
	position: absolute;
	display: flex;
	justify-content: flex-end;
	left: 0;
	padding: 0 50px;
	@media only screen and (max-width: 768px) {
		padding: 0 20px;
	}
`;

const Xbtn = styled.img`
	width: 20px;
	height: 20px;
	cursor: pointer;
`;

const ModalWrapper = styled.div<{ visible: boolean }>`
	padding: 10px;
	box-sizing: border-box;
	display: ${(props) => (props.visible ? 'block' : 'none')};
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1000;
	overflow: auto;
	outline: 0;
`;

const ModalOverlay = styled.div<{ visible: boolean }>`
	box-sizing: border-box;
	display: ${(props) => (props.visible ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 999;
`;

const ModalInner = styled.div`
	box-sizing: border-box;
	position: relative;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
	background-color: #fff;
	border-radius: 20px;
	max-width: 95%;
	max-height: 90%;
	top: 50%;
	transform: translateY(-50%);
	margin: 0 auto;
	padding: 35px 50px;
	overflow-y: auto;
	@media only screen and (max-width: 768px) {
		padding: 20px;
	}
`;

export default CommonModal;
