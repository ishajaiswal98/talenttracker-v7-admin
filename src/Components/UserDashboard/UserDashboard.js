import React ,{useState} from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import { Form  , Container , Row , Col , Button ,Table} from 'react-bootstrap';

const UserDashboard = () => {
    const [show, setShow]=useState(false);
    const handleShow = () => setShow(!show);
  return (
    <div>
         <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container className='myprofile'  >
            <div>
                <Button variant='outline-secondary'  className='mx-2'>Today</Button>
                <Button variant='outline-secondary' className='mx-2'>This Week</Button>
                <Button variant='outline-secondary'  className='mx-2'>This Month</Button>
                <Button variant='outline-secondary'  className='mx-2'>Last Month</Button>
                <Button variant='outline-secondary'  className='mx-2'>Last Quarter</Button>
                <Button variant='outline-secondary'  className='mx-2'>Last Year</Button>
            </div>
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
                <th>User Id</th>
                <th>User Name </th>
                <th>Location</th>
                <th>Category</th>
                <th>No. of mobile numbers/emails viewed /downloaded</th>
                <th>No. of JDs locked </th>
                <th>No. of JDs at interview stag </th>
                <th>No. of successful closures</th>
                <th>No. of JDs at offer stage </th>
                <th>No. of JD delivered/submitted but feedback pending from client</th>
                <th>No.of pending delivery submissions by user after locking the JDs</th>
                <th>No. of JD rework </th>
                <th>My user rating</th>
                <th>My total payouts/incentives</th>
               </tr>
               </thead>
               </Table>
               </Container>
               </div>
            
    
    </div>
  )
}

export default UserDashboard