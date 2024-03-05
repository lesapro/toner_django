import React from "react";
import { Card, Col, Container, Row, Tab, Alert, Nav } from "react-bootstrap";
import { Shoporder } from "Components/ShopTopBar";

const Payment = () => {
    document.title = "payment | Toner - React FrontEnd";
    return (
        <React.Fragment>
            <section className="section pb-4">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Alert className="alert-danger text-center text-capitalize mb-4 fs-14">
                                save up to <b>30%</b> to <b>40%</b> off omg! just look at the <b>great deals</b>!
                            </Alert>
                        </Col>
                    </Row>
                    <Row className="product-list">
                        <Col xl={8}>
                            <h5 className="mb-0 flex-grow-1">Payment Selection</h5>

                            <Tab.Container defaultActiveKey="paypal">
                                <Nav variant="pills" className="arrow-navtabs nav-success bg-light mb-3 mt-4 nav-justified custom-nav" as="ul" role="tablist">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="paypal" className="py-3">
                                            <span className="d-block d-sm-none"><i className="ri-paypal-fill align-bottom"></i></span>
                                            <span className="d-none d-sm-block"><i className="ri-paypal-fill align-bottom pe-2"></i> Paypal</span>
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="credit" className="py-3">
                                            <span className="d-block d-sm-none"><i className="ri-bank-card-fill align-bottom"></i></span>
                                            <span className="d-none d-sm-block"> <i className="ri-bank-card-fill align-bottom pe-2"></i> Credit / Debit Card</span>
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="cash" className="py-3">
                                            <span className="d-block d-sm-none"><i className="ri-money-dollar-box-fill align-bottom"></i></span>
                                            <span className="d-none d-sm-block"> <i className="ri-money-dollar-box-fill align-bottom pe-2"></i> Cash on Delivery</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>


                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="paypal" >
                                        <Card>
                                            <Card.Body>
                                                <Row className="gy-3">
                                                    <Col md={12}>
                                                        <label htmlFor="cc-name" className="form-label">Buyers First Name</label>
                                                        <input type="text" className="form-control" id="bname" placeholder="Enter Name" />
                                                    </Col>

                                                    <Col md={6}>
                                                        <label htmlFor="cc-number" className="form-label">Buyers Last Name</label>
                                                        <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" />
                                                    </Col>

                                                    <Col md={6}>
                                                        <label htmlFor="cc-expiration" className="form-label">Email Address</label>
                                                        <input type="email" className="form-control" id="email" placeholder="Enter Email Address" />
                                                    </Col>

                                                    <Col md={12}>
                                                        <label htmlFor="actype" className="form-label">Select your paypal account type</label>
                                                        <div className="d-flex gap-4 mt-1">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="radio1" defaultChecked/>
                                                                <label htmlFor="radio1" className="form-check-label">Domestic</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="radio2" />
                                                                <label htmlFor="radio2" className="form-check-label">International</label>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>

                                                <div className="hstack gap-2 justify-content-end pt-4">
                                                    <button type="button" className="btn btn-hover btn-primary"><i className="ri-paypal-fill align-bottom align-bottom pe-2"></i> Log into my Paypal</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="credit">
                                        <Card>
                                            <Card.Body>
                                                <Row className="gy-3">
                                                    <Col md={12}>
                                                        <label htmlFor="cc-name" className="form-label">Name on card</label>
                                                        <input type="text" className="form-control" id="cc-name" placeholder="Enter name" />
                                                        <small className="text-muted">Full name as displayed on card</small>
                                                    </Col>

                                                    <Col md={6}>
                                                        <label htmlFor="cc-number" className="form-label">Credit card number</label>
                                                        <input type="text" className="form-control" id="cc-number" placeholder="xxxx xxxx xxxx xxxx" />
                                                    </Col>

                                                    <Col md={3}>
                                                        <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                                                        <input type="text" className="form-control" id="cc-expiration" placeholder="MM/YY" />
                                                    </Col>

                                                    <Col md={3}>
                                                        <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                                        <input type="text" className="form-control" id="cc-cvv" placeholder="xxx" />
                                                    </Col>
                                                </Row>

                                                <div className="hstack gap-2 justify-content-end pt-4">
                                                    <button type="button" className="btn btn-hover w-md btn-primary">Pay<i className="ri-logout-box-r-line align-bottom ms-2"></i></button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="cash">
                                        <Card>
                                            <Card.Body>
                                                <div className="text-center py-3">
                                                    <div className="avatar-md mx-auto mb-4">
                                                        <div className="avatar-title bg-primary-subtle text-primary rounded-circle display-6">
                                                            <i className="bi bi-cash"></i>
                                                        </div>
                                                    </div>
                                                    <h5 className="fs-16 mb-3">Cash on Delivery</h5>
                                                    <p className="text-muted mt-3 mb-0 w-75 mx-auto">Integer vulputate metus eget purus maximus porttitor. Maecenas ut porta justo. Donec finibus nec nibh ut urna viverra semper.</p>
                                                </div>
                                                <div className="hstack gap-2 justify-content-end pt-3">
                                                    <button type="button" className="btn btn-hover w-md btn-primary">Continue<i className="ri-logout-box-r-line align-bottom ms-2"></i></button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>

                        </Col>
                        <Col lg={4}>
                            <Shoporder />
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment >
    )
}

export default Payment;