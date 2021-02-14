import React from 'react';
import {Nav, Navbar, } from 'react-bootstrap';
import Vip from './Form';

import About from'./About';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";



export default function Banner () {
    return (
       
             <section id="banner">
        <div className="topnav">
        
               
           
        <section id="header">
            
<Navbar variant= "pills" expand="lg">
      <Navbar.Brand href="/">Bruce's Diner</Navbar.Brand>
     
   
        <Nav className="rightnav">
         <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/vip"> Join our Vip List!</Nav.Link>
        </Nav>
      
    </Navbar>
    <Router>
    <Switch>
                               
                                <Route path="/about">
                                    <About/>
                                </Route>
                                <Route path="/vip">
                                    <Vip />
                                </Route>
                            </Switch>
                            </Router>
    </section>
    </div>
    
   
       
        <h1>Coming Soon!</h1>
        <h3>Epic</h3>
        <h3> Chicken burritos!</h3>
        <a href='/vip'><button variant="primary" >
              Join our Vip List!
         </button></a>
         
    </section>

    
   
    )
}