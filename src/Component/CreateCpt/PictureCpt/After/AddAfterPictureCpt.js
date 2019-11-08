import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { inject, observer } from 'mobx-react';
import { autorun } from 'mobx';

const styles = (theme) => ({
  root: {
    height: '100%',
    width: '100%',
    paddingTop: '50%',
  },
  imgStyle: {
    height: '60vw',
    width: 'auto',
  }
});

@inject('addStore')
@observer
class AddAfterPictureCpt extends Component {

  previewImage = (img) => {
    return URL.createObjectURL(img);
  }

  render() {
    const { classes, addStore } = this.props;

    return (
      <div>
        <img
          className={classes.imgStyle}
          src={this.previewImage(addStore.illustFile)}
        />
      </div>
    );
  }
}

export default withStyles(styles)(AddAfterPictureCpt);