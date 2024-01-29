import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { useLayoutEffect, useRef, useState } from 'react';

const Header = () => {
  const header = useRef(null);
  const [sticky, setSticky] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const headerRect = header.current.getBoundingClientRect();
      const isSticky = headerRect.top <= -50;
      setSticky(isSticky);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={header} className="header-area">
      <div className={`header-nav ${sticky ? 'sticky-header' : ''}`}>
        <Container>
          <div className="navigation">
            <Navbar expand="lg" collapseOnSelect>
              <Link className="navbar-brand logo" to="/">
                <Image src={Logo} alt="logo" />
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse className="sub-menu-bar" id="navbarSupportedContent">
                <Nav className="ms-auto">
                  <Nav.Link className="nav-link" as={NavLink} to="/" eventKey="1">
                    Home
                  </Nav.Link>
                  <Nav.Link className="nav-link" as={NavLink} to="/about" eventKey="2">
                    About
                  </Nav.Link>
                  <Nav.Link className="nav-link" as={NavLink} to="/career" eventKey="3">
                    Career
                  </Nav.Link>
                  <Nav.Link className="nav-link" as={NavLink} to="/service" eventKey="4">
                    Services
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>

              <div className="navbar-btn d-none d-sm-block">
                <Link className="main-btn" to="/contact">
                  Contact us
                </Link>
              </div>
            </Navbar>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
