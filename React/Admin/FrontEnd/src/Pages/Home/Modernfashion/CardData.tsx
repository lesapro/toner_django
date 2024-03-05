import React from 'react'
import { Col, Row ,Card} from 'react-bootstrap';
import {cardData} from "Common/data/ModernFashion";
const CardData = () => {
  return (
    <React.Fragment>
      <section className="py-5 border-bottom">
        <div className="container-fluid container-custom">
            <Row className="g-3">
            {(cardData || [])?.map((item: any, key:any) => (                
                <Col lg={3} key={key}>
                    <Card className={`bg-${item.bgColor}-subtle border-0 mb-0`}>                    
                        <Card.Body className="d-flex align-items-center gap-3">
                            <div className="avatar-sm flex-shrink-0">
                                <div className={`avatar-title bg-${item.bgColor} bg-opacity-10 text-${item.bgColor} rounded fs-22`}>
                                    <i className={item.icon}></i>
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <h6 className="fs-16">{item.feature}</h6>
                                <p className="text-muted mb-0">{item.description}</p>
                            </div>
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

export default CardData
