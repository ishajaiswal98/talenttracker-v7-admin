import React from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { Container , Row , Col, Form , Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
 

const Filter = () => {
  return (
    <div>
         <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container className='myprofile' >
            <Form>
            <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Date of sign up of a user</Form.Label>
                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User’s location</Form.Label>
                </Col>
            </Row>
            <Row>
            <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User's Name</Form.Label>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User Category</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Exclusivity</Form.Label>
                </Col>
            </Row>
            <Row>
            <Col xs={3}>
            <Button variant="secondary" href='/'>
            Reset
          </Button> 
            </Col>
            <Col xs={3}>
            <Button variant="danger" href='/'>
            Search
          </Button> 
            </Col>
             <Col xs={3}>
            <Button variant="info" href='/'>
            Saved Search
          </Button> 
            </Col>
            <Col xs={3}>
            <Button variant="warning" href='/'>
            Freezes
          </Button> 
          </Col>
          </Row>
            </Form>
        </Container>
    </div>
  )
}

export default Filter