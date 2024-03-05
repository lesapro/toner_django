import React from 'react';
import { Row, Col,  Card } from 'react-bootstrap';
import { Radio } from './CheckboxRadioCode';

const FormRadios = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Radios</h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col lg={4} md={6}>
                                    <div>
                                        <p className="text-muted fw-medium">Default Radios</p>
                                        <p className="text-muted">Use <code>type="radio"</code> attribute to set a radio button and add <code>checked</code> attribute to set a radio checked by default.</p>
                                        <div className="form-check mb-2">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                            Default radio
                                                        </label>
                                        </div>
                                        <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                            Default checked radio
                                                        </label>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6}>
                                    <div className="mt-4 mt-md-0">
                                        <p className="text-muted fw-medium">Disabled Radios</p>
                                        <p className="text-muted">Use <code>disabled</code> attribute to set a radio button disabled and add <code>checked</code> attribute to set a radio checked by default.</p>
                                        <div className="form-check mb-2">
                                        <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled/>
                                                        <label className="form-check-label" htmlFor="flexRadioDisabled">
                                                            Disabled radio
                                                        </label>
                                        </div>
                                        <div>
                                            <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled/>
                                                            <label className="form-check-label" htmlFor="flexRadioCheckedDisabled">
                                                                Disabled checked radio
                                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6}>
                                    <div className="mt-4 mt-md-0">
                                        <p className="text-muted fw-medium">Radio Right</p>
                                        <p className="text-muted">Use <code>form-check-right</code> class to form-check class to set a radio button on the right side.</p>
                                        <div className="form-check form-check-right mb-2">
                                        <input className="form-check-input" type="radio" name="formradioRight" id="formradioRight1"/>
                                                        <label className="form-check-label" htmlFor="formradioRight1">
                                                            Form Radio Right
                                                        </label>
                                        </div>
                                        <div>
                                            <div className="form-check form-check-right">
                                            <input className="form-check-input" type="radio" value="" name="formradioRight" id="flexCheckCheckedDisabled2" checked disabled/>
                                                            <label className="form-check-label" htmlFor="flexCheckCheckedDisabled2">
                                                                Disabled checked radio
                                                            </label>
                                            </div>
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
                                <Radio />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default FormRadios;