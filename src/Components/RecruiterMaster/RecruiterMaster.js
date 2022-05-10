import React, {useState} from 'react'
import { Container, Table, Modal, Button, Form, Row, Col } from 'react-bootstrap'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import './MyProfile.css'
const RecruiterMaster = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const notify = () => toast.success("saved");
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
   

    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
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
                    <th>Date Of adddition User</th>
                    <th>Category</th>
                    <th>How Many JS's</th>
                    <th>Cv Quality Check</th>
                    <th>Admin Assigned Information</th>
                    <th>Rating</th>
                    <th>Consultancy or Indivisual</th>
                    <th>Mobile No.</th>
                    <th>Current Location</th>
                    <th>Prefrence It/n On It</th>
                    <th>Personal Information</th>
                    <th>Work Information</th>
                    <th>Bank Details</th>
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
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                </tr>
                
            </tbody>
        </Table>
        <Modal
        show={show}
        size="xl"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Admin Assigned Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <Row>
                <Col xs={6}>
                    <Form.Label className='fw-bold mb-3'>Category</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 '>CV Quality Check</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">YES</option>
                    <option value="2">NO</option>
                    </Form.Select>
                    
                    </Col>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'>c.	How many JDs a user can unlock in a day</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>JD to be shown to user? </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">YES</option>
                    <option value="2">NO</option>
                    </Form.Select>
                    
                    </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Designation</Form.Label>
                <Form.Control type="text" placeholder="  " />
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>System generated Official email ID of user </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Compulsion</Form.Label>
                <Form.Check type="checkbox" label="Compulsory use our database" />
                <Form.Check type="checkbox" label=". Compulsory use own database (Naukri, Monster, Timesjobs etc)" />
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Candidate mobile number </Form.Label>
                <Form.Check type="checkbox" label="Allow user to remove candidate mobile number from the tracker sheet" />
                </Col>
            </Row>
            <Row>
            <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Special remarks by user </Form.Label>
                <Form.Check type="checkbox" label="allow user to write special remarks, comments in the tracker sheet" />
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Allow one candidate submission by user?  </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">YES</option>
                    <option value="2">NO</option>
                    </Form.Select>
                </Col>
            </Row>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={notify}>Save</Button>
        </Modal.Footer>
      </Modal>
      
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Personal Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Work Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>User Bank Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <Row>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Name as per bank account</Form.Label>
                        <Form.Control type="text" placeholder=' '></Form.Control>
                    </Col>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Bank Name</Form.Label>
                        <Form.Control type="text" placeholder=' '></Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Account Number</Form.Label>
                        <Form.Control type="text" placeholder=' '></Form.Control>
                    </Col>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> IFSC</Form.Label>
                        <Form.Control type="text" placeholder=' '></Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Account Type</Form.Label>
                        <Form.Control type="text" placeholder=' '></Form.Control>
                    </Col>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Branch Location</Form.Label>
                        <Form.Control type="text" placeholder=' '></Form.Control>
                    </Col>
                </Row>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      <Modal show={show4} onHide={handleClose4}>
        <Modal.Header closeButton>
          <Modal.Title>Rating</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <form>
                    <Row>
                        <Col xs={6}>
                        <Form.Label className='fw-bold mb-3'>Category</Form.Label>
                        </Col>
                    </Row>
                </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose4}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </Container>
    </div>
  )
}

export default RecruiterMaster