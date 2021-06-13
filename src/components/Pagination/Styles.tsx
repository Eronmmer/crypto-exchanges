import styled from "styled-components";

export const StyledPagination = styled.div`
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

export const StyledPaginationValue = styled.div<{ active: boolean }>`
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

export const StyledPaginationDot = styled.span`
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

export const StyledPaginationControl = styled.div<PaginationControlProps>`
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