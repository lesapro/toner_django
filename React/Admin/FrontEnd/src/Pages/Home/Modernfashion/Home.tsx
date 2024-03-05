import React from 'react';

//import Images
import fashionImg from "../../../assets/images/fashion/img-1.png";
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <React.Fragment>
      <section className="modern-fashion-home bg-warning-subtle overflow-hidden">
        <div className="font-effect position-absolute ff-fancy text-warning fw-normal text-uppercase">
            New Arrivals FASHION
        </div>
        <div className="container-fluid container-custom">
            <Row className="align-items-center">
                <Col lg={5}>
                    <p className="fs-18">👕 Find Your Style 👚</p>
                    <h1 className="text-capitalize display-5 fw-medium lh-base mb-3">Unleash your <span className="ff-secondary">Street</span> with our new collection</h1>
                    <p className="text-muted lead fw-normal mb-4">A fashion collection is a curated series of garments and accessories that customers can wear together. Yours may consist of traditional pieces, such as tops and outerwear single product available in multiple colorways.</p>
                    <Link to="/product-grid-sidebar-banner" className="link-effect link-warning fs-17">Shop Now <i className="bi bi-arrow-right align-baseline ms-1"></i></Link>
                </Col>
                <Col lg={6} className="ms-auto">
                    <div className="text-center main-home-img">
                        <img src={fashionImg} alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    </section>
    
    </React.Fragment>
  )
}

export default Home;
