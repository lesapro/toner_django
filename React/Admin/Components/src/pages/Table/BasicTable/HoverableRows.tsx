import React from 'react';
import { Card, Col, Row, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HoverableRows } from './BasicTableCode';

const HoverableRow = () => {
    
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Hoverable Rows</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>table-hover</code> class to enable a hover state on table rows within a &lt;tbody&gt;.</p>
                            <Row>
                                <Col xl={6}>
                                    <div className="table-responsive">
                                        <Table className="table-hover align-middle table-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col" style={{ width: "25px" }}>
                                                        <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="activetableCheck01"  defaultChecked />
                                                        </div>
                                                    </th>
                                                    <th scope="col">Order ID</th>
                                                    <th scope="col">Shop</th>
                                                    <th scope="col">Customer</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="activetableCheck02"  defaultChecked={true} />
                                                        </div>
                                                    </th>
                                                    <td>#541254265</td>
                                                    <td>Amezon</td>
                                                    <td>Cleo Carson</td>
                                                    <td>$4,521</td>
                                                    <td><Link to="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="activetableCheck03"  defaultChecked={true} />
                                                        </div>
                                                    </th>
                                                    <td>#744145235</td>
                                                    <td>Shoppers</td>
                                                    <td>Juston Eichmann</td>
                                                    <td>$7,546</td>
                                                    <td><Link to="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="activetableCheck04"  defaultChecked={true} />
                                                        </div>
                                                    </th>
                                                    <td>#9855126598</td>
                                                    <td>Flipkart</td>
                                                    <td>Bettie Johson</td>
                                                    <td>$1,350</td>
                                                    <td><Link to="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="activetableCheck05"  defaultChecked={true} />
                                                        </div>
                                                    </th>
                                                    <td>#847512653</td>
                                                    <td>Shoppers</td>
                                                    <td>Maritza Blanda</td>
                                                    <td>$4,521</td>
                                                    <td><Link to="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>

                                <Col xl={6}>
                                    <div className="table-responsive mt-4 mt-xl-0">
                                    <table className="table table-hover table-striped align-middle table-nowrap mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Invoice</th>
                                                                <th scope="col">Amount</th>
                                                                <th scope="col">Date</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="fw-medium">01</td>
                                                                <td>Basic Plan</td>
                                                                <td>$860</td>
                                                                <td>Nov 22, 2021</td>
                                                                <td><i className="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                                                                <td>
                                                                    <div className="form-check form-switch">
                                                                        <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck1" defaultChecked />
                                                                        <label className="form-check-label ms-2" htmlFor="SwitchCheck1">Yes/No</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-medium">02</td>
                                                                <td>Premium Plan</td>
                                                                <td>$1200</td>
                                                                <td>Nov 10, 2021</td>
                                                                <td><i className="ri-close-circle-line align-middle text-danger"></i> Unsubscribed</td>
                                                                <td>
                                                                    <div className="form-check form-switch">
                                                                        <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck2" />
                                                                        <label className="form-check-label ms-2" htmlFor="SwitchCheck2">Yes/No</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-medium">03</td>
                                                                <td>Basic Plan</td>
                                                                <td>$860</td>
                                                                <td>Nov 19, 2021</td>
                                                                <td><i className="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                                                                <td>
                                                                    <div className="form-check form-switch">
                                                                        <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck3" />
                                                                        <label className="form-check-label ms-2" htmlFor="SwitchCheck3">Yes/No</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-medium">04</td>
                                                                <td>Corporate Plan</td>
                                                                <td>$1599</td>
                                                                <td>Nov 22, 2021</td>
                                                                <td><i className="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                                                                <td>
                                                                    <div className="form-check form-switch">
                                                                        <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck4" defaultChecked />
                                                                        <label className="form-check-label ms-2" htmlFor="SwitchCheck4">Yes/No</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <HoverableRows />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default HoverableRow