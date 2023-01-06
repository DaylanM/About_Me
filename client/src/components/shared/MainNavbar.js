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
            <MainBtn2 variant="link">Contacts</MainBtn2>
          </Link>
          <MainBtn2 
            onClick={() => handleLogout()}
          >
            Logouts
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
          <Link to='/Skills'>
            <Navbar.Brand>Skills</Navbar.Brand>
          </Link>
          <Link to='/projects'>
            <Navbar.Brand>Projects</Navbar.Brand>
          </Link>
          <Link to='/ContactMe'>
            <Navbar.Brand>Contact Me</Navbar.Brand>
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