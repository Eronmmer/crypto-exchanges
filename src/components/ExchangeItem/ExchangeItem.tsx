import React from "react";
import { StyledItem, StyledName } from "./Styles";
import { Exchange } from "../../types";

export const ExchangeItem: React.FC<Exchange> = ({
  id,
  country,
  name,
  trust_score_rank,
  image
}) => {
  return (
    <StyledItem to={`/${id}`}>
      <StyledName>
        <img src={image} alt="" />
        <span >{name}</span>
      </StyledName>
      <p>{country}</p>
      <p>{trust_score_rank}</p>
    </StyledItem>
  )
};