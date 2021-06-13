import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Exchange } from "../types";

const ExchangeItem: React.FC<Exchange> = ({
  id,
  country,
  name,
  url,
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
      <p>{trust_score_rank}</p>
    </StyledItem>
  )
}

const StyledItem = styled(Link)`
  padding: 1rem .5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: initial;
  font-size: 0.9rem;
  
  &:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  & > * {
    flex-basis: 33%;
    text-align: left;

    &:last-child {
      text-align: center;
    }

    @media(min-width: 768px) {
      font-size: 1rem;

      &:not(:first-child) {
        text-align: center;
      }
    }
  }

  @media(min-width: 768px) {
    font-size: 1.2rem;

    img {
      width: 30px;
      display: block;
    }
  }
  
  &:hover {
    background-color:  #f4f5f7;
  }
`;

const StyledName = styled.div`
  display: flex;
  gap: .5rem;

  img {
    display: none;
  }

  a {
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  @media(min-width: 768px) {
    font-size: 1.2rem;
    
    img {
      width: 30px;
      display: block;
    }
  }
`

export default ExchangeItem;