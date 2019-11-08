import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    position: 'absolute',
    backgroundColor: '#8C4AF1',
    height: 'calc( 100% - 56px )',
  },
  spaceTop: {
    height: 'calc( 100% - 50px - 40vh - 20vh - 56px )',
  },
  gridSpacing: {
    margin: '8px',
    textAlign: '-webkit-center',
  },
  divStyle: {
    width: '100%',
    display: 'flex',
  },
  addMobStyle: {
    width: '320px',
    height: '50px',
  },
  displayStyle: {
    height: '40vh'
  },
  pictureStyle: {
    height: '20vh'
  },
  footerStyle: {
    height: '56px'
  }
});

class VoteCpt extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Box className = {classes.root}>
        <div className = {classes.spaceTop}/>
        <Grid container spacing={0}>
          <Grid
            item xs={12}
            className={classes.gridSpacing}
          >
            <Paper className={classes.displayStyle}>전광판</Paper>
          </Grid>
          <Grid
            item xs={12}
            className={classes.gridSpacing}
          >
            <Paper className={classes.addMobStyle}>광고</Paper>
          </Grid>
          <div className={classes.divStyle}>
            <Grid
              item xs={6}
              className={classes.gridSpacing}
            >
              <Paper className={classes.pictureStyle}>사진</Paper>
            </Grid>
            <Grid
              item xs={6}
              className={classes.gridSpacing}
            >
              <Paper className={classes.pictureStyle}>사진</Paper>
            </Grid>
          </div>
        </Grid>
      </Box>
    );
  }
}

export default withStyles(styles)(VoteCpt);
