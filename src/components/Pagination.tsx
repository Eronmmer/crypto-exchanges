import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { showPaginationNumber } from "../utils";
import PaginationArrow from "./PaginationArrow";

interface PaginationProps {
  currPage: number;
  pageCount: number;
  setCurrentPage: Dispatch<SetStateAction<number>>
}

const Pagination: React.FC<PaginationProps> = ({ currPage, setCurrentPage, pageCount }) => {
  return (
    <StyledPagination>
      <div>
        <PaginationControl
          onClick={currPage === 1 ? () => { } : () => setCurrentPage(prev => prev - 1)}
          inValid={currPage === 1}
          previous
        >
          <PaginationArrow inValid={currPage === 1} previous />
        </PaginationControl>
        {Array(10)
          .fill("")
          .map((_, i) => (
            <StyledPaginationValue
              active={currPage === i + 1}
              key={i}
              onClick={() => setCurrentPage(i + 1)}
            >
              {showPaginationNumber(i, currPage, pageCount) ? (
                i + 1
              ) : (
                <StyledPaginationDot />
              )}
            </StyledPaginationValue>
          ))}
        <PaginationControl
          onClick={currPage === pageCount ? () => { } : () => setCurrentPage(prev => prev + 1)}
          inValid={currPage === pageCount}
        >
          <PaginationArrow inValid={currPage === pageCount} />
        </PaginationControl>
      </div>
    </StyledPagination>
  )
};

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;

  & > div {
    display: flex;
    align-self: center;
  }

  @media(min-width: 768px) {
    margin-right: 2rem;
  }
`;

const StyledPaginationValue = styled.div<{active: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 0.3s ease-out;
  padding: 5px;
  margin: 0 0.1rem;
  font-size: .8rem;

  color: ${props => props.active ? "#2684FF" : "inherit"};
  font-weight: ${props => props.active ? "bold" : "normal"};
  transform: ${props => props.active ? "scale(1.05)" : "scale(1)"};

  &:hover {
    background-color: #cbd5f1;
  }

  @media(min-width: 768px) {
    font-size: 1rem;
    padding: 0.3rem 0.6rem;
  }
`;

const StyledPaginationDot = styled.span`
  display: inline-block;
  border-radius: 50%;
  height: 0.3rem;
  width: 0.3rem;
  background-color: #B7BCC2;
`;
interface PaginationControlProps {
  readonly inValid: boolean;
  readonly previous?: boolean;
  readonly next?: boolean;
};

const PaginationControl = styled.div<PaginationControlProps>`
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  transition: 0.3s ease-out;
  padding: 0.6rem 0.9rem;
  margin: 0 0.2rem;
  font-size: 1rem;
  cursor: ${props => props.inValid ? "not-allowed" : "pointer"};
  background-color: #fff;
  
  &:hover {
    background-color: ${props => props.inValid ? "#e7e8eb" : "#cbd5f1"};
  }

  border: 1px solid #DBDCE0;

  @media(min-width: 768px) {
    display: flex;
  }
`;

export default Pagination;