import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Password (){
    return (
        <div> 
            <Form>
            <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
                 Password
            </Form.Label>
            <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
            </Col>
  </Form.Group>
  </Form>

        </div>
     )

}
export default Password