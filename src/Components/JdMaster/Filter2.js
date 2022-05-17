// import React from 'react'
// import Sidebar from '../Sidebar/Sidebar';
// import NavbarMenu from '../NavbarMenu/NavbarMenu';
// import { ToastContainer } from 'react-toastify';
// import { Col, Container, Form, Row ,Button } from 'react-bootstrap';
// const Filter2 = () => {
//   return (
//     <div>
//          <ToastContainer position={'top-center'}/>
//     <Sidebar />
//         <NavbarMenu />
//         <Container className='myprofile'>
//           <Form>
//           <Row>
//             <Col xs={6}>
//             <Form.Label  className='fw-bold mb-3 mt-3'>JD upload date/time </Form.Label>
//             <Form.Control type="date" name="dob" placeholder="Date of Birth" />
//             </Col>
//             <Col xs={6}>
//             <Form.Label  className='fw-bold mb-3 mt-3'>Status as per admin</Form.Label>
//             <Form.Select aria-label="Default select example">
//                     <option>select</option>
//                     <option value="open (not accepted by any user)">open (not accepted by any user)</option>
//                     <option value="pending delivery (accepted but not yet delivered)">pending delivery (accepted but not yet delivered)</option>
//                     <option value="delivery done-await client feedback">delivery done-await client feedback</option>
//                     <option value="interview stage">interview stage</option>
//                     <option value="offer stage">offer stage</option>
//                     <option value="JD successfully closed">JD successfully closed</option>
//                     <option value="rework">rework</option>
//                     </Form.Select>
//             </Col>
//           </Row>

//           <Row>
//           <Col xs={6}>
//             <Form.Label  className='fw-bold mb-3 mt-3'>Status as per user</Form.Label>
//             <Form.Select aria-label="Default select example">
//                     <option>select</option>
//                     <option value="open (not accepted by any user)">open (not accepted by any user)</option>
//                     <option value="pending delivery (accepted but not yet delivered)">pending delivery (accepted but not yet delivered)</option>
//                     <option value="delivery done-await client feedback">delivery done-await client feedback</option>
//                     <option value="interview stage">interview stage</option>
//                     <option value="offer stage">offer stage</option>
//                     <option value="JD successfully closed">JD successfully closed</option>
//                     <option value="rework">rework</option>
//                     </Form.Select>
//             </Col>
//             <Col xs={6}>
//                 <Form.Label  className='fw-bold mb-3 mt-3'> Category</Form.Label>
//                 <Form.Select aria-label="Default select example">
//                     <option>select</option>
//                     <option value="A">A</option>
//                     <option value="B">B</option>
//                     <option value="C">C</option>
//                     <option value="In-house">In-house</option>
//                     </Form.Select>
//                 </Col>
//           </Row>
//           <Row>
//             <Col xs={6}>
//             <Form.Label  className='fw-bold mb-3 mt-3'> Industry</Form.Label>
//             <Form.Select aria-label="Default select example">
//                     <option>select</option>
//                     <option value="A">Services</option>
//                     <option value="B">Manufacturing</option>
//                     <option value="C">IT- Information Technology</option>
//                     <option value="Education">Education</option>
//                     <option value="Real estate/Construction">Real estate/Construction</option>
//                     <option value="Finance/BFSI">Finance/BFSI</option>
//                     <option value="Healthcare/Pharm">Healthcare/Pharm</option>
//                     <option value="Retail">Retail</option>
//                     <option value="Finance/BFSI">Finance/BFSI</option>
//                     <option value="Healthcare/Pharm">Healthcare/Pharm</option>
//                     <option value="Retail">Retail</option>
//                     </Form.Select>
//             </Col>
//           <Col xs={6}>
//           <Form.Label  className='fw-bold mb-3 mt-3'> Client Name</Form.Label>
//           <Form.Control type='text' placeholder=' '/>
//           </Col>
//           </Row>
//           <Row>
//           <Col xs={6}>
//           <Form.Label  className='fw-bold mb-3 mt-3'> Salary</Form.Label>
//           <Form.Control type='text' placeholder='enter  salary'/>
//           </Col>
//           <Col xs={6}>
//           <Form.Label  className='fw-bold mb-3 mt-3'> Location</Form.Label>
//           <Form.Control type='text' placeholder='Location'/>
//           </Col>
//           </Row>
//           <Row>
//           <Col xs={6}>
//           <Form.Label  className='fw-bold mb-3 mt-3'> sign up rate with client</Form.Label>
//                 <Form.Select aria-label="Default select example">
//                     <option>select</option>
//                     <option value="8.33%">8.33%</option>
//                     <option value="7%">7%</option>
//                     <option value="7.5%">7.5%</option>
//                     <option value="7.25%">7.25%</option>
//                     <option value="6%">6%</option>
//                     <option value="10%">10%</option>
                
//                     </Form.Select>
//           </Col>
//           <Col xs={6}>
//           <Form.Label  className='fw-bold mb-3 mt-3'> payment terms</Form.Label>
//                 <Form.Select aria-label="Default select example">
//                     <option>select</option>
//                     <option value="30 days">30 days</option>
//                     <option value="45 days">45 days</option>
//                     <option value="60 days">60 days</option>
//                     <option value="75 days">75 days</option>
//                     <option value="90 days">90 days</option>
                    
                
//                     </Form.Select>
//                     </Col>
//           </Row>
//           <Row>
//           <Col xs={6}>
//           <Form.Label  className='fw-bold mb-3 mt-3'> payout</Form.Label>
//                 <Form.Select aria-label="Default select example">
//                     <option>select</option>
//                     <option value="25%, 30%, 35%, 40%, 45%, 50%, 55%,60%">25%, 30%, 35%, 40%, 45%, 50%, 55%,60%</option>
//                     <option value="Absolute Value">Absolute value</option>
                
//                     </Form.Select>
//           </Col>
//           <Col xs={6}>
//           <Form.Label  className='fw-bold mb-3 mt-3'> Client coordination to be done by whom?</Form.Label>
//                 <Form.Select aria-label="Default select example">
//                     <option>select</option>
//                     <option value="User">User</option>
//                     <option value="Admin">Admin</option>
                
//                     </Form.Select>
//                     </Col>
//                     </Row>
//           <Row>
//           <Col xs={6}>
//                 <Form.Label  className='fw-bold mb-3 mt-3'>Exclusivity</Form.Label>

//                 </Col>
//                 <Col xs={6}>
//                 <Form.Label  className='fw-bold mb-3 mt-3'>User ID</Form.Label>
                 
//                 </Col>
//           </Row>
//           <Row>

//           </Row>
//           <Row>
//             <Col xs={3} className=' mb-3 mt-3'>
//             <Button variant="secondary" href='/'>
//             Reset
//           </Button> 
//             </Col>
//             <Col xs={3} className=' mb-3 mt-3'>
//             <Button variant="danger" href='/'>
//             Search
//           </Button> 
//             </Col>
//              <Col xs={3} className=' mb-3 mt-3'>
//             <Button variant="info" href='/'>
//             Saved Search
//           </Button> 
//             </Col>
//             <Col xs={3} className=' mb-3 mt-3'>
//             <Button variant="warning" href='/'>
//             Freezes
//           </Button> 
//           </Col>
//           </Row>
//           </Form>
//         </Container>
//     </div>
//   )
// }

// export default Filter2