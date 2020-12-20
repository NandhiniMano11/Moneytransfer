import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap';

class TransectionList extends Component {
    render() {
        return (
          
            <ListGroup >
              {this.props.expenditure.length === 0 ? <p>No Spended money</p> :
                this.props.expenditure.map((spend, index) => {
                  return <ListGroup.Item style={{
                    "display": "flex",
                    "justifyContent": "space-between"
                  }} key={index} variant={spend.spended ? "danger" : "success"}>
                    <div>{spend.date}</div>
                    <div>{spend.description}</div>
                    <div>{"Rs."}{spend.moneyValue}</div>
                  </ListGroup.Item>
                })}
            </ListGroup>
        )
    }
}

TransectionList.propTypes = {

}

export default TransectionList