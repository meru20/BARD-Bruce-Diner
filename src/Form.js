import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Vip() {
    const [firstName, setfirstName] = React.useState("");
    const [lastName, setlastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    
   

const handleSubmit = (e) => {
    alert('Welcome to our VIP club ' + firstName);
    e.preventDefault();
  }
return (
    <section id="signup">
   
        <h1> Join Our VIP Club!</h1>
        <div className='row'>
            <div className="column">
            <Form onSubmit={handleSubmit}>
         <Form.Group controlId="first-name">
            <Form.Control type="text" value={firstName}  placeholder="First Name" onChange={e => setfirstName(e.target.value)} required/>
         </Form.Group>
         <Form.Group controlId="last-name">
            <Form.Control type="text" value={lastName} placeholder="Last Name" onChange={e => setlastName(e.target.value)} required />
         </Form.Group>
         <Form.Group controlId="email">
            <Form.Control type="email"  value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} required/>
         </Form.Group>
         <Button variant="primary" type="submit">
              Submit
         </Button>
     </Form>
            </div>
        </div>
     
   
  </section>
)}