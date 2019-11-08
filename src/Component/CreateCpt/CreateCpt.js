import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper, Button } from '@material-ui/core';
import AddPictureCpt from './PictureCpt/AddPictureCpt';
import DescriptionCpt from './DescriptionCpt/DescriptionCpt';
import CheckGuideDialog from './Dialog/CheckGuideDialog';

const styles = (theme) => ({
  root: {
    backgroundColor: '#8C4AF1',
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
  addMobStyle: {
    width: '320px',
    height: '50px',
  },
  buttonStyle: {
    width: '100%',
    height: '50px',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#EAEAEA',
      borderColor: '#005cbf',
    },
  },
  footerStyle: {
    height: '56px'
  }
});

class CreateCpt extends Component {

  state = {
    checkDialogState: false,
  }

  openDialog = () => {
    this.setState({
      checkDialogState: true,
    });
  }

  closeDialog = () => {
    this.setState({
      checkDialogState: false,
    });
  }

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
            <DescriptionCpt />
          </Grid>
          <Grid
            item xs={12}
            className={classes.gridSpacing}
          >
            <Button
              variant="contained"
              color="inherit"
              onClick={this.openDialog}
              className={classes.buttonStyle}
            >
              등록하기
            </Button>
            <CheckGuideDialog 
              open={this.state.checkDialogState}
              onClose={this.closeDialog}
            />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default withStyles(styles)(CreateCpt);