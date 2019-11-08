import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AddBeforePictureCpt from './Before/AddBeforePictureCpt';
import AddAfterPictureCpt from './After/AddAfterPictureCpt';

class AddPictureCpt extends Component {
  state = {
    inputState: false,
  }

  handleStateChange = () => {
    this.setState({
      inputState: !this.state.inputState,
    });
  };

  render() {
    return (
      <div>
        {
          this.state.inputState ?
            <AddAfterPictureCpt /> :
            <AddBeforePictureCpt handleStateChange = {this.handleStateChange} /> 
        }
      </div>
    );
  }
}

export default AddPictureCpt;