import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper } from '@material-ui/core';
import AddPictureCpt from './PictureCpt/Before/AddBeforePictureCpt';

const styles = (theme) => ({
  root: {
    backgroundColor: '#282c34',
    height: '100%',
    width: '100%',
  },
  spaceTop: {
    height: '10%',
  },
  gridSpacing: {
    margin: '8px',
    textAlign: '-webkit-center',
  },
  imgStyle: {
    width: '95vw',
    height: '60vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    width: '95vw',
    height: '60vw',
  },
  addMobStyle: {
    width: '320px',
    height: '50px',
  },
  displayStyle: {
    height: '100px'
  },
  footerStyle: {
    height: '56px'
  }
});

class CreateCpt extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Box className = {classes.root}>
        <Grid container spacing={0}>
          <Grid
            item xs={12}
            className={classes.gridSpacing}
          >
            <Paper className = {classes.imgStyle}>
              <AddPictureCpt />
            </Paper>
          </Grid>
          <Grid
            item xs={12}
            className={classes.gridSpacing}
          >
            <Paper className={classes.addMobStyle}>광고</Paper>
          </Grid>
          <Grid
            item xs={12}
            className={classes.gridSpacing}
          >
            <Paper className = {classes.contentStyle}>설명입력</Paper>
          </Grid>
          <Grid
            item xs={12}
            className={classes.gridSpacing}
          >
            <Paper className={classes.displayStyle}>등록하기</Paper>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default withStyles(styles)(CreateCpt);