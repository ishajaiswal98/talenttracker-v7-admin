import React from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import { Form  , Container , Row , Col , Button} from 'react-bootstrap';

const UserIdChang = () => {
    
  return (
    <div>
         <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container className='myprofile'  >
            <Form>
            <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User ID </Form.Label>
                <Form.Control type='text' placeholder='Enter User ID'/>
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
                <Form.Label  className='fw-bold mb-3 mt-3'>Password </Form.Label>
                <Form.Control type='text' placeholder='Enter Your Password'/>
                </Col>
                <Col xs={6}>
                <Button variant='danger' href="/" style={{marginTop:"1rem" , borderRadius:'5rem'}}>Unsubscribe</Button>
                </Col>

            </Row>
            <Row>
            <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>How many JDs a user can unlock in a day?</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">4</option>
                    <option value="4">8</option>
                    <option value="5">16</option>
                    <option value="6">32</option>
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>CVs quality check required for this user ID? </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">YES</option>
                    <option value="2">NO</option>
                    
                    </Form.Select>
                </Col>
            </Row>
            <Row>
            <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Detail JD (doc, pdf file sent by client) to be shown to a particular user even if he or she is not accepting the JD?  </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">YES</option>
                    <option value="2">NO</option>
                    
                    </Form.Select>
                </Col>

            </Row>
            </Form>
        </Container>
    </div>
  )
}

export default UserIdChang