import React, {useEffect, useState, Fragment} from "react";
import {useParams} from "react-router-dom";
import Container from "../components/Container";
import BackButton from "../components/BackButton";
import Card from "../components/Card";
import {endpoint} from "../utils";
import {ExchangeData} from "../types";
import Loader from "../components/Loader";
import styled from "styled-components";
import Flex from "../components/Flex";
import Socials from "../components/Socials";

const ExchangePage = () => {
    const {id} = useParams<{id: string}>();

    const [exchangeData, setExchangeData] = useState<ExchangeData>({});
    const [dataLoading, setDataLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);

    const {name, url, image, year_established, country, description, trust_score, trust_score_rank, twitter_handle, facebook_url, telegram_url, reddit_url, slack_url} = exchangeData;

    useEffect(() => {
        const fetchExchangeData = async () => {
            setDataLoading(true);
            try {
                let response = await fetch(`${endpoint}/${id}`);
                if(response.status === 404) {
                    setError("This exchange could not be found. Please go back and select a valid one.")
                }
                let data = await response.json();
                setExchangeData(data);
            } catch(error) {
                setError("An error occurred. Please refresh and try again")
            } finally {
                setDataLoading(false);
            }
        }
        fetchExchangeData();
    }, [id])
    return (
        <div>
            <Container>
                <BackButton text="Go back" />
                <Card padding>
                    {dataLoading ? <Loader /> : error ? <p className="center">{error}</p> : (
                       <Fragment>
                           <StyledHeader>
                               <img style={{width: '30px'}} src={image} alt="" />
                               <h2>
                                   <a href={url}>{name}</a>
                               </h2>
                           </StyledHeader>
                           {
                               year_established && (
                                   <Flex>
                                       <strong>Year established: </strong>
                                       <span>{year_established}</span>
                                   </Flex>
                               )
                           }
                           {
                               country && (
                                   <Flex>
                                       <strong>Country: </strong>
                                       <span>{country}</span>
                                   </Flex>
                               )
                           }
                           {
                               description && (
                                   <Flex>
                                       <strong>Description: </strong>
                                       <span>{description}</span>
                                   </Flex>
                               )
                           }
                           {
                               trust_score !== null && (
                                   <Flex>
                                       <strong>Trust Score: </strong>
                                       <span>{trust_score}</span>
                                   </Flex>
                               )
                           }
                           {
                               trust_score_rank !== null && (
                                   <Flex>
                                       <strong>Trust Score Rank: </strong>
                                       <span>{trust_score_rank}</span>
                                   </Flex>
                               )
                           }
                           <Socials
                               twitter={twitter_handle}
                               facebook={facebook_url}
                               slack={slack_url}
                               telegram={telegram_url}
                               reddit={reddit_url}
                           />
                       </Fragment>
                    )}
                </Card>
            </Container>
        </div>
    )
};

const StyledHeader = styled.div`
  display: flex;
  gap: .5rem;
  align-items: center;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default ExchangePage;