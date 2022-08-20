import React from "react";
import { Row, Col } from "react-bootstrap";

import EcosystemItem from "../EcosystemItem/EcosystemItem";
const Ecosystem = () => {
  return (
    <div className="p-5">
      <Row>
        <Col className="mb-2">
          <EcosystemItem text="GreenDAOla" />
        </Col>
        <Col className="mb-2">
          <EcosystemItem text="Altlanteans Official Club" />
        </Col>
        <Col className="mb-2">
          <EcosystemItem text="VPets" />
        </Col>
        <Col className="mb-2">
          <EcosystemItem text="Animalia" />
        </Col>
      </Row>
    </div>
  );
};

export default Ecosystem;
