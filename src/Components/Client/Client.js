import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row, Col,Form , Button} from 'react-bootstrap'
import { ToastContainer  } from 'react-toastify'

const Client = () => {
  return (
    <div>
     <Sidebar />
        <NavbarMenu />
        <ToastContainer />   
        <Container className="jd-cont">
            <form>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User ID</Form.Label>
                <Form.Control type='text' value='23456765'/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Name</Form.Label>
                <Form.Control type='text' placeholder='Enter Client Name'/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Location</Form.Label>
                <Form.Control type='text' placeholder='Location'/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client industry </Form.Label>
                
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client spoc </Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client spoc mobile number  </Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client spoc email ID </Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client GST   </Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client type</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="Start up">Start Up</option>
                    <option value="sme">Sme</option>
                    <option value="Public limited">public limited</option>
                    <option value="Mnc">Mnc</option>
                    <option value="Mid size private limited">Mid size private limited</option>
                    <option value="Large corporation">Large corporation</option>
                    <option value="Not known">Not known</option>
                    
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Date/month/year of adding client</Form.Label>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Agreed sign up rate </Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Agreed payment terms</Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Agreed replacement period</Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Admin comments/remarks </Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
                </Row>
                </form>
                </Container>
                <Button variant='primary'>Save</Button>
    </div>
  )
}

export default Client