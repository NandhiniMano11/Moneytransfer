import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default class AccountDetails extends Component {
    render() {
        return (
            <Row>
                <Col style={{ "backgroundColor": "#c3c3c3", "height": "100px" }}>
                    <div >
                        <Col style={{ "textAlign": "start", "marginTop": "35px" }}>
                            <label><b>Balance: </b> Rs. {this.props.currentBalance}</label>
                            <div>
                                <Row>
                                    <Col>
                                        <label>Income: {this.props.income}</label>
                                    </Col>
                                    <Col>
                                        <label>Spended: {this.props.spendedMoney}</label>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </div>
                </Col>
            </Row>


        )
    }
}

