import { servicedata, shoprry } from 'Common/data/AboutusData'
import React from 'react'
import { Button, Col, Container, OverlayTrigger, Popover, Row } from 'react-bootstrap'
const Shoppry = () => {
  return (
    <React.Fragment>
        <section className="section">
            <Container fluid className=" container-custom">
                <Row className=" justify-content-center">
                    <Col lg={7}>
                        <div className="section-content text-center mb-5 pb-3">
                            <h2 className="title fw-normal mb-3"><span>Instagram Shop by <span className="fw-semibold">@shoppry</span></span></h2>
                            <p className="text-muted fs-16 mb-0">Shop your favorite styles from Instagram.</p>
                        </div>
                    </Col>
                </Row>
                <Row className=" g-3">
                    {(shoprry || [])?.map((item:any, key:any)=>{
                        const popover = (
                            <Popover id="popover-basic">
                                <Popover.Header as="h3">{item.title}</Popover.Header>
                                <Popover.Body>
                                    {item.content}
                                </Popover.Body>
                            </Popover>
                        );
                        return (
                    <Col xxl={2} lg={3} md={6} className='d-none d-xxl-block' key={key}>
                        <div className="position-relative">
                        <OverlayTrigger trigger={['hover', 'focus']} placement={item.position} overlay={popover}>
                                    <Button href="/#" variant="light" size="sm" className="btn-icon btn-sm rounded-circle position-absolute bottom-0 end-0 m-3">
                                    <i className="ph-plus-bold"></i>
                                    </Button>
                                </OverlayTrigger>
                            <img src={item.img} alt="" className="img-fluid rounded"/>
                        </div>
                    </Col>
                        )})}

                    
                </Row>
            </Container>
        </section>




        <section className="position-relative border-top py-5">
            <Container>
                <Row className=" gy-4 gy-lg-0">
                    {(servicedata || []).map((ele:any, keys:any)=>(
                    <Col lg={3} sm={6} key={keys}>
                        <div className="d-flex align-items-center gap-3">
                            <div className="flex-shrink-0">
                                <img src={ele.img} alt="" className="avatar-sm"/>
                            </div>
                            <div className="flex-grow-1">
                                <h5 className="fs-15">{ele.title}</h5>
                                <p className="text-muted mb-0">{ele.caption}</p>
                            </div>
                        </div>
                    </Col>
                    ))}
                    
                </Row>
            </Container>
        </section>

    </React.Fragment>
  )
}
export default Shoppry