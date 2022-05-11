import React from 'react'
import {Nav,Navbar,NavDropdown,Form,FormControl,Button,Container,Dropdown} from 'react-bootstrap'
import Avatar from "@material-ui/core/Avatar";

function NavbarComp({isLoggedIn}){
  let profilAvatar;
  if (isLoggedIn) {
    profilAvatar = <div className='profilAvatar'>
    <Dropdown>

      <Dropdown.Toggle style={{background:"none",border:"none",cursor:"pointer",maxHeight:"50px",
     }}>
        <Avatar style={Object.assign({})}/>
      </Dropdown.Toggle>

      <Dropdown.Menu align="end" id="dropdown-menu-align-end">
        <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Edit profil</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>;
  } else {
    profilAvatar = <></>;
  }
return (
<Navbar className='NavBar'  bg="dark" variant="dark" style={{position:'sticky',top:'0'}}>
  <Container fluid>
    <Navbar.Brand href="/Homepage">.comUnity</Navbar.Brand>
    
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">

      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px',
                 margin: 'auto',
                width: '1000px',
              }}
        navbarScroll
      >
        <Nav.Link href="/Homepage">Home</Nav.Link>
        <Nav.Link href="#action2">About</Nav.Link>
        <Nav.Link href="/login" >
          Login
        </Nav.Link>
      </Nav>
      <Form className="d-flex" style={{width:"60%"}}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      {profilAvatar}
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
export default NavbarComp;
