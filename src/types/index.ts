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

export type GroupType = {
	categoryName: string;
	filePath: string;
	groupCd: string;
	groupDesc: string;
	groupDetailCd: string;
	groupName: string;
	groupStarPoint: number;
	originFileName: string;
};
