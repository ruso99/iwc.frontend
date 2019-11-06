import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { inject } from 'mobx-react';

const styles = (theme) => ({
  root: {
    height: '100%',
    width: '100%',
    paddingTop: '50%',
  },
});

inject('pictureStore')
class AddBeforePictureCpt extends Component {

  state = {
    selectedFile: null,
  }

  handleFileInput = async (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    })
    this.props.handleStateChange();
  }

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
              등록하기
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