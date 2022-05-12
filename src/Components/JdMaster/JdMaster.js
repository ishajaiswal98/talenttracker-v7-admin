import React from 'react'
import { Container, Table } from 'react-bootstrap'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';



const JdMaster = () => {
   
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
                    <td >n/a</td>
                    <td  >5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td >n/a</td>
                    <td >n/a</td>
                    <td >Edit & Delete</td>
                    <td >n/a</td>
                </tr>
            </tbody>
            </Table>
            </Container>

    </div>
  )
}

export default JdMaster