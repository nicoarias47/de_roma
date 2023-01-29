import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";
import { useNavbar } from "../../hooks/useNavbar";

const NavBar = () => {
  const { navbarClasses, paths } = useNavbar();

  return (
    <Navbar expand="lg" id={navbarClasses}>
      <Container>
        <div className="menu-toggle">
          <div className="menu-toggle_col-1">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <span>Menú</span>
          </div>
          <Link to="/" className="navbar-brand"></Link>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {Object.values(paths).map((obj) => {
              if (obj.children) {
                return (
                  <NavDropdown
                    title={obj.name}
                    id="basic-nav-dropdown"
                    key={obj.name}
                  >
                    {Object.values(obj.children).map((child) => {
                      return (
                        <Link
                          to={child.path}
                          className="dropdown-item"
                          key={child.name}
                        >
                          {child.name}
                        </Link>
                      );
                    })}
                  </NavDropdown>
                );
              } else {
                return (
                  <Link to={obj.path} key={obj.name} className="nav-link">
                    {obj.name}
                  </Link>
                );
              }
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
