import styled from 'styled-components';

export const StyledSocials = styled.div`
	margin-top: 1.5rem;
	display: flex;
	align-items: center;

	& > * + * {
		margin-left: 10px;
	}
`;

export const StyledIcon = styled.img`
	width: 30px;
`;
