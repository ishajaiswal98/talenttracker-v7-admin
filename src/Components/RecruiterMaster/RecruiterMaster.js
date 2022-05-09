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
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container className='myprofile'>
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
                    <td>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                </tr>
                
            </tbody>
        </Table>
        <Modal
        show={show}
        size="lg"
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
                <Form.Label className='fw-bold mb-3'>CV Quality Check</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">YES</option>
                    <option value="2">NO</option>
                    </Form.Select>
                    
                    </Col>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3'>c.	How many JDs a user can unlock in a day</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3'>JD to be shown to user? </Form.Label>
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
        </Container>
    </div>
  )
}

export default RecruiterMaster