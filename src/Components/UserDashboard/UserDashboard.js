import React from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import { Form  , Container , Row , Col , Button} from 'react-bootstrap';

const UserDashboard = () => {
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
                    
                    </Col>
                </Row>
            </Form>
        </Container>
    </div>
  )
}

export default UserDashboard