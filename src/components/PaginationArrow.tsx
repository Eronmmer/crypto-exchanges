import React from "react";
import styled from "styled-components";

interface ArrowProps {
  inValid?: boolean;
  previous?: boolean
}

const PaginationArrow: React.FC<ArrowProps> = ({ inValid, previous }) => {
  return (
    <StyledArrow inValid={inValid} previous={previous} />
  )
};

const StyledArrow = styled.div<ArrowProps>`
  border-color: ${props => props.inValid ? "#B7BCC2" : "#2684FF"};
  height: 0.7rem;
  width: 0.7rem;
  border-style: solid;
  border-width: 0 0.15rem 0.15rem 0;
  transform: ${props => props.previous ? "rotate(135deg) translate(-0.1rem, -0.1rem)" : "rotate(-45deg) translate(-0.1rem, -0.1rem)"};
`

export default PaginationArrow;