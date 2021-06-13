export type Exchange = {
    id?: string;
    name: string;
    year_established: number;
    trust_score: number;
    trust_score_rank: number;
    country: string;
    image: string;
    url: string;
}

export type ExchangeData = {
    name?: string;
    year_established?: number;
    country?: string;
    description?: string;
    url?: string;
    image?: string;
    facebook_url?: string;
    reddit_url?: string;
    telegram_url?: string;
    slack_url?: string;
    twitter_handle?: string;
    trust_score?: number;
    trust_score_rank?: number,
}