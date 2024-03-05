import React from 'react'

import img2 from "assets/images/fashion/img-02.png"
import product1 from "assets/images/fashion/product/img-01.png"
import product2 from "assets/images/fashion/product/img-02.png"
import product3 from "assets/images/fashion/product/img-03.png"
import product12 from "assets/images/fashion/product/img-12.png"
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Premium = () => {
    return (
        <React.Fragment>
            <section>
                <div className="container-fluid container-custom">
                    <Row className=" justify-content-center">
                        <Col lg={7}>
                            <div className="section-content text-center mb-5">
                                <p className="fs-20">Popular Collection</p>
                                <h2 className="title fw-normal text-capitalize"><span className="section-title d-inline-block section-title-primary">Premium </span> <span className="fw-semibold"> Categories</span> for Fashion</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={5}>
                            <div className="category-widgets-main card card-height-100 border-0 shadow-none bg-light btn-6">
                                <div className="effect h-100">
                                    <img src={img2} alt="" className="img-fluid h-100 object-fit-cover" />
                                    <div className="widgets-wrapper position-absolute text-center">
                                        <Link to="#" className="btn btn-dark w-md rounded-0 stretched-link">Woman Fashion</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <Row>
                                <Col lg={6}>
                                    <div className="category-widgets-main card border-0 shadow-none bg-light">
                                        <div className="effect">
                                            <img src={product2} alt="" className="img-fluid" />
                                            <div className="widgets-wrapper position-absolute text-center">
                                                <Link to="#" className="btn btn-dark w-md rounded-0 stretched-link">Man's</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="category-widgets-main card border-0 shadow-none bg-light">
                                        <div className="effect">
                                            <img src={product3} alt="" className="img-fluid" />
                                            <div className="widgets-wrapper position-absolute text-center">
                                                <Link to="#" className="btn btn-dark w-md rounded-0 stretched-link">Accessories</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="category-widgets-main card border-0 shadow-none bg-light">
                                        <div className="effect">
                                            <img src={product12} alt="" className="img-fluid" />
                                            <div className="widgets-wrapper position-absolute text-center">
                                                <Link to="#" className="btn btn-dark w-md rounded-0 stretched-link">Jacket & Sweater</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="category-widgets-main card border-0 shadow-none bg-light">
                                        <div className="effect">
                                            <img src={product1} alt="" className="img-fluid" />
                                            <div className="widgets-wrapper position-absolute text-center">
                                                <Link to="#" className="btn btn-dark w-md rounded-0 stretched-link">Tops</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Premium