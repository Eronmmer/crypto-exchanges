import styled from "styled-components";

export const StyledFlex = styled.div`
  display: flex;
  gap: .5rem;
  margin-bottom: 1rem;
  align-items: center;
  font-size: 0.9rem;

  @media(min-width: 768px) {
    font-size: 1rem;
  }
`