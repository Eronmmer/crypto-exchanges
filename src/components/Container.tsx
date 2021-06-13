import React, { ReactElement } from "react";
import styled from "styled-components";

const Container: React.FC<{ children?: ReactElement | ReactElement[] }> = ({ children }) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 0 1rem;

  @media(min-width: 768px) {
    padding: 0 2rem;
  }
`

export default Container;