import React, { Component } from 'react';
import { withStyles, fade } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { inject, observer } from 'mobx-react';

const styles = (theme) => ({
  contentStyle: {
    width: '100%',
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
    '&:active': {
      backgroundColor: '#FFFFFF',
    },
    '&:focused': {
      backgroundColor: '#FFFFFF',
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    }
  },
  byteStyle: {
    color: '#FFFFFF'
  }
});

@inject('addStore')
@observer
class DescriptionCpt extends Component {

  state = {
    maxBytes: 200,
    bytes: 0,
    description: '',
  }

  byteCheck = (str) => {
    str = str || '';
    let codeByte = 0;

    for (let idx = 0; idx < str.length; idx++) {
      const oneChar = escape(str.charAt(idx));

      if (oneChar.length === 1) {
        codeByte++;
      } else if (oneChar.indexOf('%u') !== -1) {
        codeByte += 2;
      } else if (oneChar.indexOf('%') !== -1) {
        codeByte++;
      }
    }

    return codeByte;
  }

  handleInputChange = async (e) => {
    await this.setState({
      bytes: this.byteCheck(e.target.value),
      description: e.target.description
    });
    this.props.addStore.descriptionInput = this.state.description;
  }



  render() {
    const { classes } = this.props;
    return (
      <div>
        <TextField
          id="descriptionInput"
          InputProps={{ disableUnderline: true }}
          label="설명"
          multiline
          rows="6"
          onChange={this.handleInputChange}
          className={classes.contentStyle}
          margin="normal"
          variant="filled"
        />
        <div className={classes.byteStyle}>{this.state.bytes}/{this.state.maxBytes} bytes</div>
      </div>
    );
  }
}

export default withStyles(styles)(DescriptionCpt);