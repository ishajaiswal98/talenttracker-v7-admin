import React, {useState} from 'react'
import Sidebar from '../Sidebar/Sidebar';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import { Container, ButtonGroup, Button, Dropdown, Tooltip,OverlayTrigger, Form, Table, Modal, Row, Col} from 'react-bootstrap';


import { ToastContainer } from 'react-toastify';
import './JdMaster.css'
const JdMaster = () => {
    function refreshPage(){ 
        window.location.reload(); 
    }
   
    
   

   
    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);
    const [show7, setShow7] = useState(false);
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);
   
  return (
    <div >
       <ToastContainer position={'top-center'}/>
    <Sidebar />
        <NavbarMenu />
        <Container className='jd-list'>
            <div className='d-flex text'>
            <p>No of jd (3)</p><span className='mx-3'>|</span>
            <p >No of contacts (23)</p>
            </div>
            <div className='mb-2'>
            <ButtonGroup className="btn btn-light">
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Save Jd</Tooltip>}>
            <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
            <i className="far fa-save"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>

  </Dropdown.Menu>
            </Dropdown>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Add List</Tooltip>}>
            <Dropdown className='mx-2'>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
            <i className="fas fa-plus"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <h5 className='mt-3 mb-3 text-center'>Add JDs List</h5>
    <Form>
      <Form.Group className='mb-3'>
        <Form.Control placeholder='Title'type='text' name="title"/>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control placeholder='Industry' type='text' name="industry"/>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control placeholder='Client Name' type='text' name="client"/>
      </Form.Group>
      <div className='d-flex justify-content-center'>
      <Button>Save</Button>
      </div>
    </Form>
  </Dropdown.Menu>
            </Dropdown>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Reload Page</Tooltip>}>
            <Button className="btn btn-light mx-2" onClick={refreshPage}><i className="fas fa-redo-alt"></i></Button>
            </OverlayTrigger>
          </ButtonGroup>
          {/* <ButtonGroup>
         <Link to="/Filter2"><Button variant='danger' className='mx-3' ><i className="fas fa-filter me-2"style={{color:'#fff'}} ></i>Filter</Button></Link>
          </ButtonGroup> */}
         
            </div>
            </Container>
            <div className='jd-wraper'>
            <Container  className='table-data' fluid>
                <Table responsive className='data-table'>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Force to use our database? </th>
                            <th>Exclusivity</th>
                            <th>CVs quality check </th>
                            <th>priority tag (P)</th>
                            <th>JD upload date-time </th>
                            <th>JD number </th>
                            <th>Number of vacancies</th>
                            <th> JD details</th>
                          
                            <th>Company </th>
                           
                            <th>Salary</th>
                            <th>Education</th>
                            <th>Experience</th>
                            <th>work location of JD </th>
                            <th>Rounds of interview </th>
                            <th>Notice period preference given by client </th>
                            <th>sign up rate with client </th>
                            <th>payment terms </th>
                            <th>Replacement period </th>
                            <th>number of submissions required </th>
                            <th>Your payout </th>
                            <th>Assured delivery required by client (TAT)</th>
                            <th>remarks/comments </th>
                            <th>Client coordination</th>
                            <th>admin spoc</th>
                            <th>JD status </th>
                            <th>Allow one candidate submission by user? </th>
                            <th>JD Acceptance </th>
                            <th>When submission happened?  </th>
                            <th>Feedback from client updated by user </th>
                            <th>Feedback from admin</th>
                            <th>Cvs quality approval</th>
                            <th>Status as per user </th>
                            <th>Offer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td className='text-center'>yes</td>
                            <td>11/05/22</td>
                            <td className='position'>Title</td>
                            <td className='deatail'>Jd Name</td>
                            <td className='jd-terms'></td>
                            <td>jd details</td>
                            <td>N/A</td>
                            <td>N/A</td>
                          
                            <td > <td className='position'>Tittle<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">My Freeze List</Tooltip>}>
            
          <i className="fas fa-building me-2"  ></i></OverlayTrigger> | <i className="fas fa-user ms-2"></i> </span></td></td>
                           
                            <td ></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><i className="fas fa-info-circle" onClick={handleShow7}></i></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><i className="fas fa-info-circle" onClick={handleShow6}></i></td>
                        </tr>
                                               
                    </tbody>
                </Table>
            </Container>
            </div>
        
      <Modal  show={show7}
        size="lg"
        onHide={handleClose7}
        
        >
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" ></i>Jd's Name Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
                <h6 className='fw-bold mt-5 mb-5 mx-3'>  The user ID which accepted the JD : <span className='text-muted'> N/A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'>user name  : <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'>date-time of accepting    : <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'>assured delivery date-time  : <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'>own portal/our portal?  : <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'>Payout  : <span className='text-muted'> n/a</span></h6>
                  </Col>
                  </Row>
                  </Modal.Body>
                  <Modal.Footer>
        <Button variant="secondary" onClick={handleClose7}>
            Close
          </Button>
        </Modal.Footer>
                  </Modal>
                  <Modal  show6={show6}
        size="lg"
        onHide={handleClose6}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" ></i>Jd's Name Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
                <Table responsive className='data-table'>
                    <thead>
                        <tr>
                            <th>Candidate ID </th>
                            <th>offer candidate name </th>
                            <th>offered designation</th>
                            <th>candidate work location </th>
                            <th>offered ctc </th>
                            <th>sign up rate </th>
                            <th>base invoice value </th>
                            <th>offer accepted? </th>
                            <th>DOJ</th>
                            <th>Resigned?  </th>
                            <th>Copy of resignation received?</th>
                            <th>User incentives </th>
                            <th>Joined? </th>
                            <th>User comments/remarks </th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            </tr>
                            </tbody>
                            </Table>
                  </Col>
                  </Row>
                  </Modal.Body>
                  <Modal.Footer>
        <Button variant="secondary" onClick={handleClose6}>
            Close
          </Button>
        </Modal.Footer>
                  </Modal>
    </div>
  )
}

export default JdMaster