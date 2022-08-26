import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import SchoolIcon from "@mui/icons-material/School";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { searchCollege } from "../redux/searchSlice";
import { useState } from "react";

const NavScrollExample = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);

  const handleLogout = async () => {
    try {
      await axios.get("/auth/logout");
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
    dispatch(logout());
    navigate("/login");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(searchCollege(query));
      navigate(`/search?keyword=${query}`);
    }
  };
  const handleButtonPress=() =>{
      dispatch(searchCollege(query));
      navigate(`/search?keyword=${query}`);
    };


  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand
          className="font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          <SchoolIcon className="mr-5 ml-2" /> College Guide
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex mr-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 searchbar"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button className="searchbtn" onChange variant="outline-success"
            
            onClick={handleButtonPress}>
              Search
            </Button>
          </Form>
          <Nav
            className="my-2 my-lg-0 sidelinksdiv"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="sidelinks" href="/collegeRegistration">
              College
            </Nav.Link>
            <Nav.Link className="sidelinks" href="#action2">
              University
            </Nav.Link>
            {currentUser ? (
              <Button
                className="searchbtn"
                variant="outline-success"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Nav.Link
                className="Loginbtn btn btn-primary rounded-3"
                href="/login"
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavScrollExample;
