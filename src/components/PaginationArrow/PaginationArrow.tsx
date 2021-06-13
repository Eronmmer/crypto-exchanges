import React from 'react';
import { StyledPaginationArrow } from './Styles';

export interface ArrowProps {
	inValid?: boolean;
	previous?: boolean;
}

export const PaginationArrow: React.FC<ArrowProps> = ({ inValid, previous }) => {
	return <StyledPaginationArrow inValid={inValid} previous={previous} />;
};
