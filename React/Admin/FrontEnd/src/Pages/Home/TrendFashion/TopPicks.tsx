import { pickdata } from 'Common/data/topPicksData'
import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const TopPicks = () => {
    return (
        <React.Fragment>
            <section className="section">
                <Container fluid className="container-custom">
                    <Row className="justify-content-center">
                        <Col lg={7}>
                            <div className="section-content text-center mb-5">
                                <h2 className="title fw-normal"><span>Top Picks On</span> <span className="fw-semibold"> Fashion</span></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Swiper className=" top-Product-slider"
                                modules={[Navigation, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={5}
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
                                
                            >
                                <div className="swiper-button-prev h-auto" aria-controls="swiper-wrapper-2aa67f756d27c1eb" tabIndex={0} role="button" aria-label="Previous slide"></div>
                                <div className="swiper-button-next h-auto" aria-controls="swiper-wrapper-2aa67f756d27c1eb" tabIndex={0} role="button" aria-label="Next slide"></div>
                                <div className="swiper-wrapper">
                                {
                                    (pickdata || [])?.map((item: any, index: any) => (
                                            <SwiperSlide key={index}>

                                                <Card className="product-widget border-0 card-animate"  >
                                                    <Card.Body className="p-2">
                                                        <div className="position-relative p-4 bg-light">
                                                            <Image src={item.img1} alt="" className="img-fluid product-img-main" />
                                                            <Image src={item.img2} alt="" className="img-fluid product-img-2" />
                                                            <ul className="product-menu list-unstyled">
                                                                <li className="mb-2">
                                                                    <Link to="/#" className="rounded-circle bookmark" data-bs-toggle="button"><i className="bi bi-star"></i></Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/product-overview" className="rounded-circle"><i className="bi bi-eye"></i></Link>
                                                                </li>
                                                            </ul>
                                                            <div className="product-btn mx-auto">
                                                                <div className="bg-body p-2">
                                                                    <div className="d-flex flex-wrap justify-content-center gap-1">
                                                                        <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Blue" data-bs-original-title="Blue">
                                                                            <button type="button" className="btn avatar-xxs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-primary opacity-50">
                                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                                            </button>
                                                                        </div>
                                                                        {
                                                                            item.color
                                                                                ?
                                                                                ''
                                                                                :
                                                                                <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Yellow" data-bs-original-title={item.color}>
                                                                                    <button type="button" className="btn avatar-xxs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-warning opacity-50">
                                                                                        <i className="ri-checkbox-blank-circle-fill"></i>
                                                                                    </button>
                                                                                </div>
                                                                        }


                                                                        <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Success" data-bs-original-title="Success">
                                                                            <button type="button" className="btn avatar-xxs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-success opacity-50">
                                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex flex-wrap justify-content-center gap-1 mt-2">
                                                                        <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="S" data-bs-original-title="S">
                                                                            <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-14">
                                                                                S
                                                                            </button>
                                                                        </div>
                                                                        {
                                                                            item.size
                                                                                ? ''
                                                                                :
                                                                                <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="M" data-bs-original-title={item.size}>
                                                                                    <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-14">
                                                                                        M
                                                                                    </button>
                                                                                </div>
                                                                        }

                                                                        <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="L" data-bs-original-title="L">
                                                                            <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-14">
                                                                                L
                                                                            </button>
                                                                        </div>
                                                                        <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="XL" data-bs-original-title="XL">
                                                                            <button type="button" className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-14">
                                                                                XL
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-3">
                                                            <Link to="/#">
                                                                <h6 className="text-capitalize fs-16 text-truncate">{item.info}</h6>
                                                            </Link>
                                                            <h6 className="fw-normal mb-3 fs-16">{item.price1} <small className="text-decoration-line-through fs-14 text-muted">{item.price2}</small></h6>
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

export default TopPicks