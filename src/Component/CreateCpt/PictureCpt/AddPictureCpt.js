import React, { Component } from 'react';
import AddBeforePictureCpt from './Before/AddBeforePictureCpt';
import AddAfterPictureCpt from './After/AddAfterPictureCpt';
import { inject } from 'mobx-react';

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
            <AddBeforePictureCpt handleStateChange = {this.handleStateChange}/> :
            <AddAfterPictureCpt />
        }
      </div>
    );
  }
}

export default AddPictureCpt;