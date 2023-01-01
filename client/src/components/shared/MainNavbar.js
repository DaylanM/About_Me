import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
import { Button, Container, Navbar } from 'react-bootstrap';
import { MainBtn, MainBtn2 } from "../styles/mainStyles";

const MainNavbar = ({ user, handleLogout }) => {
  
  const rightNavItems = () => {
    if (user) {
      return (
        <>
          <Link to='/contacts'>
            <Button variant="link">Contacts</Button>
          </Link>
          <MainBtn2 
            onClick={() => handleLogout()} 
          >
            Logout
          </MainBtn2>
        </>
      )
    } else {
      return (
        <>
          <Link to='/login'>
            <MainBtn2>Login</MainBtn2>
          </Link>
        </>
      )
    }
  }
  
  return (
    <>
      <Navbar>
        <Container>
          <Link to='/'>
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>
          <Link to='/AboutMe'>
            <Navbar.Brand>About Me</Navbar.Brand>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            { rightNavItems() }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedNavbar;