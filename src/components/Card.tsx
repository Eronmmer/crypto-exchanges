import React, { ReactElement } from "react";
import styled from "styled-components";

interface CardProps {
    children?: ReactElement,
    padding?: boolean
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <StyledCard padding>
            {children}
        </StyledCard>
    )
};

const StyledCard = styled.div<{ readonly padding?: boolean; }>`
  background-color: white;
  margin: 2.5rem 0;
  border: 1px solid #efefef;
  box-shadow:
          0 1px 3px rgb(0 0 0 / 30%),
          0 10px 0 -5px #eee,
          0 10px 1px -4px rgb(0 0 0 / 15%),
          0px 5px 0 -4px #eee;
  padding: ${props => props.padding ? "1rem 2.5rem" : "1rem 0"};
`

export default Card;