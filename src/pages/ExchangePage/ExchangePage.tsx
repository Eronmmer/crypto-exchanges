import { ExchangeDetails } from './ExchangeDetails';
import { Container } from '../../components/Container';
import { BackButton } from '../../components/BackButton';

export const ExchangePage = () => {
	return (
		<div>
			<Container>
				<BackButton text="Go back" />
				<ExchangeDetails />
			</Container>
		</div>
	);
};
