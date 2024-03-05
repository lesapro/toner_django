import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {trendingOutfit} from "Common/data/ModernFashion"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const TrendingOutfit = () => {
  return (
    <React.Fragment>
      <section className="section">
        <div className="container-fluid container-custom">
            <Row className="align-items-center">
                <Col lg={2}>
                    <h2 className="title text-capitalize fw-medium lh-base mb-3"><b>Trending Outfit</b> of the day</h2>
                    <Link to="/product-grid-right" className="btn btn-outline-warning btn-hover">View All <i className="bi bi-arrow-right"></i></Link>
                </Col>
                <Col lg={10}>       
                        <Swiper modules={[Navigation, Autoplay]}
                                    slidesPerView={4}
                                    spaceBetween={30}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 4,
                                            spaceBetween: 30,
                                        },
                                        768: {
                                            slidesPerView: 4,
                                            spaceBetween: 30,
                                        },
                                        1024: {
                                            slidesPerView: 4,
                                            spaceBetween: 30,
                                        },
                                    }}
                                    loop={true}
                                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                                    className="category-slider"
                        >
                        <div className="swiper-wrapper">
                        {(trendingOutfit || []).map((item, key) => (
                            <SwiperSlide className="swiper-slide" key={key}>
                                <Card className="category-widgets-main border-0 shadow-none bg-light">
                                    <div className="effect">
                                        <img src={item.fashionImg} alt="" className="img-fluid" />
                                        <div className="widgets-wrapper position-absolute text-center">
                                            <Link to="/product-grid-right" className="btn btn-primary w-md rounded-0 stretched-link">{item.tshirt}</Link>
                                        </div>
                                    </div>
                                </Card>
                            </SwiperSlide>
                            ))}
                            
                        </div>
                        <div className="swiper-pagination"></div>
                    </Swiper>
                </Col>
            </Row>
        </div>
    </section>
    </React.Fragment>
  )
}

export default TrendingOutfit
