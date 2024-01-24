import { Container, Image, Nav, Navbar } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import Logo from "../assets/images/logo.png"
import { useLayoutEffect, useRef, useState } from "react"

const Header = () => {
   const header = useRef(null);
   const [sticky, setSticky] = useState(false);

   useLayoutEffect(() => {
      const handleScroll = () => {
         const headerRect = header.current.getBoundingClientRect();
         const isSticky = headerRect.top <= -200;
         setSticky(isSticky)
      }

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      }
   }, [])

   return (
      <header ref={header} className="header-area">
         <div className={`header-nav ${sticky ? "sticky-header" : ""}`}>
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