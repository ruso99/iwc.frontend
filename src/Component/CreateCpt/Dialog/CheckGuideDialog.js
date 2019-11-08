import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Slide, Dialog, AppBar, Toolbar, IconButton, Typography, Button, Box } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#8C4AF1',
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  contentStyle: {
    textAlign: 'center',
    height: '100%',
    justifyContent: 'center'
  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class CheckGuideDialog extends Component {
  render() {

    const { classes, open, onClose } = this.props;
    

    return (
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
              <CloseIcon/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              주의사항
            </Typography>
            <Button autoFocus color="inherit" onClick={onClose}>
              등록
            </Button>
          </Toolbar>
        </AppBar>
        <Box className={classes.contentStyle}>
          <Typography variant="subtitle1">모두에게 불쾌하지 않은 일러스트 문화를 위해 </Typography>
          <Typography variant="subtitle1">등록하는 순간 심사를 거치게 됩니다</Typography><br/>
          <Typography variant="h6">심사기준은 3가지 조항만 피하면 통과됩니다.</Typography>
          <br/>
          <br/>
          <Typography variant="caption">1. 누군가를 조롱하는 일러스트</Typography><br/>
          <Typography variant="caption">2. 특정 신체부위가 그대로 노출되는 일러스트</Typography><br/>
          <Typography variant="caption">3. 불법 성매매 도박사이트를 홍보하는 일러스트</Typography>
          <br/>
          <br/>
          <Typography variant="caption">* 그림실력은 심사기준에 전혀 상관없으니 부담없이 등록해주세요!!*</Typography>
        </Box>
      </Dialog>
    );
  }
}

export default withStyles(styles)(CheckGuideDialog);