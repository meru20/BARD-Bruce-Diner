import React from 'react';
import {Nav, Navbar, } from 'react-bootstrap';


export default function Banner () {
    return (
        <div>
        <div className="topnav">
        
               
           
        <section id="header">
            
<Navbar variant= "pills" expand="lg">
      <Navbar.Brand href="/">Bruce's Diner</Navbar.Brand>
     
   
        <Nav className="rightnav">
         <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/vip"> Join our Vip List!</Nav.Link>
        </Nav>
      
    </Navbar>
    </section>
    </div>
    
    <section id="banner">
       
        <h1>Coming Soon!</h1>
        <h3>Epic</h3>
        <h3> breakfast burritos!</h3>
        <button variant="primary" type="submit">
              Join our Vip List!
         </button>
         
    </section>

    </div>
   
    )
}