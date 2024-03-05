import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { aboutus } from 'Common/data/AboutusData'
import { Autoplay, Navigation } from 'swiper/modules'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom'

const Aboutus = () => {
    return (
        <React.Fragment>
            <section className="section bg-light">
                <Container fluid>
                    <Row className=" justify-content-center">
                        <Col lg={5}>
                            <div className="text-center mb-5">
                                <h3>What Customers Say About Us</h3>
                                <p className="text-muted fs-15">A customer is a person or business that buys goods or services from another business. Customers are crucial because they generate revenue.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                           
                        <Swiper modules={[Navigation, Autoplay]}
                                    slidesPerView={5}
                                    spaceBetween={25}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 5,
                                            spaceBetween: 30,
                                        },
                                        768: {
                                            slidesPerView: 5,
                                            spaceBetween: 30,
                                        },
                                        1024: {
                                            slidesPerView: 5,
                                            spaceBetween: 30,
                                        },
                                    }}
                                    loop={true}
                                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                                    className="category-slider"
                        >
                                <div className="swiper-button-next h-auto" aria-controls="swiper-wrapper-2aa67f756d27c1eb" tabIndex={0} role="button" aria-label="Next slide"></div>
                                <div className="swiper-button-prev h-auto" aria-controls="swiper-wrapper-2aa67f756d27c1eb" tabIndex={0} role="button" aria-label="Previous slide"></div>
                                 
                                <div className="swiper-wrapper" >
                                  {(aboutus || []).map((item:any, key:any) => (
                                    <SwiperSlide key={key}>
                                        <Card className=" border-0" >
                                            <Card.Body>
                                            <i className="bi bi-quote position-absolute end-0 top-0 display-3 text-primary" style={{ opacity: 0.10 }}></i>
                                                <div className="mb-2 text-warning">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                </div>
                                                <h5 className="mb-3">{item.header}</h5>
                                                <p className="fs-16 text-muted mb-4">" {item.pera1} <b>{item.pera2}</b>{item.pera}</p>
                                                <div className="d-flex gap-3">
                                                    <div className="flex-shrink-0">
                                                        <img src={item.img} alt="" className="avatar-sm rounded"/>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <Link to="/#">
                                                            <h6>{item.cname}</h6>
                                                        </Link>
                                                        <p className="text-muted fs-14 mb-0">{item.depart}</p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        
                                    </SwiperSlide>                                    
                                    ))} 
                                </div>
                            </Swiper>
                                
                        </Col>
                    </Row>
                </Container>
            </section>

        </React.Fragment>
    )
}
export default Aboutus