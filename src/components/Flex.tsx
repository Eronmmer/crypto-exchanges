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
`

export default Flex;