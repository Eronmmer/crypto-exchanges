import { StyledItem, StyledName } from './Styles';

interface ExchangeItemProps {
	id: string;
	country: string;
	name: string;
	trust_score_rank: number;
	image: string;
}

export const ExchangeItem = ({ id, country, name, trust_score_rank, image }: ExchangeItemProps) => {
	return (
		<StyledItem to={`/${id}`}>
			<StyledName>
				<img src={image} alt="" />
				<span>{name}</span>
			</StyledName>
			<p>{country}</p>
			<p>{trust_score_rank}</p>
		</StyledItem>
	);
};
