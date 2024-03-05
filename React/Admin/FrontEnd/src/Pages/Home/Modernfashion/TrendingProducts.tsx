import React from 'react'
import { Card, Col, Row,Tooltip,OverlayTrigger } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {trendingProducts} from "Common/data/ModernFashion";


const TrendingProducts = () => {

    
  return (
    <React.Fragment>   
       <section className="section pt-0">
        <div className="container-fluid container-custom">
            <Row className="justify-content-center">
                <Col lg={7}>
                    <div className="section-content text-center mb-5">
                        <h2 className="title fw-normal text-capitalize mb-3"><b>Trending</b> Products</h2>
                    </div>
                </Col>
            </Row>
            <Row className="row-cols-xxl-5 row-cols-lg-4 row-cols-md-2 row-cols-1" id="productList">
            {(trendingProducts || [])?.map((item: any, key:any) => (             
                <Col className="item" key={key}>
                    <Card className="product-widget border-0 card-animate ribbon-box">
                        {item.ribbon&&<div className={`ribbon ribbon-${item.ribbon.color} round-shape fw-normal fs-14`}>{item.ribbon.text}</div>}
                        <Card.Body className="p-2">
                            <div className="position-relative p-4 bg-light">
                                <img src={item.fashionImgMain} alt="" className="img-fluid product-img-main" />
                                <img src={item.fashionImg} alt="" className="img-fluid product-img-2" />
                                <ul className="product-menu list-unstyled">
                                    <li className="mb-2">
                                        <Link to="#!" className="rounded-circle bookmark" data-bs-toggle="button"><i className="bi bi-star"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/product-details" className="rounded-circle"><i className="bi bi-eye"></i></Link>
                                    </li>
                                </ul>
                                <div className="product-btn mx-auto">
                                    <Link to="/shop-cart" className="btn btn-warning w-100"><i className="bi bi-bag align-baseline me-1"></i> Buy Now</Link>
                                </div>
                            </div>
                            <div className="mt-3">
                                <Link to="/product-details">
                                    <h6 className="text-capitalize fs-17 text-truncate">{item.title}</h6>
                                </Link>
                                <h6 className="fw-normal mb-3">{item.price}</h6>
                                <div className="d-flex flex-wrap gap-1">
                                {(item.tooltip || [])?.map((data: any, key:any) => (   
                                        <OverlayTrigger
                                                        placement="top"
                                                        overlay={ <Tooltip id="button-tooltip">
                                                                {data.tooltipName}
                                                        </Tooltip>}
                                                        key={key} 
                                                    >
                                        
                                        <button type="button" className={`btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-${data.color} opacity-50`} >
                                            <i className="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        
                                    </OverlayTrigger>
                                    ))}
                                    
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
               
            </Row>
            <div className="text-center mt-4">
                <Link to="/catalog/clothing" type="button" className="btn btn-warning btn-hover">
                    View All Products <i className="bi bi-arrow-right"></i>
                </Link>
            </div>
        </div>
    </section>
    </React.Fragment>
  )
}

export default TrendingProducts
