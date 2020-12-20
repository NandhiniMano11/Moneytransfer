import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class NewButton extends Component {
    render() {
        return (

            <Row style={{ 'marginTop': "20px" }}>
                <Col>
                    <Button variant="success" onClick={() => this.props.popShow("Add")}>Add Money (+)</Button>
                </Col>
                <Col>
                    <Button variant="danger" onClick={() => this.props.popShow()}>Spended Money (-)</Button>
                </Col>
            </Row>
        )
    }
}
NewButton.propTypes = {

}

export default NewButton
