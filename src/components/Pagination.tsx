import React, {Dispatch, SetStateAction} from "react";
import styled from "styled-components";
import { showPaginationNumber } from "../utils";

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
          <div className="arrow" />
        </PaginationControl>
        {Array(10)
          .fill("")
          .map((_, i) => (
            <div
              className={`control ${currPage === i + 1 ? "active" : ""}`}
              key={i}
              onClick={() => setCurrentPage(i + 1)}
            >
              {showPaginationNumber(i, currPage, pageCount) ? (
                i + 1
              ) : (
                <span className="pagination-dot" />
              )}
            </div>
          ))}
        <PaginationControl
          onClick={currPage === pageCount ? () => { } : () => setCurrentPage(prev => prev + 1)}
          inValid={currPage === pageCount}
        >
          <div className="arrow" />
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
  margin-right: 2rem;

  & > div {
    display: flex;
    align-self: center;
  }

  .active {
    color: #2684FF;
    font-weight: bold;
    transform: scale(1.05);
  }

  .control {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: 0.3s ease-out;
    padding: 0.3rem 0.6rem;
    margin: 0 0.1rem;

    &:hover {
      background-color: #cbd5f1;
    }

    .pagination-dot {
      display: inline-block;
      border-radius: 50%;
      height: 0.3rem;
      width: 0.3rem;
      background-color: #B7BCC2;
    }
  }
`;

interface PaginationControlProps {
  readonly inValid: boolean;
  readonly previous?: boolean;
  readonly next?: boolean;
}

const PaginationControl = styled.div<PaginationControlProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  transition: 0.3s ease-out;
  padding: 0.6rem 0.9rem;
  margin: 0 0.2rem;
  font-size: 1rem;
  cursor: ${props => props.inValid ? "not-allowed" : "pointer"};
  background-color: #fff;
  
  .arrow {
    border-color: ${props => props.inValid ? "#B7BCC2" : "#2684FF"};
    height: 0.7rem;
    width: 0.7rem;
    border-style: solid;
    border-width: 0 0.15rem 0.15rem 0;
    transform: ${props => props.previous ? "rotate(135deg) translate(-0.1rem, -0.1rem)" : "rotate(-45deg) translate(-0.1rem, -0.1rem)"};
  }
  
  &:hover {
    background-color: ${props => props.inValid ? "#e7e8eb" : "#cbd5f1"};
  }

  border: 1px solid #DBDCE0;
`;

export default Pagination;