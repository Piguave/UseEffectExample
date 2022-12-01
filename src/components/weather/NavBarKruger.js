import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/logo_kruger_.png"
function NavbarKruger() {
    return (
        <Navbar bg="warning" expand="lg" className='fixed-top mb-5' >
            <Container className=''>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand className='img-container'>
                    <img className='img-fluid' alt="" src={logo} />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto color-black">

                        <Nav.Link href="#home">Item1</Nav.Link>
                        <Nav.Link href="#link">Item1</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarKruger;