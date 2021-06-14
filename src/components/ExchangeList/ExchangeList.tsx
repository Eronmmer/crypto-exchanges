import { useState, Fragment } from 'react';
import { StyledHead } from './Styles';
import { ExchangeItem } from '../ExchangeItem';
import { Container } from '../Container';
import { Exchange } from '../../types';
import { endpoint } from '../../utils';
import { Card } from '../Card';
import { Loader } from '../Loader';
import { Pagination } from '../Pagination';
import { useFetch } from '../../hooks/useFetch';

export const ExchangeList = () => {
	const [currPage, setCurrentPage] = useState<number>(1);

	const pageCount = 10;
	const { data, error, loading } = useFetch(`${endpoint}?page=${currPage}&per_page=10`);

	return (
		<Container>
			<Card>
				<Fragment>
					{loading ? (
						<Loader />
					) : error ? (
						<p className="center">{error}</p>
					) : (
						<Fragment>
							<StyledHead>
								<p>Name</p>
								<p>Country</p>
								<p>Trust Score Rank</p>
							</StyledHead>
							<div>
								{data?.map(
									({
										country,
										id,
										name,
										url,
										year_established,
										trust_score,
										trust_score_rank,
										image,
									}: Exchange) => (
										<ExchangeItem
											key={id}
											id={id}
											country={country}
											name={name}
											url={url}
											year_established={year_established}
											trust_score={trust_score}
											trust_score_rank={trust_score_rank}
											image={image}
										/>
									),
								)}
							</div>
						</Fragment>
					)}
					{!loading && !error && (
						<Pagination currPage={currPage} pageCount={pageCount} setCurrentPage={setCurrentPage} />
					)}
				</Fragment>
			</Card>
		</Container>
	);
};
