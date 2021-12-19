export type WebRTCUser = {
	id: string;
	email: string;
	stream: MediaStream;
};

export type MatchParams = {
	id: string;
};

export type ChattingListType = {
	nickname: string;
	content: string;
}[];
