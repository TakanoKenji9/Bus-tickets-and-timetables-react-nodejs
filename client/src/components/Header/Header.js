import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import './Header.css';
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <NavLink to="/" className="navbar-brand">Демо-Д</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='nav-link' to="/news">Новини</NavLink>
                        <NavLink className='nav-link' to="/">Разписания</NavLink>
                        <NavDropdown title="Услуги" id="collasible-nav-dropdown">
                            <NavLink to="/greece-trip" className="dropdown-item">Екскурзии до Гърция</NavLink>
                            <NavLink to="/rent" className="dropdown-item">Автобуси под наем</NavLink>
                        </NavDropdown>
                        <NavDropdown title="Контакти" id="collasible-nav-dropdown2">
                            <NavLink to="/about" className="dropdown-item">За нас</NavLink>
                            <NavLink to="/contacts" className="dropdown-item">Свържи се с нас</NavLink>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavLink className='nav-link' to="/login">Вход</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;