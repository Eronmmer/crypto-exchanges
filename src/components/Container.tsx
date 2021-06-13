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
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
`

export default Container;