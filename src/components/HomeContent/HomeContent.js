import React from "react";

//import Components
import { Card, CardGroup, Row, Col } from "react-bootstrap";

//import CSS
import "./HomeContent.scss";

const HomeContent = () => {
  return (
    <Row lg={3} md={2} sm={1} className="g-4 m-5 home-content">
      <Col>
        <Card className="p-8 ">
          <Card.Img variant="top" src="/home/esg.webp" />
          <Card.Body>
            <Card.Title className="text-center">ESG SERVICES</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="p-8">
          <Card.Img variant="top" src="/home/web3.webp" />
          <Card.Body>
            <Card.Title className="text-center">WEB3 SERVICES</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="p-8">
          <Card.Img variant="top" src="/home/token.webp" />
          <Card.Body>
            <Card.Title className="text-center">GREEN DAO</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    // <CardGroup className="m-5">

    // </CardGroup>
  );
};

export default HomeContent;
