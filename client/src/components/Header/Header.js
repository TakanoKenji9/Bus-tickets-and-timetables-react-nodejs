import { Navbar, Container, Nav, Link, NavDropdown } from 'react-bootstrap'
import './Header.css';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand to="/">Демо-Д</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/blog">Новини</Nav.Link>
                        <Nav.Link to="/">Разписания</Nav.Link>
                        <NavDropdown title="Услуги" id="collasible-nav-dropdown">
                            <NavDropdown.Item to="/greece-trip">Екскурзии до Гърция</NavDropdown.Item>
                            <NavDropdown.Item to="busses-for-rent">Автобуси под наем</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Контакти" id="collasible-nav-dropdown2">
                            <NavDropdown.Item to="/about">За нас</NavDropdown.Item>
                            <NavDropdown.Item to="/contacts">Свържете се с нас</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link to="/login">Вход</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;