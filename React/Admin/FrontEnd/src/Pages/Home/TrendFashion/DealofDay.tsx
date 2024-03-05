import React from 'react'
import img4 from "assets/images/fashion/img-4.png"
import { Button, Col, Row } from 'react-bootstrap'
import Countdown from 'react-countdown'

interface DealDay {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
}

const DealofDay = () => {
    const renderer = ({ days, hours, minutes, seconds, completed }: DealDay) => {
        if (completed) {
            // Render a completed state
            return <span>You are good to go!</span>
        } else {
            return (
                <>
                   
                        <li>
                            <span className="fs-36 fw-medium" id="days">{days}</span> Days
                        </li>
                        <li>
                            <span className="fs-36 fw-medium" id="hours">{hours}</span> Hours
                        </li>
                        <li>
                            <span className="fs-36 fw-medium" id="minutes">{minutes}</span> Minutes
                        </li>
                        <li>
                            <span className="fs-36 fw-medium" id="seconds">{seconds}</span> Seconds
                        </li>
                    
                </>
            )
        }
    }

    return (
        <React.Fragment>
            <section className="section bg-light py-5">
                <div className="container-fluid container-custom">
                    <Row className="row align-items-center gy-3">
                        <Col lg={6} className="text-center">
                            <p className="fs-18 mb-4">Deal of the day</p>
                            <h1 className="display-6 text-capitalize mb-4">New Collection in this <span className="fw-medium">Winter Season</span> Sales</h1>
                            <p id="done"></p>
                            <ul className="countdown d-flex justify-content-center gap-3 flex-wrap gap-lg-5 list-unstyled text-center fs-17">
                                <Countdown date="2025/08/16" renderer={renderer} />       
                            </ul>
                            <div className="mt-4 pt-3">
                                <Button variant='info' type="button" className="rounded-0 w-lg btn-hover">Get 15% Off <i className="bi bi-arrow-right align-baseline ms-1"></i></Button>
                            </div>
                        </Col>
                        <Col lg={5} className="ms-auto">
                            <img src={img4} alt="" className="img-fluid" />
                        </Col>
                    </Row>
                </div>
            </section>
        </React.Fragment>
    )
}

export default DealofDay