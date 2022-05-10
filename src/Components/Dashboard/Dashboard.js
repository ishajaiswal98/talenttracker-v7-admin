import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row, Col,Form } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <NavbarMenu />
      <ToastContainer/>
      <Container className="jd-cont">
            <form>
                <Row>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> JD Status</Form.Label>
                    <Form.Check type="checkbox" label="open (not accepted by any user) " />
                    <Form.Check type="checkbox" label=" pending delivery (accepted but not yet delivered)" />
                    <Form.Check type="checkbox" label=" delivery done-await client feedback" />
                    <Form.Check type="checkbox" label=" interview stage" />
                    <Form.Check type="checkbox" label="offer stage " />
                    <Form.Check type="checkbox" label="JD successfully closed " />
                    <Form.Check type="checkbox" label=" rework (with reasons)" />
                    </Col>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'>  Admin spoc (single point of contact)</Form.Label>
                    <Form.Control type='text' placeholder=' Name of the spoc '/>
                    <Form.Control type='text' placeholder=' Email ID '/>
                    <Form.Control type='text' placeholder=' Mobile Number '/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Client Coordination</Form.Label>
                    <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">User</option>
                   
                    
                    <option value="2">Admin</option>
                    </Form.Select>
                    </Col>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Assured delivery time required by client (TAT)</Form.Label>
                    
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Payment Terms</Form.Label>
                    <Form.Control type="text" placeholder=''></Form.Control>
                    </Col>
                </Row>
            </form>
        </Container>
    </div>
  )
}

export default Dashboard