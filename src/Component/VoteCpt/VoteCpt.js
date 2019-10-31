import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    height:'100vh'
  },
  gridSpacing: {
    margin: '8px'
  },
  divStyle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  }
});

class VoteCpt extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Box className = {classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} className={classes.gridSpacing}>
            <Paper>전광판</Paper>
          </Grid>
          <Grid item xs={12} className={classes.gridSpacing}>
            <Paper>광고</Paper>
          </Grid>
          <div className={classes.divStyle}>
            <Grid item xs={6} className={classes.gridSpacing}>
              <Paper>사진</Paper>
            </Grid>
            <Grid item xs={6} className={classes.gridSpacing}>
              <Paper>사진</Paper>
            </Grid>
          </div>
        </Grid>
      </Box>
    );
  }
}

export default withStyles(styles)(VoteCpt);
