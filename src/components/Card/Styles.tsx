import styled from 'styled-components';

export const StyledCard = styled.div<{ readonly padding?: boolean }>`
	background-color: white;
	margin: 2.5rem 0;
	border: 1px solid #efefef;
	box-shadow: 0 1px 3px rgb(0 0 0 / 30%), 0 10px 0 -5px #eee, 0 10px 1px -4px rgb(0 0 0 / 15%),
		0px 5px 0 -4px #eee;
	padding: 0.7rem;

	@media (min-width: 768px) {
		padding: ${(props) => (props.padding ? '1rem 2rem' : '1rem 0')};
	}
`;
