import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Countdown from "react-countdown";

import cta2 from "../../../assets/images/fashion/cta-2.jpeg"

interface ShoppingProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
}

const DealOfTheDay = () => {
    const renderers = ({ days, hours, minutes, seconds, completed }: ShoppingProps) => {
        if (completed) {
            return <span className='countdown-endtxt'>The countdown has ended!</span>
        } else {
            return (
                <>
                    <li>
                        <span className="fs-36 fw-medium">{days}</span> Days
                    </li>
                    <li>
                        <span className="fs-36 fw-medium">{hours}</span> Hours
                    </li>
                    <li>
                        <span className="fs-36 fw-medium">{minutes}</span> Minutes
                    </li>
                    <li>
                        <span className="fs-36 fw-medium">{seconds}</span> Seconds
                    </li>
                </>
            )
        }
    }
  return (
    <React.Fragment>
      <section className="cta-section bg-light" style={{ backgroundImage:`url(${cta2})` }}>
        <div className="container-fluid container-custom">
            <Row className="align-items-center">
                <Col lg={6} className="ms-auto text-center">
                    <p className="fs-19 mb-4">Deal of the day</p>
                    <h1 className="display-6 text-capitalize mb-4">New Collection in this <span className="fw-medium">Winter Season</span> Sales</h1>
                    <p id="done"></p>
                    <ul className="countdown d-flex justify-content-center gap-2 flex-wrap gap-lg-5 list-unstyled text-center fs-17">
                            <div className="countdownlist">
                                <Countdown date="Jan 30, 2025" className="countdownlist" renderer={renderers} />
                            </div>
                    </ul>
                    <div className="mt-4 pt-3">
                        <button type="button" className="btn btn-light rounded-0 btn-hover">Get 15% Off <i className="bi bi-arrow-right align-baseline ms-1"></i></button>
                    </div>
                </Col>
            </Row>
        </div>
    </section>
    </React.Fragment>
  )
}

export default DealOfTheDay
