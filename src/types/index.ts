export type WebRTCUser = {
	id: string;
	email: string;
	stream: MediaStream;
};

export type MatchParams = {
	id: string;
};

export type ChattingType = { nickname?: string; content?: string };

export type ChattingListType = ChattingType[];
