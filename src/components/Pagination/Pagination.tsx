import { Dispatch, SetStateAction } from 'react';
import { showPaginationNumber } from '../../utils';
import { PaginationArrow } from '../PaginationArrow/PaginationArrow';
import {
	StyledPagination,
	StyledPaginationControl,
	StyledPaginationDot,
	StyledPaginationValue,
} from './Styles';

interface PaginationProps {
	currPage: number;
	pageCount: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({ currPage, setCurrentPage, pageCount }: PaginationProps) => {
	return (
		<StyledPagination>
			<div>
				<StyledPaginationControl
					onClick={currPage === 1 ? () => {} : () => setCurrentPage((prev) => prev - 1)}
					inValid={currPage === 1}
					previous
				>
					<PaginationArrow inValid={currPage === 1} previous />
				</StyledPaginationControl>
				{Array(10)
					.fill('')
					.map((_, i) => (
						<StyledPaginationValue
							active={currPage === i + 1}
							key={i}
							onClick={() => setCurrentPage(i + 1)}
						>
							{showPaginationNumber(i, currPage, pageCount) ? i + 1 : <StyledPaginationDot />}
						</StyledPaginationValue>
					))}
				<StyledPaginationControl
					onClick={currPage === pageCount ? () => {} : () => setCurrentPage((prev) => prev + 1)}
					inValid={currPage === pageCount}
				>
					<PaginationArrow inValid={currPage === pageCount} />
				</StyledPaginationControl>
			</div>
		</StyledPagination>
	);
};
