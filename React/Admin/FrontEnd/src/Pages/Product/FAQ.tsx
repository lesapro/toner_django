import { faqquetion } from "Common/data";
import { ContactHelp } from "Components/CommonService";
import React from "react";
import { Card, Col, Container, Row, Button,  Breadcrumb, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

const FAQ = () => {
  
    return (
        <React.Fragment>
            <section className="ecommerce-about bg-primary">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6} >
                            <div className="text-center">
                                <h1 className="text-white mb-0">Frequently Asked Questions</h1>
                                <Breadcrumb bsPrefix="breadcrumb breadcrumb-light justify-content-center mt-4 fs-15">
                                    <Breadcrumb.Item href="#">Shop</Breadcrumb.Item>
                                    <Breadcrumb.Item active aria-current="page">Faq's</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <div className="text-center">
                                <h3>Have any Questions ?</h3>
                                <p className="text-muted mb-4">You can ask anything you want to know about Feedback.</p>
                                <div className="hstack flex-wrap gap-2 justify-content-center">
                                    <Button variant="primary" className=" btn-label rounded-pill"><i className="ri-mail-line label-icon align-middle rounded-pill fs-16"></i> Email Us</Button>
                                    <Button variant="info" className=" btn-label rounded-pill"><i className="ri-twitter-line label-icon align-middle rounded-pill fs-16"></i> Send Us Tweet</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        {
                            (faqquetion || [])?.map((item, idx) => {
                                return (
                                    <Col lg={3} md={6} key={idx}>
                                        <Card className="text-center mt-4 position-relative">
                                            <Card.Body>
                                                <div className="avatar-md mx-auto mb-4">
                                                    <div className="avatar-title bg-success-subtle text-success rounded-circle h1 m-0">
                                                        <i className={`${item.icone}`}></i>
                                                    </div>
                                                </div>
                                                <h5 className="fs-16 mb-3"><Link to="#" className="text-body stretched-link">{item.title}</Link></h5>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                )
                            })
                        }
                    </Row>
                    <Row className="gy-4 justify-content-center mt-2">
                        <Col xxl={8} lg={8}>
                            <div>
                                <div className="mb-4">
                                    <h5 className="fs-16 mb-0 fw-semibold">General Questions</h5>
                                </div>
                                <Accordion defaultActiveKey='0' className="accordion-border-box">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="h2">
                                            What are FAQ questions?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            An FAQ page <b>(short for Frequently Asked Question page)</b> is a part of your website that provides answers to common questions, assuages concerns, and overcomes objections. It's a space where customers away from your sales-focused landing pages and homepage.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className="h2">
                                            What is FAQ process?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            FAQ stands for Frequently Asked Questions. It's <b>your opportunity to communicate with the most important visitors to your website</b> – those who have begun the decision-making process about whether to do business with you can't fit elsewhere on their website.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header className="h2">
                                            What is the purpose of FAQ?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            The purpose of a FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing information, and text consisting of questions and their answers may thus be called a FAQ regardless.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header className="h2">
                                            What is an online FAQ?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            FAQs stand for frequently asked questions. It is one of the many crucial pages of your website. It gives your customers answers to recurring and common questions and addresses their concerns public product documentation that is released at the same time.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <ContactHelp cname="section" />
        </React.Fragment>
    )
}
export default FAQ;