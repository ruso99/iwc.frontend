import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import VoteCpt from '../Component/VoteCpt/VoteCpt';

const styles = (theme) => ({
  root: {
    backgroundColor: '#282c34',
  },
  bottomNaviStyle: {
    bottom: 0,
    position: 'absolute',
    width:'100%',
  }
});

class Layout extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Box className = {classes.root}>
        <VoteCpt />
        <BottomNavigation
          className = {classes.bottomNaviStyle}
          showLabels
        >
          <BottomNavigationAction label="정보" />
          <BottomNavigationAction label="투표" />
          <BottomNavigationAction label="등록" />
        </BottomNavigation>
      </Box>
    );
  }
}

export default withStyles(styles)(Layout);