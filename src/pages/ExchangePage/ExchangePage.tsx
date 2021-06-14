import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Loader } from '../../components/Loader';
import { endpoint } from '../../utils';
import { useFetch } from '../../hooks/useFetch';
import { ExchangeDetails } from './ExchangeDetails';
import { Container } from '../../components/Container';
import { BackButton } from '../../components/BackButton';

export const ExchangePage = () => {
	const { id } = useParams<{ id: string }>();

	const { data, error, loading, status } = useFetch(`${endpoint}/${id}`);
	const {
		name,
		url,
		image,
		year_established,
		country,
		description,
		trust_score,
		trust_score_rank,
		twitter_handle,
		facebook_url,
		telegram_url,
		reddit_url,
		slack_url,
	} = data ?? {};

	return (
		<div>
			<Container>
				<BackButton text="Go back" />
				<Card padding>
					{loading ? (
						<Loader />
					) : error ? (
						<p className="center">An error occurred. Please refresh and try again</p>
					) : status === 404 ? (
						<p className="center">
							This exchange could not be found. Please go back and select a valid one.
						</p>
					) : (
						<ExchangeDetails
							name={name}
							url={url}
							image={image}
							year_established={year_established}
							country={country}
							description={description}
							trust_score={trust_score}
							trust_score_rank={trust_score_rank}
							twitter_handle={twitter_handle}
							facebook_url={facebook_url}
							telegram_url={telegram_url}
							reddit_url={reddit_url}
							slack_url={slack_url}
						/>
					)}
				</Card>
			</Container>
		</div>
	);
};
