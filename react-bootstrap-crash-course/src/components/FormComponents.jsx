import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const FormComponents = () => {

  const [data, setData] = useState({
    user: {
      username: '',
      email: '',
      password: ''
    }
  })

  const updateData = (e) => {
    setData({
      ...data,
       user: {
        ...data.user,
         [e.target.name]: e.target.value
       }
    })
  }
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col xs={3}>
            <Card className="shadow-lg">
              <Card.Header
                className="p-3"
                style={{ backgroundColor: 'orange' }}
              >
                <h4>Register</h4>
              </Card.Header>
              <Card.Body style={{backgroundColor: '#f7f5f0'}}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name='username'
                      onChange={updateData}
                      type="text"
                      placeholder="Username"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Button variant="warning" type="submit">
                      Register
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormComponents;
