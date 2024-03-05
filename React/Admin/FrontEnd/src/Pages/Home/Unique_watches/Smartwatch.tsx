import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import client1 from "assets/images/clients/shopify.svg";
import client2 from "assets/images/clients/google.svg";
import client3 from "assets/images/clients/paypal.svg";
import client4 from "assets/images/clients/amazon.svg";
import client5 from "assets/images/clients/walmart.svg";
import client6 from "assets/images/clients/verizon.svg";
import { Link } from 'react-router-dom';
const Smartwatch= () => {
  return (
    <React.Fragment>
      <section className="watch-layout">
            <div className="bg-overlay bg-dark bg-opacity-75"></div>
            <Container>
                <Row className=" justify-content-center">
                    <div className="col-lg-6 text-center">
                        <h1 className="text-white fw-medium text-capitalize display-5 lh-base mb-3">Smart watch you should wear every day</h1>
                        <p className="text-white opacity-75 fs-17 fw-normal mb-4">As a mobile command center smartwatch's allows you to monitor the information received by the smartphone, and optionally analyze your condition and health in real time.</p>
                        <div className="pt-2">
                            <Link to="/product-list-right" className="btn btn-danger btn-hover">Shop Now <i className="bi bi-arrow-right align-baseline ms-1"></i></Link>
                        </div>
                        </div>
                    </Row>
                </Container>
        </section>

        <div className="mt-n5 position-relative">
            <Container>
                <Card className=" border-0 shadow">
                    <Card.Body className="p-4">
                        <Row className=" justify-content-center">
                            <Col xxl={2} lg={3} sm={6}>
                                <div className="px-4 m-2">
                                    <Link to="/#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-title="Shopify"><img src={client1} alt="" height="28"/></Link>
                                </div>
                            </Col>
                            <Col xxl={2} lg={3} sm={6}>
                                <div className="px-4 m-2">
                                    <Link to="/#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-title="Google"><img src={client2} alt="" height="28"/></Link>
                                </div>
                            </Col>
                            <Col xxl={2} lg={3} sm={6}>
                                <div className="px-4 m-2">
                                    <Link to="/#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-title="PayPal"><img src={client3} alt="" height="28"/></Link>
                                </div>
                            </Col>
                            <Col xxl={2} lg={3} sm={6}>
                                <div className="px-4 m-2">
                                    <Link to="/#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-title="Amazon"><img src={client4} alt="" height="28"/></Link>
                                </div>
                            </Col>
                            <Col xxl={2} lg={3} sm={6}>
                                <div className="px-4 m-2">
                                    <Link to="/#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-title="Walmart"><img src={client5} alt="" height="28"/></Link>
                                </div>
                            </Col>
                            <Col xxl={2} lg={3} sm={6}>
                                <div className="px-4 m-2">
                                    <Link to="/#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-title="Verizon"><img src={client6} alt="" height="28"/></Link>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>

    </React.Fragment>
  )
}
export default Smartwatch;