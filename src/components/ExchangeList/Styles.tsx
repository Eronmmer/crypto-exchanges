import styled from "styled-components";

export const StyledHead = styled.div`
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