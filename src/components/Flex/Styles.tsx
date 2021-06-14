import styled from 'styled-components';

export const StyledFlex = styled.div`
	display: flex;
	margin-bottom: 1rem;
	align-items: center;
	font-size: 0.9rem;

	& > * + * {
		margin-left: 10px;
	}

	@media (min-width: 768px) {
		font-size: 1rem;
	}
`;
