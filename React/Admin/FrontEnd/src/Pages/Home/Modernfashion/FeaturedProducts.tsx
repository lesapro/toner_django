import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {featuredProducts} from "Common/data/ModernFashion";

const FeaturedProducts = () => {
  return (
    <React.Fragment>
      <section className="section">
        <div className="container-fluid container-custom">
            <Row className="justify-content-center">
                <Col lg={7}>
                    <div className="section-content text-center mb-5">
                        <h2 className="title fw-normal">Our <span className="fw-semibold">Featured</span> Products</h2>
                    </div>
                </Col>
            </Row>
            <Row className="row-cols-xxl-5 row-cols-lg-4 row-cols-md-2 row-cols-1">
            {(featuredProducts || []).map((item, key) => (
                <Col className="product-item" key={key}>
                    <Card className={`card-animate border-${item.cardColor}-subtle shadow overflow-hidden`}>
                        <Card.Body>
                            <ul className="list-unstyled position-absolute end-0 top-0 p-3">
                                <li className="mb-2">
                                    <Link to="#!" className={`btn btn-icon btn-soft-secondary ${item.starClass} btn-sm rounded-circle`} data-bs-toggle="button" aria-pressed="true"><i className="bi bi-star"></i></Link>
                                </li>
                                <li>
                                    <Link to="/product-details" className="btn btn-soft-dark btn-icon btn-sm rounded-circle"><i className="bi bi-eye align-middle"></i></Link>
                                </li>
                            </ul>
                            <img src={item.productImg} alt="" className="img-fluid" />
                        </Card.Body>
                        <Card.Body className={`bg-${item.cardColor}-subtle`}>
                            <h6>{item.price} <small className='text-decoration-line-through fs-14 text-muted'>{item.offer}</small></h6>
                            <h6 className="fs-17 fw-medium mb-0 text-truncate"><Link to="/product-details" className={`text-${item.cardColor}`}>{item.description}</Link></h6>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
                
            </Row>
        </div>
    </section>
    </React.Fragment>
  )
}

export default FeaturedProducts
