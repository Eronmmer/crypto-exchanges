import { ReactElement } from 'react';
import { StyledCard } from './Styles';

interface CardProps {
	children?: ReactElement | ReactElement[];
	padding?: boolean;
}

export const Card = ({ children }: CardProps) => {
	return <StyledCard padding>{children}</StyledCard>;
};
