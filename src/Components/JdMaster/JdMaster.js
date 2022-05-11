import React from 'react'
import { Container, Table, Modal, Button, Form, Row, Col } from 'react-bootstrap'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';

import { useState } from 'react'

const JdMaster = () => {
    const [show5, setShow5] = useState(false);

    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);
    const notify = () => toast.success("saved");

    const [show6, setShow6] = useState(false);

    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    const [show7, setShow7] = useState(false);

    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);

    const [show8, setShow8] = useState(false);

    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);

    const [show9, setShow9] = useState(false);

    const handleClose9 = () => setShow9(false);
    const handleShow9 = () => setShow9(true);
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container className='myprofile' >
        <Table>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>User name</th>
                    <th>date-time of accepting  </th>
                    <th>assured delivery date-time </th>
                    <th>own portal/our portal</th>
                    <th>Payout</th>
                    <th>When submission happened?  </th>
                    <th>Feedback from client</th>
                    <th>Feedback from admin</th>
                    <th>Cvs quality approval</th>
                    <th>Status as per user</th>
                    <th>Offer</th>
                    <th>Candidate ID </th>
                    <th>candidate name </th>
                    <th>Designation</th>
                    <th>candidate work location </th>
                    <th>offered ctc </th>
                    <th>sign up rate </th>
                    <th>base invoice value </th>
                    <th>offer accepted? </th>
                    <th>DOJ</th>
                    <th>Resigned?  </th>
                    <th>Copy of resignation received? </th>
                    <th>User incentives </th>
                    <th>Joined? </th>
                    <th>User comments/remarks </th>
                    
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow5} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td  onClick={handleShow6} style={{color:'blue', textDecoration:'underline'}}>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow7} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow8} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow8} style={{color:'blue', textDecoration:'underline'}}>Edit & Delete</td>
                    <td onClick={handleShow9} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                </tr>
            </tbody>
            </Table>
            </Container>

    </div>
  )
}

export default JdMaster