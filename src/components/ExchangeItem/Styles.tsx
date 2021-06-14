import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledItem = styled(Link)`
	padding: 1rem 0.5rem;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: initial;
	font-size: 0.9rem;

	&:last-child {
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	& > * {
		flex-basis: 33%;
		text-align: left;

		&:last-child {
			text-align: center;
		}

		@media (min-width: 768px) {
			font-size: 1rem;

			&:not(:first-child) {
				text-align: center;
			}
		}
	}

	@media (min-width: 768px) {
		font-size: 1.2rem;

		img {
			width: 30px;
			display: block;
		}
	}

	&:hover {
		background-color: #f4f5f7;
	}
`;

export const StyledName = styled.div`
	display: flex;
	align-items: center;

	img {
		display: none;
	}

	span {
		font-weight: 500;
	}

	& > * + * {
		margin-left: 10px;
	}
	@media (min-width: 768px) {
		font-size: 1.2rem;

		img {
			width: 30px;
			display: block;
		}
	}
`;
