import React, { Component } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

//import image
import card1 from "./card1.png";
import card2 from "./card2.png";
import comingsoon from "./comingsoon.png";

export default class Feature extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="section-heading">
            <div className="left-block">
              <h2>Choose your Adventure</h2>
            </div>
            <div className="right-block">
              <span className="text-right-heading-number">01</span>
              <span className="text-right-heading-sep">/</span>
              <span className="text-right-heading">Range of NFTs</span>
            </div>
          </Row>
          <Row className="pikacardsrow">
            <Col lg={4} xs={12} className="mt-4 pt-2">
              <Card className="shadow rounded border-0 overflow-hidden card1 grow">
                <span className="card-left-heading-block">
                  <span className="card-left-heading-number">01</span>
                  <span className="card-left-heading-sep">/</span>
                  <span className="card-left-heading">03</span>
                </span>
                <img src={card1} className="figure-img" alt="Landrick" />
                <CardBody>
                  <h5 className="card-title">Apep</h5>
                  <p className="card-muted">
                    Descendant of the Agamidae family Apala is a fierce common
                    warrior and her sub-class is earth.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg={4} xs={12} className="mt-4 pt-2 ">
              <Card className="shadow rounded border-0 overflow-hidden card2 grow">
                <span className="card-left-heading-block">
                  <span className="card-left-heading-number">02</span>
                  <span className="card-left-heading-sep">/</span>
                  <span className="card-left-heading">03</span>
                </span>
                <img src={comingsoon} className="figure-img" alt="Landrick" />
                <CardBody>
                  <h5 className="card-title">Apala</h5>
                  <p className="text-muted">
                    Descendant of the Agamidae family Apep is a fierce rare
                    warrior and her sub-class is earth.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg={4} xs={12} className="mt-4 pt-2 ">
              <Card className="shadow rounded border-0 overflow-hidden card3 grow">
                <span className="card-left-heading-block">
                  <span className="card-left-heading-number">03</span>
                  <span className="card-left-heading-sep">/</span>
                  <span className="card-left-heading">03</span>
                </span>
                <img src={card2} className="figure-img" alt="Landrick" />
                <CardBody>
                  <h5 className="card-title">Adalina</h5>
                  <p className="text-muted">
                    Descendant of the Agamidae family Adalina is a fierce epic
                    warrior and her sub-class is earth.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
