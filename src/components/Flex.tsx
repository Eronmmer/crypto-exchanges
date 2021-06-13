import styled from "styled-components";
import React, { ReactElement } from "react";

const Flex: React.FC<{ children: ReactElement | ReactElement[] }> = ({ children }) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
};

const StyledContainer = styled.div`
  display: flex;
  gap: .5rem;
  margin-bottom: 1rem;
  align-items: center;
  font-size: 0.9rem;

  @media(min-width: 768px) {
    font-size: 1rem;
  }
`

export default Flex;