import styled from 'styled-components';

export const StyledBackButton = styled.div`
	cursor: pointer;
	margin: 2rem 0;
	display: flex;
	align-items: center;
	width: fit-content;
	padding: 0.6rem 1.3rem;
	border-radius: 10px;

	& > * + * {
		margin-left: 10px;
	}

	&:hover {
		background: rgba(0, 0, 0, 0.04);
	}

	strong {
		font-size: 1.2rem;
	}
`;
