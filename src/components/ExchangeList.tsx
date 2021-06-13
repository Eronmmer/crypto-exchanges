import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import ExchangeItem from "./ExchangeItem";
import Container from "./Container";
import { Exchange } from "../types";
import { endpoint } from "../utils";
import Card from "./Card";
import Loader from "./Loader";
import Pagination from "./Pagination"

const ExchangeList = () => {
    const [exchanges, setExchanges] = useState<Exchange[]>([]);
    const [currPage, setCurrentPage] = useState<number>(1);
    const [dataLoading, setDataLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);

    const pageCount = 10;

    useEffect(() => {
        const fetchExchanges = async (page: number) => {
            page = page <= 0 ? 1 : page;
            setDataLoading(true);
            try {
                let response = await fetch(`${endpoint}?page=${page}&per_page=10`);
                let data = await response.json();
                setExchanges(data);
            } catch {
                setError("An error occurred. Please try again.");
            } finally {
                setDataLoading(false);
            }
        }
        fetchExchanges(currPage);
    }, [currPage]);
    return (
        <Container>
            <Card>
                <Fragment>
                    {
                        dataLoading ? (
                            <Loader />
                        ) : error ? <p className="center">{error}</p> : (
                            <Fragment>
                                <StyledHead>
                                    <p>Name</p>
                                    <p>Country</p>
                                    <p>Trust Score Rank</p>
                                </StyledHead>
                                <div>
                                    {exchanges.map(({
                                        country,
                                        id,
                                        name,
                                        url,
                                        year_established,
                                        trust_score,
                                        trust_score_rank,
                                        image
                                    }) =>
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
                                    )}
                                </div>
                            </Fragment>
                        )
                    }
                    {!dataLoading && !error && (
                        <Pagination
                            currPage={currPage}
                            pageCount={pageCount}
                            setCurrentPage={setCurrentPage}
                        />
                    )}
                </Fragment>
            </Card>
        </Container>
    )
}

const StyledHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: .9rem;
  padding: 0 .5rem;
  
  p {
    font-weight: 500;
    flex-basis: 30%;

    &:last-child {
        flex-basis: 39%;
    }

    @media(min-width: 768px) {
        font-size: 1.2rem;

        &:not(:first-child) {
            text-align: center;
        }
    }
  }
`;

export default ExchangeList;