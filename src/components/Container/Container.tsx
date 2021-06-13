import { ReactElement } from 'react';
import { StyledContainer } from './Styles';

interface ContainerProps {
	children?: ReactElement | ReactElement[];
}

export const Container = ({ children }: ContainerProps) => {
	return <StyledContainer>{children}</StyledContainer>;
};
