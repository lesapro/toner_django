import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { CustomCheckbox } from './CheckboxRadioCode';

const CustomCheckboxes = () => {
    return (
        <React.Fragment>
            <Row>
                <Col className="col-12">
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Custom Checkboxes</h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={6}>
                                    <div>
                                        <p className="text-muted">Use <code>form-check-</code> class with below-mentioned color variation to set a color checkbox.</p>

                                        <div>
                                        <div className="form-check mb-3">
                                                            <input className="form-check-input" type="checkbox" id="formCheck6" defaultChecked />
                                                            <label className="form-check-label" htmlFor="formCheck6">
                                                                Checkbox Primary
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-secondary mb-3">
                                                            <input className="form-check-input" type="checkbox" id="formCheck7" defaultChecked />
                                                            <label className="form-check-label" htmlFor="formCheck7">
                                                                Checkbox Secondary
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-success mb-3">
                                                            <input className="form-check-input" type="checkbox" id="formCheck8" defaultChecked />
                                                            <label className="form-check-label" htmlFor="formCheck8">
                                                                Checkbox Success
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-warning mb-3">
                                                            <input className="form-check-input" type="checkbox" id="formCheck9" defaultChecked />
                                                            <label className="form-check-label" htmlFor="formCheck9">
                                                                Checkbox Warning
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-danger mb-3">
                                                            <input className="form-check-input" type="checkbox" id="formCheck10" defaultChecked />
                                                            <label className="form-check-label" htmlFor="formCheck10">
                                                                Checkbox Danger
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-info mb-3">
                                                            <input className="form-check-input" type="checkbox" id="formCheck11" defaultChecked />
                                                            <label className="form-check-label" htmlFor="formCheck11">
                                                                Checkbox Info
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-dark">
                                                            <input className="form-check-input" type="checkbox" id="formCheck12" defaultChecked />
                                                            <label className="form-check-label" htmlFor="formCheck12">
                                                                Checkbox Dark
                                                            </label>
                                                        </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="mt-4 mt-md-0">
                                        <p className="text-muted">Use <code>form-check-outline</code> class and <code>form-check-</code> class with below-mentioned color variation to set a color checkbox with outline.</p>

                                        <div>
                                        <div className="form-check form-check-outline form-check-primary mb-3">
                                                            <input className="form-check-input" type="checkbox" id="formCheck13" defaultChecked />
                                                            <label className="form-check-label" htmlFor="formCheck13">
                                                                Checkbox Outline Primary
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-outline form-check-secondary mb-3">
                                                            <input className="form-check-input" type="checkbox" id="formCheck14" defaultChecked />
                                                            <label className="form-check-label" htmlFor="formCheck14">
                                                                Checkbox Outline Secondary
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-outline form-check-success mb-3">
                                                            <input className="form-check-input" type="checkbox" id="formCheck15" defaultChecked />
                                                            <label className="form-check-label" htmlFor="formCheck15">
                                                                Checkbox Outline Success
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-outline form-check-warning mb-3">
                                                            <input className="form-check-input" type="checkbox" id="formCheck16" defaultChecked />
                                                            <label className="form-check-label" htmlFor="formCheck16">
                                                                Checkbox Outline Warning
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-outline form-check-danger mb-3">
                                                            <input className="form-check-input" type="checkbox" id="formCheck17" defaultChecked />
                                                            <label className="form-check-label" htmlFor="formCheck17">
                                                                Checkbox Outline Danger
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-outline form-check-info mb-3">
                                                            <input className="form-check-input" type="checkbox" id="formCheck18" defaultChecked />
                                                            <label className="form-check-label" htmlFor="formCheck18">
                                                                Checkbox Outline Info
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-outline form-check-dark">
                                                            <input className="form-check-input" type="checkbox" id="formCheck19" defaultChecked />
                                                            <label className="form-check-label" htmlFor="formCheck19">
                                                                Checkbox Outline Dark
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
                                <CustomCheckbox />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default CustomCheckboxes;