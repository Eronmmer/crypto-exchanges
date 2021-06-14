import styled from 'styled-components';

export const StyledHeader = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;
