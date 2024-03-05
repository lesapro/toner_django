import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { SwitchColor } from './CheckboxRadioCode';

const SwitchesColor = () => {
    return (
        <React.Fragment>
            <Row>
                <Col className="col-12">
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Switches Color</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>form-check-</code> class with below-mentioned color variation to set a color switch.</p>
                            <Row>
                                <Col md={6}>
                                    <div>
                                    <div className="form-check form-switch mb-3">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck1" defaultChecked />
                                                        <label className="form-check-label" htmlFor="SwitchCheck1">Switch Default</label>
                                                    </div>

                                                    <div className="form-check form-switch form-switch-secondary mb-3">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck2" defaultChecked />
                                                        <label className="form-check-label" htmlFor="SwitchCheck2">Switch Secondary</label>
                                                    </div>

                                                    <div className="form-check form-switch form-switch-success mb-3">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck3" defaultChecked />
                                                        <label className="form-check-label" htmlFor="SwitchCheck3">Switch Success</label>
                                                    </div>

                                                    <div className="form-check form-switch form-switch-warning mb-2 mb-md-0">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck4" defaultChecked />
                                                        <label className="form-check-label" htmlFor="SwitchCheck4">Switch Warning</label>
                                                    </div>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div>
                                    <div className="form-check form-switch form-switch-danger mb-3">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck5" defaultChecked />
                                                        <label className="form-check-label" htmlFor="SwitchCheck5">Switch Danger</label>
                                                    </div>

                                                    <div className="form-check form-switch form-switch-info mb-3">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck6" defaultChecked />
                                                        <label className="form-check-label" htmlFor="SwitchCheck6">Switch Info</label>
                                                    </div>

                                                    <div className="form-check form-switch form-switch-dark mb-3">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck7" defaultChecked />
                                                        <label className="form-check-label" htmlFor="SwitchCheck7">Switch Dark</label>
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
                                <SwitchColor />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SwitchesColor;