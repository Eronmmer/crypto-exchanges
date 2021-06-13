import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeading = styled(Link)`
  color: initial;
`;

export const StyledNavBar = styled.div`
  background-color: #f5e69a;
  padding: .6rem;
  
  h1 {
    padding: .3rem 1rem;
    margin: 0;
    text-align: center;
    font-size: 1.5rem;

    @media(min-width: 768px) {
      font-size: 2em;
    }
  }
`;