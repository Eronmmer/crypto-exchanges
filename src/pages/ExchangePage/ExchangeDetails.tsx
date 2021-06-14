import { Fragment } from 'react';
import { StyledHeader } from './Styles';
import { Flex } from '../../components/Flex';
import { Socials } from '../../components/Socails/Socials';
import { ExchangeData } from '../../types';

export const ExchangeDetails = (props: ExchangeData) => {
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
	} = props;

	return (
		<Fragment>
			<StyledHeader>
				<img style={{ width: '30px' }} src={image} alt="" />
				<h2>
					<a href={url}>{name}</a>
				</h2>
			</StyledHeader>
			{year_established && (
				<Flex>
					<strong>Year established: </strong>
					<span>{year_established}</span>
				</Flex>
			)}
			{country && (
				<Flex>
					<strong>Country: </strong>
					<span>{country}</span>
				</Flex>
			)}
			{description && (
				<Flex>
					<strong>Description: </strong>
					<span>{description}</span>
				</Flex>
			)}
			{trust_score !== null && (
				<Flex>
					<strong>Trust Score: </strong>
					<span>{trust_score}</span>
				</Flex>
			)}
			{trust_score_rank !== null && (
				<Flex>
					<strong>Trust Score Rank: </strong>
					<span>{trust_score_rank}</span>
				</Flex>
			)}
			<Socials
				twitter={twitter_handle}
				facebook={facebook_url}
				slack={slack_url}
				telegram={telegram_url}
				reddit={reddit_url}
			/>
		</Fragment>
	);
};
