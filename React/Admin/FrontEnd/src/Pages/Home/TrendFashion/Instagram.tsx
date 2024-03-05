import React from 'react'
import { Button, Col, Image, OverlayTrigger, Popover, Row } from 'react-bootstrap'

import { instadata } from 'Common/data/topPicksData'

const Instagram = () => {

    return (
        <React.Fragment>
            <section className="section pt-0">
                <div className="container-fluid container-custom">
                    <Row className="justify-content-center">
                        <Col lg={7}>
                            <div className="section-content text-center mb-5">
                                <h2 className="fw-normal mb-3"><span>Instagram Shop by </span> <span className="fw-semibold"> @toner</span></h2>
                                <p className="text-muted fs-16 mb-0">Shop your favorites styles from Instagram.</p>
                            </div>
                        </Col>
                    </Row>
                    
                    <Row className="g-3" >
                        {
                        (instadata || [])?.map((item:any, key:any)=> {
                            const popover = (
                                <Popover id="popover-basic">
                                    <Popover.Header as="h3">{item.header}</Popover.Header>
                                    <Popover.Body>
                                        {item.body}
                                    </Popover.Body>
                                </Popover>
                            );
                        
                         return (
                        <div className="col-xxl-2 col-lg-3 col-md-6 d-none d-xxl-block" key={key}>
                            <div className="position-relative">
                                <OverlayTrigger trigger={['hover', 'focus']} placement={item.position} overlay={popover}>
                                    <Button href="#" variant="light" size="sm" className="btn-icon btn-sm rounded-circle position-absolute bottom-0 end-0 m-3">
                                    <i className="ph-plus-bold"></i>
                                    </Button>
                                </OverlayTrigger>
                                <Image src={item.image} alt="" className="img-fluid rounded" />
                            </div>
                        </div>
                        )})
                    }
                    </Row>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Instagram