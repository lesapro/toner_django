import { newarrivaldata, subarrivaldata } from 'Common/data/topPicksData'
import React, { useState } from 'react'
import { Button, Card, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NewArrival = () => {

    const [showData, setShowData] = useState(false)

    const handleOnClick = () => {
        setShowData(true);
    };

    return (
        <React.Fragment>
            <section className="section">
                <div className="container-fluid container-custom">
                    <Row className=" justify-content-center">
                        <Col lg={7}>
                            <div className="section-content text-center mb-5">
                                <p className="fs-20">Top sale in this week</p>
                                <h2 className="title fw-normal text-capitalize">You are in <span className="fw-semibold">new arrivals</span></h2>
                            </div>
                        </Col>
                    </Row>

                    <Row className="row-cols-xxl-5 row-cols-lg-4 row-cols-md-2 row-cols-1" id="productList" >
                        {(newarrivaldata || [])?.map((item: any, idx: any) => (
                            <Col className=" item" key={idx}>
                                <Card className=" product-widget border-0 card-animate">
                                    <Card.Body className="p-2">
                                        <div className="position-relative p-4 bg-light">
                                            <Image src={item.pic1} alt="" className="img-fluid product-img-main" />
                                            <Image src={item.pic2} alt="" className="img-fluid product-img-2" />

                                            <ul className="product-menu list-unstyled">
                                                <li className="mb-2">
                                                    <Link to="/#" className="rounded-circle bookmark" data-bs-toggle="button"><i className="bi bi-star"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to="/product-overview" className="rounded-circle"><i className="bi bi-eye"></i></Link>
                                                </li>
                                            </ul>
                                            <div className="product-btn mx-auto">
                                                <Link to="/#" className="btn btn-info w-100"><i className="bi bi-bag align-baseline me-1"></i> Buy Now</Link>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <Link to="/#">
                                                <h6 className="text-capitalize fs-16 text-truncate">{item.heading}</h6>
                                            </Link>
                                            <h6 className="fw-normal mb-3 fs-16">${item.price} <small className="text-decoration-line-through fs-14 text-muted">{item.price2}</small></h6>
                                            <div className="d-flex flex-wrap gap-1">
                                                {
                                                    item.btn1
                                                        ?
                                                        <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label={item.btn1} data-bs-original-title={item.btn1}>
                                                            <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-primary opacity-50">
                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                            </button>
                                                        </div>
                                                        :
                                                        ''
                                                }
                                                {
                                                    item.btn2
                                                        ?
                                                        <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label={item.btn2} data-bs-original-title={item.btn2}>
                                                            <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-warning opacity-50">
                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                            </button>
                                                        </div>
                                                        :
                                                        ''
                                                }
                                                {
                                                    item.btn3
                                                        ? <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label={item.btn3} data-bs-original-title={item.btn3}>
                                                            <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-success opacity-50">
                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                            </button>
                                                        </div>
                                                        :
                                                        ''
                                                }
                                                {
                                                    item.btn4
                                                        ? <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label={item.btn4} data-bs-original-title={item.btn4}>
                                                            <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-dark opacity-50">
                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                            </button>
                                                        </div>
                                                        :
                                                        ''
                                                }
                                                {
                                                    item.btn5
                                                        ? <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label={item.btn5} data-bs-original-title={item.btn5}>
                                                            <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-secondary opacity-50">
                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                            </button>
                                                        </div>
                                                        :
                                                        ''
                                                }
                                                {
                                                    item.btn6
                                                        ? <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label={item.btn6} data-bs-original-title={item.btn6}>
                                                            <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-danger opacity-50">
                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                            </button>
                                                        </div>
                                                        :
                                                        ''
                                                }
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    {
                        showData ? (
                            <Row  className="row-cols-xxl-5 row-cols-lg-4 row-cols-md-2 row-cols-1" id="productList">
                                {(subarrivaldata || [])?.map((elem: any, idx: any) => (
                                    <Col className=" item" key={idx}>
                                        <Card className=" product-widget border-0 card-animate">
                                            <Card.Body className="p-2">
                                                <div className="position-relative p-4 bg-light">
                                                    <Image src={elem.pic1} alt="" className="img-fluid product-img-main" />
                                                    <Image src={elem.pic2} alt="" className="img-fluid product-img-2" />

                                                    <ul className="product-menu list-unstyled">
                                                        <li className="mb-2">
                                                            <Link to="/#" className="rounded-circle bookmark" data-bs-toggle="button"><i className="bi bi-star"></i></Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/product-overview" className="rounded-circle"><i className="bi bi-eye"></i></Link>
                                                        </li>
                                                    </ul>
                                                    <div className="product-btn mx-auto">
                                                        <Link to="/#" className="btn btn-info w-100"><i className="bi bi-bag align-baseline me-1"></i> Buy Now</Link>
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <Link to="/#">
                                                        <h6 className="text-capitalize fs-16 text-truncate">{elem.heading}</h6>
                                                    </Link>
                                                    <h6 className="fw-normal mb-3 fs-16">${elem.price}  <small className="text-decoration-line-through fs-14 text-muted">{elem.price2}</small> </h6>
                                                    <div className="d-flex flex-wrap gap-1">
                                                        {
                                                            elem.btn1
                                                                ?
                                                                <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label={elem.btn1} data-bs-original-title={elem.btn1}>
                                                                    <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-primary opacity-50">
                                                                        <i className="ri-checkbox-blank-circle-fill"></i>
                                                                    </button>
                                                                </div>
                                                                :
                                                                ''
                                                        }
                                                        {
                                                            elem.btn2
                                                                ?
                                                                <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label={elem.btn2} data-bs-original-title={elem.btn2}>
                                                                    <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-warning opacity-50">
                                                                        <i className="ri-checkbox-blank-circle-fill"></i>
                                                                    </button>
                                                                </div>
                                                                :
                                                                ''
                                                        }
                                                        {
                                                            elem.btn3
                                                                ? <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label={elem.btn3} data-bs-original-title={elem.btn3}>
                                                                    <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-success opacity-50">
                                                                        <i className="ri-checkbox-blank-circle-fill"></i>
                                                                    </button>
                                                                </div>
                                                                :
                                                                ''
                                                        }
                                                        {
                                                            elem.btn4
                                                                ? <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label={elem.btn4} data-bs-original-title={elem.btn4}>
                                                                    <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-dark opacity-50">
                                                                        <i className="ri-checkbox-blank-circle-fill"></i>
                                                                    </button>
                                                                </div>
                                                                :
                                                                ''
                                                        }
                                                        {
                                                            elem.btn5
                                                                ? <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label={elem.btn5} data-bs-original-title={elem.btn5}>
                                                                    <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-secondary opacity-50">
                                                                        <i className="ri-checkbox-blank-circle-fill"></i>
                                                                    </button>
                                                                </div>
                                                                :
                                                                ''
                                                        }
                                                        {
                                                            elem.btn6
                                                                ? <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label={elem.btn6} data-bs-original-title={elem.btn6}>
                                                                    <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-danger opacity-50">
                                                                        <i className="ri-checkbox-blank-circle-fill"></i>
                                                                    </button>
                                                                </div>
                                                                :
                                                                ''
                                                        }
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                                }
                            </Row>
                        ) : (
                            <div className="text-center mt-4">
                                <Button variant='info' type="button" className="rounded-0 btn-load" id="productLoadMore" onClick={handleOnClick}>
                                    <span className="d-flex align-items-center">
                                        <span className="flex-grow-1 me-2">
                                            Load More
                                        </span>
                                        <span className="spinner-border flex-shrink-0" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </span>
                                    </span>
                                </Button>
                            </div>
                        )
                    }
                </div>
            </section>
        </React.Fragment>
    )
}

export default NewArrival