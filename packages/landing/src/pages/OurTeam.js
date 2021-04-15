import React, { Component } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

//import image
import card1bg from "./card1bg.png";
import card2bg from "./card2bg.png";
import comingsoon from "./comingsoon.png";
import card3bg from "./Avatars/Geekray.png";
import card4bg from "./itachi.gif";

export default class Feature extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="section-heading">
            <div className="left-block">
              <h2>Our Team</h2>
            </div>
            <div className="right-block">
              <span className="text-right-heading-number">01</span>
              <span className="text-right-heading-sep">/</span>
              <span className="text-right-heading">Range of NFTs</span>
            </div>
          </Row>
          <Row className="pikacardsrow">
            <Col lg={3} xs={12} className="mt-4 pt-2">
              <Card className="shadow rounded border-0 overflow-hidden card1 grow">
                <span className="card-left-heading-block">
                  <span className="card-left-heading-number">01</span>
                  <span className="card-left-heading-sep">/</span>
                  <span className="card-left-heading">04</span>
                </span>
                <img src={card1bg} className="figure-img" alt="Landrick" />
                <CardBody>
                  <h5 className="card-title">Pika - Founder</h5>
                  <p className="card-muted">
                  Pika has been in the crypto industry for over 6 years starting out as a bitcoin trader and moved over to the BSC chain in late December 2020. He noticed a gap in the market and had an urge to fill it, a launchpad on the BSC chain that KYCs/audits & locks liquidity for onboarded projects with an NFT spin. 
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg={3} xs={12} className="mt-4 pt-2 ">
              <Card className="shadow rounded border-0 overflow-hidden card2 grow">
                <span className="card-left-heading-block">
                  <span className="card-left-heading-number">02</span>
                  <span className="card-left-heading-sep">/</span>
                  <span className="card-left-heading">04</span>
                </span>
                <img src={card2bg} className="figure-img" alt="Landrick" />
                <CardBody>
                  <h5 className="card-title">Altpl - Backend Dev</h5>
                  <p className="text-muted">
                  Altpl is our backend developer who is in charge of our smart contract creations and has worked with many other big projects in his time.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg={3} xs={12} className="mt-4 pt-2 ">
              <Card className="shadow rounded border-0 overflow-hidden card3 grow">
                <span className="card-left-heading-block">
                  <span className="card-left-heading-number">03</span>
                  <span className="card-left-heading-sep">/</span>
                  <span className="card-left-heading">04</span>
                </span>
                <img src={card3bg} className="figure-img" alt="Landrick" />
                <CardBody>
                  <h5 className="card-title">Geekray - Designer</h5>
                  <p className="text-muted">
                  GeekRay absolutely loves illustrating anime characters, he's a self taught artist and discovered his passion for drawing in his childhood. GeekRay has been doing digital illustration for 2 and a half years and mostly draws in anime style because of his love for anime.  </p>
                </CardBody>
              </Card>
            </Col><Col lg={3} xs={12} className="mt-4 pt-2 ">
              <Card className="shadow rounded border-0 overflow-hidden card3 grow">
                <span className="card-left-heading-block">
                  <span className="card-left-heading-number">04</span>
                  <span className="card-left-heading-sep">/</span>
                  <span className="card-left-heading">04</span>
                </span>
                <img src={card4bg} className="figure-img" alt="Landrick" />
                <CardBody>
                  <h5 className="card-title">Amit - Frontend Developer</h5>
                  <p className="text-muted">
                  Amit is a smart frontend engineer and has been in the blockchain tech development for a few years. He has a great knack for high quality user interface. His love for anime and its wide ray of application in NFTs makes him an ideal candidate for this role.</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
