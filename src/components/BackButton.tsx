import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const BackButton: React.FC<{ text: string }> = ({ text }) => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  }

  return (
    <StyledBackContainer onClick={handleGoBack}>
      <img alt="go back" src="/icons/back.svg" />
      <strong>{text}</strong>
    </StyledBackContainer>
  )
};

const StyledBackContainer = styled.div`
  cursor: pointer;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  gap: .5rem;
  width: fit-content;
  padding: .6rem 1.3rem;
  border-radius: 10px;
  
  &:hover {
    background: rgba(0,0,0,.04);
  }
  
  strong {
    font-size: 1.2rem;
  }
`

export default BackButton;