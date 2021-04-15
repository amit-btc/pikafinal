import React, { Component } from "react";
import { Card, Col, Container, Row } from "reactstrap";

//import image
import tokenomics from "./tokenomics.png";

export default class Feature extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="section-heading">
            <div className="left-block">
              <h2>Tokenomics  $PIKA</h2>
            </div>
            <div className="right-block">
              <span className="text-right-heading-number">02</span>
              <span className="text-right-heading-sep">/</span>
              <span className="text-right-heading">Our Tokenomics</span>
            </div>
          </Row>
          <Row className="pikacardsrow">
            <Col lg={12} xs={12} className="mt-4 pt-2">
              <Card className="shadow rounded border-0 overflow-hidden card1 grow">
                <img src={tokenomics} className="figure-img" alt="Tokenomics" />
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
