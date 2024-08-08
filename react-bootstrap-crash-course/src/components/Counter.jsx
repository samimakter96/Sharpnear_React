
import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Counter = () => {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <>
      <Container className='mt-3'>
        <Row>
          <Col xs={4}>
            <Card className='shadow-lg'>
              <Card.Body>
                <p className='display-2'>{count}</p>
                <Button variant='success' className='m-1' onClick={increment}>Increment</Button>
                <Button variant='warning' onClick={decrement}>Decrement</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Counter