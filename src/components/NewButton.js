import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class NewButton extends Component {
    render() {
        return (
          
              <Button variant={this.props.variant} >{this.props.buttonname}</Button>
         
        )
    }
}
NewButton.propTypes = {

}

export default NewButton
