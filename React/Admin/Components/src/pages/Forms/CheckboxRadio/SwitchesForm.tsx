import React from 'react';
import { Row, Col,  Card } from 'react-bootstrap';
import { Switches } from './CheckboxRadioCode';

const SwitchesForm = () => {
    return (
        <React.Fragment>
            <Row>
                <Col className="col-12">
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Switches</h4>
                        </Card.Header>

                        <Card.Body>
                            <Row>
                                <Col lg={4} md={6}>
                                    <div>
                                        <p className="text-muted fw-medium">Deafult Switchs</p>
                                        <p className="text-muted">Use <code>form-switch</code> class to form-check class to set a switch and add <code>checked</code> attribute to set a switch checked by default.</p>
                                        <div className="form-check form-switch mb-2">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch input</label>
                                        </div>

                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch input</label>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={4} md={6}>
                                    <div className="mt-4 mt-md-0">
                                        <p className="text-muted fw-medium">Disabled Switchs</p>
                                        <p className="text-muted">Use <code>disabled</code> attribute to set a radio button disabled and add <code>checked</code> attribute to set a switch checked by default.</p>
                                        <div className="form-check form-switch mb-2">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Switch input</label>
                                        </div>

                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled1" checked disabled />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled1">Disabled checked switch input</label>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6}>
                                    <div className="mt-4 mt-md-0">
                                        <p className="text-muted fw-medium">Switch Right</p>
                                        <p className="text-muted">Use <code>form-check-right</code> class to form-check class to set a switch button on the right side.</p>
                                        <div>
                                            <div className="form-check form-switch form-check-right mb-2">
                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckRightDisabled" defaultChecked />
                                                <label className="form-check-label" htmlFor="flexSwitchCheckRightDisabled">Switch Right input</label>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="form-check form-switch form-check-right">
                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled2" disabled />
                                                <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled2">Disabled checked switch input</label>
                                            </div>
                                        </div>

                                    </div>
                                </Col>

                                <Col lg={4} md={6}>
                                    <div className="mt-3">
                                        <p className="text-muted fw-medium">Switch sizes</p>
                                        <p className="text-muted">Use <code>form-switch-md</code> class to set a medium size switch button and <code>form-switch-lg</code> class to form-check class to set a large size switch button respectively. No such class is required for small size switch button.</p>

                                        <div className="form-check form-switch mb-3" dir="ltr">
                                                        <input type="checkbox" className="form-check-input" id="customSwitchsizesm" defaultChecked />
                                                        <label className="form-check-label" htmlFor="customSwitchsizesm">Small Size Switch</label>
                                                    </div>

                                                    <div className="form-check form-switch form-switch-md mb-3" dir="ltr">
                                                        <input type="checkbox" className="form-check-input" id="customSwitchsizemd" />
                                                        <label className="form-check-label" htmlFor="customSwitchsizemd">Medium Size Switch</label>
                                                    </div>

                                                    <div className="form-check form-switch form-switch-lg" dir="ltr">
                                                        <input type="checkbox" className="form-check-input" id="customSwitchsizelg" defaultChecked />
                                                        <label className="form-check-label" htmlFor="customSwitchsizelg">Large Size Switch</label>
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
                                <Switches />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SwitchesForm