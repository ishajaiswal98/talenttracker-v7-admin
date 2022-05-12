import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row, Col,Form , Button} from 'react-bootstrap'
import { ToastContainer  } from 'react-toastify';
import Select from 'react-select'
import "./Dashboard.css";
const Dashboard = () => {
  
   
  const options = [
    { value: 'Services', label: 'Services' },
    { value: 'Manufacturing', label: 'Manufacturing' },
    { value: 'IT- Information Technology', label: 'IT- Information Technology' },
    { value: 'Education', label: 'Education' },
    { value: 'Real estate/Construction', label: 'Real estate/Construction' },
    { value: 'Finance/BFSI', label: 'Finance/BFSI' },
    { value: 'Healthcare/Pharm', label: 'Healthcare/Pharm' },
    { value: 'Retail', label: 'Retail' },
    { value: 'Hospitality', label: 'Hospitality' },
    { value: 'Public Sector/Philonthropy/Associations', label: 'Public Sector/Philonthropy/Associations' },
    { value: 'FMCG', label: 'FMCG' },
    { value: 'Textile', label: 'Textile' },
    { value: 'Telecom', label: 'Telecom' },
    { value: 'logistics/supply chain', label: 'logistics/supply chain' },
    { value: 'Media/Publishing/Entertainment', label: 'Media/Publishing/Entertainment' },
    { value: 'Others', label: 'Others' }
  
  ]
  
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
                    <Form.Label >rework (with reasons)</Form.Label>
                    <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1"> CVs quality not good- No shortlisting from client for earlier submissions </option>
                                       
                    <option value="2">No delivery made by the user who accepted the JD</option>
                    <option value="3">Client changed the JD criteria</option>
                    <option value="4">Candidates backed out/didn’t turn up for the interview/rejected by client</option>
                    <option value="5">Delay from client in giving the feedback, now fresh sourcing required</option>
                    <option value="6">Any other reason not covered above (text field-1000 characters for admin to enter)</option>
                    
                    </Form.Select> 
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
                    <Form.Label className='fw-bold mb-3 mt-3'> Remarks/comments</Form.Label>
                    <Form.Control type="text" placeholder='Remarks'></Form.Control>
                    </Col>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Payment Terms</Form.Label>
                    <Form.Control type="text" placeholder=''></Form.Control>

                    </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>Assured delivery time required by client (TAT)</Form.Label>
                  </Col>
                  <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>Sign Up Rate </Form.Label>
                    <Form.Control type="text" placeholder=''></Form.Control>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>Your Payout</Form.Label>
                  <Form.Check type="checkbox" label="% payout If you use Talent Tracker’s database. " />
                    <Form.Check type="checkbox" label=" % payout if you use your own portal- naukri/monster/times job etc " />
                    <Form.Check type="checkbox" label=" absolute value payout if use your own portal (Naukri/Monster/Timesjob etc) " />
                    <Form.Check type="checkbox" label=" absolute value payout---if use Talent Trackers database. " />
                  </Col>
                  <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>preferred industries to take JDs? </Form.Label>
                  <Select isMulti options={options} />
                  </Col>
                </Row>
                <Button variant="primary" >
            Save 
          </Button> 
            </form>
        </Container>
    </div>
  )
}

export default Dashboard