import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Row, Col, Card } from 'react-bootstrap';
import { Checkbox } from './CheckboxRadioCode';

const Checkboxform = () => {
    document.title = " Checkboxs & Radios | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Forms" breadcrumbItem="Checkboxs & Radios" />
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Checkbox</h4>
                            </Card.Header>

                            <Card.Body>
                                <Row>
                                    <Col lg={4} md={6}>
                                        <div>
                                            <p className="text-muted fw-medium">Default Checkbox</p>
                                            <p className="text-muted">Use <code>type="checkbox"</code> attribute to set a checkbox and add <code>checked</code>attribute to set a checkbox checked by default.</p>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" id="formCheck1" />
                                                <label className="form-check-label" htmlFor="formCheck1">
                                                    Default checkbox
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="formCheck2" defaultChecked />
                                                <label className="form-check-label" htmlFor="formCheck2">
                                                    Checked checkbox
                                                </label>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={4} md={6}>
                                        <div className="mt-4 mt-md-0">
                                            <p className="text-muted fw-medium">Disabled Checkbox</p>
                                            <p className="text-muted">Use <code>disabled</code> attribute to set a checkbox disabled and add <code>checked</code> attribute to set a checkbox checked by default.</p>
                                            <div>
                                                <div className="form-check form-check-right mb-2">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled />
                                                    <label className="form-check-label" htmlFor="flexCheckDisabled">
                                                        Disabled checkbox
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="form-check form-check-right">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                                    <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
                                                        Disabled checked checkbox
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={4} md={6}>
                                        <div className="mt-4 mt-md-0">
                                            <p className="text-muted fw-medium">Checkbox Right</p>
                                            <p className="text-muted">Use <code>form-check-right</code> class to form-check class to set a checkbox on the right side.</p>
                                            <div className="form-check form-check-right mb-2">
                                                <input className="form-check-input" type="checkbox" name="formCheckboxRight" id="formCheckboxRight1" defaultChecked />
                                                <label className="form-check-label" htmlFor="formCheckboxRight1">
                                                    Form Radio Right
                                                </label>
                                            </div>
                                            <div>
                                                <div className="form-check form-check-right">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedRightDisabled" checked disabled />
                                                    <label className="form-check-label" htmlFor="flexCheckCheckedRightDisabled">
                                                        Disabled checked checkbox
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={6}>
                                        <div className="mt-3">
                                            <p className="text-muted fw-medium">Indeterminate</p>
                                            <div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="defaultIndeterminateCheck" />
                                                    <label className="form-check-label" htmlFor="defaultIndeterminateCheck">
                                                        Indeterminate checkbox
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
                                    <Checkbox />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default Checkboxform;