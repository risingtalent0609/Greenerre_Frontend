import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

//import CSS
import "./TokenObtain.scss";
const TokenObtain = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);

  return (
    <div className="ecosystem-control">
      <Row lg={5} md={2} xs={1} className="eco-content">
        <Col className="mb-2">
          <Card
            className="text-white drop-shadow-2xl"
            onMouseOver={() => setHover1(true)}
            onMouseOut={() => setHover1(false)}
          >
            <Card.Img
              src="/projects/token.webp"
              alt="Card image"
              className={hover1 == true ? "" : "blur"}
            />
            <Card.ImgOverlay
              className={
                hover1 == false
                  ? "d-flex align-items-center justify-content-center"
                  : ""
              }
            >
              <Card.Title
                className={
                  hover1 == false ? "text-white font-lg" : "text-white"
                }
              >
                Direct purchase/Investment
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col className="mb-2">
          <Card
            className="text-white drop-shadow-2xl"
            onMouseOver={() => setHover2(true)}
            onMouseOut={() => setHover2(false)}
          >
            <Card.Img
              src="/projects/token.webp"
              alt="Card image"
              className={hover2 == true ? "" : "blur"}
            />
            <Card.ImgOverlay
              className={
                hover2 == false
                  ? "d-flex align-items-center justify-content-center"
                  : ""
              }
            >
              <Card.Title
                className={
                  hover2 == false ? "text-white font-lg" : "text-white"
                }
              >
                Airdrop to AOC holders
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col className="mb-2">
          <Card
            className="text-white drop-shadow-2xl"
            onMouseOver={() => setHover3(true)}
            onMouseOut={() => setHover3(false)}
          >
            <Card.Img
              src="/projects/token.webp"
              alt="Card image"
              className={hover3 == true ? "" : "blur"}
            />
            <Card.ImgOverlay
              className={
                hover3 == false
                  ? "d-flex align-items-center justify-content-center"
                  : ""
              }
            >
              <Card.Title
                className={
                  hover3 == false ? "text-white font-lg" : "text-white"
                }
              >
                Approved Partners’ projects
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col className="mb-2">
          <Card
            className="text-white drop-shadow-2xl"
            onMouseOver={() => setHover4(true)}
            onMouseOut={() => setHover4(false)}
          >
            <Card.Img
              src="/projects/token.webp"
              alt="Card image"
              className={hover4 == true ? "" : "blur"}
            />
            <Card.ImgOverlay
              className={
                hover4 == false
                  ? "d-flex align-items-center justify-content-center"
                  : ""
              }
            >
              <Card.Title
                className={
                  hover4 == false ? "text-white font-lg" : "text-white"
                }
              >
                “Mining” though ‘Green Activities’
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col className="mb-2">
          <Card
            className="text-white drop-shadow-2xl"
            onMouseOver={() => setHover5(true)}
            onMouseOut={() => setHover5(false)}
          >
            <Card.Img
              src="/projects/token.webp"
              alt="Card image"
              className={hover5 == true ? "" : "blur"}
            />
            <Card.ImgOverlay
              className={
                hover4 == false
                  ? "d-flex align-items-center justify-content-center"
                  : ""
              }
            >
              <Card.Title
                className={
                  hover4 == false ? "text-white font-lg" : "text-white"
                }
              >
                Staking
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TokenObtain;
