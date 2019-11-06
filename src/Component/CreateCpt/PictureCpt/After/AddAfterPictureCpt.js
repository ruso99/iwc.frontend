import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { inject } from 'mobx-react';

const styles = (theme) => ({
  root: {
    height: '100%',
    width: '100%',
    paddingTop: '50%',
  },
});

inject('pictureStore')
class AddAfterPictureCpt extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        
      </div>
    );
  }
}

export default withStyles(styles)(AddAfterPictureCpt);