import { Button, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';

const Header = () =>{
  const isLogin = useSelector((state)=>state.auth.isAuthenticated)
  console.log(isLogin , 'islogin');
  const history = useHistory();

    const logoutHandler = () => {
      localStorage.clear();
      history.push("/");
    };
    
          return (
            <>
              {/* <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                  <Nav className="me-auto">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="#features">Features</NavLink>
                    <NavLink href="#pricing">Pricing</NavLink>
                  </Nav>
                </Container>
              </Navbar> */}


    <Nav className="bg-dark d-md sidebar navbar p-3 ">
          <NavbarBrand><strong style={{color:"white"}}>MailBox</strong></NavbarBrand>
           <Button onClick={logoutHandler} variant="warning">
             {isLogin ? 'Logout' : 'Login'}
           </Button>
    </Nav>
              
            </>
          );
        }
        

export default Header;