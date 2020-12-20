import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class NewModal extends Component {
 
    render() {
        return (
            <Modal show={this.props.showPopup} >
            <Modal.Header >
              <Modal.Title>{this.props.incomeType ? "Add Spended Money" : "Add Received Money"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form >
                <label>
                  {this.props.incomeType ? "Spended Money" : "Add Money"}    : <input name="addedMoney" type="number" onChange={this.props.handleInput} />
                </label>
                <label>
                  Add Description: <input name="description" type="text" onChange={this.props.handleInput} />
                </label>
    
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.props.updatestate(false)} >
                Close
            </Button>
              <Button variant="primary" onClick={this.props.handleFormSubmit}>
                Save Changes
            </Button>
            </Modal.Footer>
          </Modal>
       
      
        )
    }
}

NewModal.propTypes = {

}

export default NewModal