import { StyledPaginationArrow } from './Styles';

export interface ArrowProps {
	inValid?: boolean;
	previous?: boolean;
}

export const PaginationArrow = ({ inValid, previous }: ArrowProps) => {
	return <StyledPaginationArrow inValid={inValid} previous={previous} />;
};
