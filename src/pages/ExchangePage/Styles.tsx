import styled from 'styled-components';

export const StyledHeader = styled.div`
	display: flex;
	align-items: center;

	& > * + * {
		margin-left: 10px;
	}

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;
