import React,{useState} from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import { Form  , Container , Row , Col , Button ,Table} from 'react-bootstrap';
import './UserId.css'

const UserIdChang = () => {
    const [show, setShow]=useState(false);
    const handleShow = () => setShow(!show);
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
                <Button variant='primary' onClick={handleShow}>Search</Button>
                </Col>
                </Row>
                    </Form>
                    </Container>
                    <div className={show? 'show2':'show'}>     
            <Container>
                <Table responsive>
                    <thead>
                        <tr>
                <th>User Category</th>
                
                <th>How many JDs a user can unlock in a day?</th>
                <th>CVs quality check required for this user ID? </th>
                <th>Detail JD (doc, pdf file sent by client) to be shown to a particular user even if he or she is not accepting the JD?  </th>
                <th>Password</th>
                <th>Unsubscribe</th>
                <th>Allow user to remove candidate’s mobile number from the tracker sheet</th>
                <th>Allow user to write special remarks, comments in the tracker shee</th>
                <th>Admin can make it compulsory for user to use own / our database</th>
               </tr>
               </thead>
               </Table>
               </Container>
               </div>
            </div>    
  )
}

export default UserIdChang