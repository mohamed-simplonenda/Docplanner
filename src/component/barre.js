import {Nav,Navbar,NavDropdown} from 'react-bootstrap';

function Barre() {
    return (
      <div >
        
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
  <Navbar bg="light">
    <Navbar.Brand href="#home">
      <img
        src="/logo-default-group-en.svg"
        width="250"
        height="auto"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#deets">About us</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      Career
      </Nav.Link>
      <NavDropdown title="Departments" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>



    

    
    
    </div>
   
     
    );
  }
export default Barre;
  