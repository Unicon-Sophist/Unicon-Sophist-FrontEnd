import React, { useState } from 'react';
import Pagination from 'react-js-pagination';

const Paging = () => {
	const [page, setPage] = useState(1);

	const handlePageChange = (page: number) => {
		setPage(page);
	};

	return (
		<Pagination
			activePage={page}
			itemsCountPerPage={10}
			totalItemsCount={20}
			pageRangeDisplayed={5}
			prevPageText={'‹'}
			nextPageText={'›'}
			onChange={handlePageChange}
			lastPageText={''}
			firstPageText={''}
		/>
	);
};
export default Paging;
