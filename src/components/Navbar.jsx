import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import SchoolIcon from '@mui/icons-material/School';
const NavScrollExample=()=> {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className='font-bold' href="#"><SchoolIcon className='mr-5 ml-2'/> College Guide</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex mr-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 searchbar"
              aria-label="Search"
            />
            <Button className="searchbtn" variant="outline-success">Search</Button>
          </Form>
          <Nav
            className="my-2 my-lg-0 sidelinksdiv"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="sidelinks" href="#action1">College</Nav.Link>
            <Nav.Link className="sidelinks" href="#action2">University</Nav.Link>
            <Nav.Link className="Loginbtn btn btn-primary rounded-3" href="#action3">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavScrollExample;