import {Link} from "react-router-dom"
import styled from "styled-components";

const Navbar = () => {
    return (
        <StyledNavContainer>
            <Heading to="/">
                <h1>Crypto Exchanges 🚀</h1>
            </Heading>
        </StyledNavContainer>
    )
}

const StyledNavContainer = styled.div`
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

const Heading = styled(Link)`
  color: initial;
`

export default Navbar;