import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { inject, observer } from 'mobx-react';

const styles = (theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
});

@inject('addStore')
@observer
class AddBeforePictureCpt extends Component {

  handleFileInput = (e) => {
    this.props.addStore.illustFile = e.target.files[0];
    this.props.handleStateChange();
  };

  render() {
    const { classes } = this.props;

    return (
      <div className = {classes.root}>
        <Typography
          variant="body2"
          gutterBottom
        >
          일러스트를 등록해주세요
        </Typography>
        <div>
          <Button
            variant="outlined"
            component="label"
            color="primary"
          >
            <Typography
              display="block"
              variant="overline"
            >
              Upload
            </Typography>
            <input
              type="file"
              name="imageFile"
              style={{display: 'none'}}
              onChange={e => this.handleFileInput(e)}/>
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AddBeforePictureCpt);