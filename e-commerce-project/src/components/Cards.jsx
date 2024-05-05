import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Cards = ({ title, price, imageUrl }) => {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx} xs={6} md={6} lg={6} xl={6}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
            </Card.Body>
              <div>
                <span>${price}</span>
              </div>
              <Button variant="primary" className="mt-2">
                ADD TO CART
              </Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cards;





