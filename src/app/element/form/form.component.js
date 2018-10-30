import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import TextField from "@material-ui/core/TextField/TextField";


const renderTextField = ({
                             input,
                             label,
                             meta: { touched, error },
                             ...custom
                         }) => (
    <TextField
        {...input}
        {...custom}
    />
);

class FormComponent extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
  };

  render() {
    const { classes } = this.props;

    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className={classes.formEelement}>
          <Field name="atomicWeight" component={renderTextField} type="text" placeholder="Atomic Weight" />
        </div>
        <div className={classes.formEelement}>
          <Field name="atomicNumber" component={renderTextField} type="text" placeholder="Atomic Number" />
        </div>
        <div className={classes.formEelement}>
          <Field name="group" component={renderTextField} type="text" placeholder="Group" />
        </div>
        <div className={classes.formEelement}>
          <Field name="period" component={renderTextField} type="text" placeholder="Period" />
        </div>
        <div className={classes.formEelement}>
          <Field name="finder" component={renderTextField} type="text" placeholder="Finder" />
        </div>
        <div>
          <Button variant="contained" color="primary" className={classes.button} type="submit">
            SAVE
          </Button>
        </div>
      </form>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 15,
    overflowX: 'auto',
    textAlign: 'center',
    justifyContent: 'center',
    minWidth: 1000,
  },
  formEelement: {
    margin: 20,
  },
  button: {
    margin: 20,
  },
});

export default withStyles(styles)(FormComponent);
