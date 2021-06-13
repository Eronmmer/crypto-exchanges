export const showPaginationNumber = (i: number, page: number, pageCount: number) => {
	return i === 0 || i === pageCount - 1 || Math.abs(page - i) < 2 || i === page;
};

export const endpoint = 'https://api.coingecko.com/api/v3/exchanges';
