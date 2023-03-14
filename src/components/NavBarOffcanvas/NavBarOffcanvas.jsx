import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavbar } from "../../hooks/useNavbar";

function NavBarOffcanvas() {
  const { navbarClasses, paths } = useNavbar();

  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} collapseOnSelect expand={expand} id={navbarClasses}>
          <Container>
            <div className="menu-toggle">
              <div className="menu-toggle_col-1">
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <span className="d-md-none">Menú</span>
              </div>
              <Link to="/" className="navbar-brand"></Link>
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header
                closeButton
                className="ms-auto"
              ></Offcanvas.Header>
              <Offcanvas.Body>
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
                              <Nav.Link
                                href={"#" + obj.path + child.path}
                                className="dropdown-item"
                                key={child.name}
                              >
                                {child.name}
                              </Nav.Link>
                            );
                          })}
                        </NavDropdown>
                      );
                    } else {
                      return (
                        <Nav.Link href={"#" + obj.path} key={obj.name} className="nav-link">
                          {obj.name}
                        </Nav.Link>
                      );
                    }
                  })}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBarOffcanvas;
