import { Container, Image, Nav, Navbar } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import Logo from "../assets/images/logo.png"

const Header = () => {
   return (
      <header className="header-area">
         <div className="header-nav">
            <Container>
               <div className="navigation">
                  <Navbar expand="lg">
                     <Link className="navbar-brand logo" to="/"><Image src={Logo} alt="logo" /></Link>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />

                     <Navbar.Collapse className="sub-menu-bar" id="navbarSupportedContent">
                        <Nav className="ms-auto">
                           <NavLink className="nav-link" to="/">Home</NavLink>
                           <NavLink className="nav-link" to="/about">About</NavLink>
                           <NavLink className="nav-link" to="/career">Career</NavLink>
                           <NavLink className="nav-link" to="/clients">Clients</NavLink>
                        </Nav>
                     </Navbar.Collapse>

                     <div className="navbar-btn d-none d-sm-block">
                        <Link className="main-btn" to="/contact">Contact us</Link>
                     </div>
                  </Navbar>
               </div>
            </Container>
         </div>
      </header>
   )
}

export default Header