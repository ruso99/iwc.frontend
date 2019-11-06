import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import VoteCpt from '../Component/VoteCpt/VoteCpt';
import CreateCpt from '../Component/CreateCpt/CreateCpt';

const styles = (theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#282c34',
  },
  bottomNaviStyle: {
    width:'100%',
  }
});

class Layout extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Box className = {classes.root}>
        <BottomNavigation
          className = {classes.bottomNaviStyle}
          showLabels
        >
          <BottomNavigationAction label="정보" />
          <BottomNavigationAction label="투표" />
          <BottomNavigationAction label="등록" />
        </BottomNavigation>
        <CreateCpt />
      </Box>
    );
  }
}

export default withStyles(styles)(Layout);