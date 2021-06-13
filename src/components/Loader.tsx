import React from "react";
import styled from "styled-components";

const Loader = () => {
    return (
        <StyledLoader>
            <img alt="" src="/images/loading.svg" />
        </StyledLoader>
    )
}

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
`

export default Loader;