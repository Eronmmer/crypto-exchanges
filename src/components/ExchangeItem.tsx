import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Exchange } from "../types";

const ExchangeItem: React.FC<Exchange> = ({
  id,
  country,
  name,
  url,
  year_established,
  trust_score,
  trust_score_rank,
  image
}) => {
  return (
    <StyledItem to={`/${id}`}>
      <StyledName>
        <img src={image} alt="" />
        <a href={url}>{name}</a>
      </StyledName>
      <p>{country}</p>
      <p>{year_established}</p>
      <p>{trust_score}</p>
      <p>{trust_score_rank}</p>
    </StyledItem>
  )
}

const StyledItem = styled(Link)`
  padding: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: initial;
  text-decoration: none;
  
  &:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  & > * {
    flex-basis: 33%;
    text-align: left;
    text-decoration: none;

    &:not(:first-child) {
      text-align: center;
    }
  }
  
  &:hover {
    background-color:  #f4f5f7;
  }
`;

const StyledName = styled.div`
  display: flex;
  gap: .5rem;
  align-items: center;

  img {
    width: 30px;
  }

  a {
    font-weight: 500;
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default ExchangeItem;