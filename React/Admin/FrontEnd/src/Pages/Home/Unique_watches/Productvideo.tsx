import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import vimg from "assets/images/watch/video-img.jpg";
import { qualityproduct } from 'Common/data/AboutusData';
import { Link } from 'react-router-dom';

const Productvideo = () => {
    return (
        <React.Fragment>

            <section className="watch-cta position-relative">
                <div className="bg-overlay bg-dark"></div>
                <Container>
                    <Row className=" justify-content-center">
                        <Col lg={7}>
                            <div className="text-center">
                                <p className="fs-20 text-white">Product Features Demo</p>
                                <h2 className="title text-capitalize text-white lh-base fw-normal mb-0">Get product more information for the video</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Container className=" video-card">
                <Row className=" justify-content-center">
                    <Col lg={10}>
                        <img src={vimg} alt="" className="img-fluid object-fit-cover rounded-4" />

                        <div className="video-main">
                            <div className="promo-video">
                                <div className="waves-block">
                                    <div className="waves wave-1"></div>
                                    <div className="waves wave-2"></div>
                                    <div className="waves wave-3"></div>
                                </div>
                            </div>
                            <Button type="button" variant='dark' className="btn-icon rounded-circle" data-bs-toggle="modal" data-bs-target="#videoPlay"><i className="ph ph-play"></i></Button>
                        </div>
                    </Col>
                </Row>
            </Container>



            {/* Quality Product */}


            <section className="section">
                <Container>
                    <Row className=" justify-content-center">
                        <Col lg={7}>
                            <div className="section-content text-center mb-5 pb-3">
                                <h2 className="title text-capitalize fw-normal">We have <b>quality</b> Products</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {(qualityproduct || []).map((item:any,key:any)=>(
                        <Col xxl={3} lg={4} md={6} key={key}>
                            <Card className=" watch-product text-center border-0 card-animate overflow-hidden">
                                <span className="badge bg-danger-subtle text-danger fs-12 position-absolute top-0 end-0 start-0 rounded-bottom-0">{item.sale}</span>
                                <Card.Body className="pt-4">
                                    <div className="pt-2">
                                        <img src={item.img} alt="" className="img-fluid"/>
                                            <div className="mt-4">
                                                <h6 className="fs-15 text-capitalize text-truncate"><Link to="#" className="text-reset">{item.title}</Link></h6>
                                                <p className="mb-0 fs-16">{item.price}  <small className="text-decoration-line-through fs-13 text-muted">{item.offprice}</small></p>
                                            </div>
                                            <ul className="watch-widgets-menu hstack justify-content-center gap-2 list-unstyled position-absolute mb-0">
                                                <li>
                                                    <Link to="#" className="rounded"><i className="bi bi-star"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop-cart" className="rounded"><i className="bi bi-bag"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to="/product-details" className="rounded"><i className="bi bi-eye"></i></Link>
                                                </li>
                                            </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                </Container>
            </section>


        </React.Fragment>
    )
}
export default Productvideo