import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import watch1 from "assets/images/watch/products/img-07.png";
import watch2 from "assets/images/watch/products/img-01.png";
import watch3 from "assets/images/watch/products/img-04.png";
import watch4 from "assets/images/watch/products/img-06.png";
import watch5 from "assets/images/watch/products/img-05.png";
import { Link } from 'react-router-dom';



const WatchCollection = () => {
    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={7}>
                            <div className="section-content text-center mb-5">
                                <h2 className="title fw-normal">Our <b>Watch Collections</b></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} md={6}>
                            <Card className=" card-animate watch-category-widgets">
                                <Card.Body className=" p-2">
                                    <div className="bg-light">
                                        <img src={watch1} alt="" className="img-fluid" />
                                    </div>
                                    <div className="category-btn mx-3 pb-3">
                                        <Link to="/#" className="btn btn-danger stretched-link w-100">Fancy Watches</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6}>
                            <Card className=" card-animate watch-category-widgets">
                                <Card.Body className=" p-2">
                                    <div className="bg-light">
                                        <img src={watch2} alt="" className="img-fluid" />
                                    </div>
                                    <div className="category-btn mx-3 pb-3">
                                        <Link to="/#" className="btn btn-danger stretched-link w-100">Women's Watches</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6}>
                            <Card className="card-animate watch-category-widgets">
                                <Card.Body className=" p-2">
                                    <div className="bg-light">
                                        <img src={watch3} alt="" className="img-fluid" />
                                    </div>
                                    <div className="category-btn mx-3 pb-3">
                                        <Link to="/#" className="btn btn-danger stretched-link w-100">Men's Watches</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6}>
                            <Card className="card-animate watch-category-widgets">
                                <Card.Body className=" p-2">
                                    <div className="bg-light">
                                        <img src={watch4} alt="" className="img-fluid" />
                                    </div>
                                    <div className="category-btn mx-3 pb-3">
                                        <Link to="/#" className="btn btn-danger stretched-link w-100">Smartwatch's</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Best Quality */}



            <section className="section pt-4">
                <Container>
                    <Row className="align-items-center gy-4">
                        <Col xxl={5}>
                            <div className="section-content">
                                <p className="fs-15 mb-2">Why Choose Toner Shop ?</p>
                                <h2 className="title text-capitalize lh-base fw-normal mb-3">Committed to the <b>best quality</b> and results</h2>
                                <p className="text-muted fs-15">Luxury watches are more expensive because of the time and extensive effort it takes to make them, but also because of the parts that are used in their manufacture.</p>
                                <ul className="list-unstyled vstack gap-2 fs-15 mb-4">
                                    <li>
                                        <div className="d-flex gap-2 align-items-center">
                                            <div>
                                                <i className="bi bi-caret-right"></i>
                                            </div>
                                            <p className="mb-0">Water resistant up to 50M</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex gap-2 align-items-center">
                                            <div>
                                                <i className="bi bi-caret-right"></i>
                                            </div>
                                            <p className="mb-0">Music & volume controls</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex gap-2 align-items-center">
                                            <div>
                                                <i className="bi bi-caret-right"></i>
                                            </div>
                                            <p className="mb-0">Daily activity tracker</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link to="/product-list-right" className="btn btn-danger btn-hover">Shop Now <i className="bi bi-arrow-right align-baseline ms-2"></i></Link>
                            </div>
                        </Col>
                        <Col xxl={6} className="ms-auto">
                            <div className="about-watch text-center">
                                <img src={watch5} alt=""/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </React.Fragment>
    )
}
export default WatchCollection;