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
    margin: 0;
    text-align: center;
  }
`;

const Heading = styled(Link)`
  text-decoration: none;
  color: initial;
`

export default Navbar;