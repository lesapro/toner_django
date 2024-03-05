import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { InlineCheckboxRadio } from './CheckboxRadioCode';

const Inlinecheckradio = () => {
    return (
        <React.Fragment>
            <Row>
                <Col className="col-12">
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Inline Checkbox & Radios</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>form-check-inline</code> class to form-check class to set horizontally align checkboxes, radios, or switches.</p>
                            <Row>
                                <Col lg={4}>
                                    <div className="mt-4 mt-lg-0">
                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                                                        <label className="form-check-label" htmlFor="inlineCheckbox6">1</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option2" />
                                                        <label className="form-check-label" htmlFor="inlineCheckbox7">2</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option3" disabled />
                                                        <label className="form-check-label" htmlFor="inlineCheckbox8">3 (disabled)</label>
                                                    </div>
                                    </div>
                                </Col>

                                <Col lg={4}>
                                    <div className="mt-4 mt-lg-0">
                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1" />
                                                        <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="option2" />
                                                        <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="option3" disabled />
                                                        <label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
                                                    </div>
                                    </div>
                                </Col>

                                <Col lg={4}>
                                    <div className="mt-4 mt-lg-0">
                                    <div className="form-check form-switch form-check-inline" dir="ltr">
                                                        <input type="checkbox" className="form-check-input" id="inlineswitch5" />
                                                        <label className="form-check-label" htmlFor="inlineswitch5">1</label>
                                                    </div>
                                                    <div className="form-check form-switch form-check-inline" dir="ltr">
                                                        <input type="checkbox" className="form-check-input" id="inlineswitch6" />
                                                        <label className="form-check-label" htmlFor="inlineswitch6">2</label>
                                                    </div>
                                                    <div className="form-check form-switch form-check-inline" dir="ltr">
                                                        <input type="checkbox" className="form-check-input" id="inlineswitchdisabled2" disabled />
                                                        <label className="form-check-label" htmlFor="inlineswitchdisabled2">2</label>
                                                    </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <InlineCheckboxRadio />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Inlinecheckradio;