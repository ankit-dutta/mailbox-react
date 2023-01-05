import { Navbar, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

const Header = () =>{
    
          return (
            <>
              <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                  <Nav className="me-auto">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="#features">Features</NavLink>
                    <NavLink href="#pricing">Pricing</NavLink>
                  </Nav>
                </Container>
              </Navbar>
              
            </>
          );
        }
        

export default Header;