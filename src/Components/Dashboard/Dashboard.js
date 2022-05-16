import React, {useState} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row, Col,Form , Button} from 'react-bootstrap'
import { ToastContainer  } from 'react-toastify';
import Select from 'react-select'
import "./Dashboard.css";
const Dashboard = () => {
  const [checked, Setchecked]=useState(false)
  const handleCheck = () => Setchecked(!checked)
  const [checked1, Setchecked1]=useState(false)
  const handleCheck1 = () => Setchecked1(!checked1)
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
                <Form.Label  className='fw-bold mb-3 mt-3'>User Category</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                    <option value="4">A&B</option>
                    <option value="5">B&C</option>
                    <option value="6">C&A</option>
                    <option value="7">A,B&C</option>
                    <option value="8">In house</option>
                    <option value="9">A,B,C&In house</option>
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Force to use our database?</Form.Label>
                <Form.Check type="checkbox" label="You must use our database etc for this JD " />
                
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Exclusivity </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">10</option>
                    <option value="7">unlimited</option>
                   
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>CVs quality check </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                    </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>priority tag (P) </Form.Label>
                </Col>
                <Col xs={6}>
                  <Row>
                    <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>JD upload date  </Form.Label>
                <Form.Control type="date" />
                </Col>
                <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>Time</Form.Label>
                  <Form.Control type="time" />
                </Col>
                </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>JD number  </Form.Label>
                <Form.Control type='text' placeholder=' Number  '/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Number of vacancies </Form.Label>
                <Form.Control type='text' placeholder=' Number of vacancies '/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> Job description</Form.Label>
                <i class="fa fa-paperclip" aria-hidden="true"></i>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Title</Form.Label>
                <Form.Control type='text' placeholder='  '/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client name </Form.Label>
                <Form.Control type='text' placeholder='  '/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client company Website </Form.Label>
                <i class="fa fa-globe" aria-hidden="true"></i>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client company Linkedin URL </Form.Label>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Salary </Form.Label>
                <Form.Control type='text' placeholder='  '/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Education </Form.Label>
                <Form.Control type='text' placeholder='  '/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Experience </Form.Label>
                <Form.Control type='text' placeholder='  '/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>work location of JD  </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">Delhi</option>
                    <option value="2">Gurgaon</option>
                    <option value="3">Noida</option>
                    <option value="4">Mumbai</option>
                    <option value="5">Pune</option>
                    <option value="6">Ahmedabad</option>
                    <option value="7">Chennai</option>
                    <option value="8">Kolkata</option>
                    <option value="9">Hyderabad</option>
                    <option value="10">Banglore</option>
                    <option value="11">Jaipur</option>
                   
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Rounds of interview </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Notice period preference given by client  </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">Immediate</option>
                    <option value="2">15 days</option>
                    <option value="3">20 days</option>
                    <option value="4">30days</option>
                    <option value="5">2 months</option>
                    <option value="6">3 months</option>
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Replacement period  </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">3 months</option>
                    <option value="2">6 months</option>
                    </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <Form.Group>
                <Form.Label  className='fw-bold mb-3 mt-3'>Number of cvs submissions required  </Form.Label>
                <Form.Select name="numberofcvs" aria-label="Default select example">
                  <option value="2">2</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </Form.Select>
                </Form.Group>
                <Form.Group className='mt-3'>
                  <Form.Label className="fw-bold">Client Company name to disclosed to candidate</Form.Label>
                  <Form.Select name="disclosedtocandidate">
                    <option values="yes">Yes</option>
                    <option value='no'>No</option>
                  </Form.Select>
                </Form.Group>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Allow one candidate submission by user? </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                    </Form.Select>
                    <Form.Group className='mt-3'>
                  <Form.Label className="fw-bold">Number of working days</Form.Label>
                  <Form.Select name="numberofworkingday">
                    <option values="5">5</option>
                    <option value='6'>6</option>
                  </Form.Select>
                </Form.Group>
                </Col>
              </Row>
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
                    {/* <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Assured delivery time required by client (TAT)</Form.Label>
                    
                    </Col> */}
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
                    <Form.Label className='fw-bold mb-3 mt-3'>Gross annual CTC of the candidate</Form.Label>
                    <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">- 8.33%</option>
                    <option value="2">7.5%</option>
                    <option value="3">7%</option>
                    <option value="4">10%</option>
                    <option value="5">6%</option>
                    <option value="6">12%</option>
                    </Form.Select>
                  </Col>
                  <Col xs={6}>
                    <Form.Group className="mt-3">
                      <Form.Label className="fw-bold">Audio JD</Form.Label>
                      <Form.Control type='file' name="jdaudio" accept="Audio/mp3" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>Your Payout</Form.Label>
                  <Form.Check type="checkbox" label="% payout If you use Talent Tracker’s database. " onClick={handleCheck} />
                  {checked?<Form.Select className="mt-2 mb-2"><option value="if consultancy">if consultancy</option><option value="If individual">If individual</option></Form.Select>: <></>}
                    <Form.Check type="checkbox" label=" % payout if you use your own portal- naukri/monster/times job etc " onClick={handleCheck1} />
                    {checked1?<Form.Select className="mt-2 mb-2"><option value="if consultancy">if consultancy</option><option value="If individual">If individual</option></Form.Select>: <></>}
                    <Form.Check type="checkbox" label=" absolute value payout if use your own portal (Naukri/Monster/Timesjob etc) " />
                    <Form.Check type="checkbox" label=" absolute value payout---if use Talent Trackers database. " />
                  </Col>
                  <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>preferred industries to take JDs? </Form.Label>
                  <Select isMulti options={options} />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Form.Group className="mt-3">
                      <Form.Label className="fw-bold">Client Company Address.</Form.Label>
                      <Form.Control as='textarea' />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" className="mt-3">
            <i className="fas fa-save me-3"></i>Save 
          &nbsp;&nbsp;</Button> 
            </form>
        </Container>
    </div>
  )
}

export default Dashboard