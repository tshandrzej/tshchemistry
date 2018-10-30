import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import logo from '../../assets/images/tsh-chem.jpg';
import { EditFormContainer } from './edit/edit-form.container';
import { AddFormContainer } from './add/add-form.container';
import Grid from '@material-ui/core/Grid/Grid';

class ElementComponent extends React.Component {
  componentDidMount() {
    this.props.match.params.elementId && this.props.fetchElement(this.props.match.params.elementId);
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Grid container justify="center">
          <Grid item>
            <Paper className={classes.root}>
              <img src={logo} alt="TSH Chemistry" className={classes.logo} />
              {this.props.match.params.elementId ? <EditFormContainer /> : <AddFormContainer />}
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

ElementComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchElement: PropTypes.func.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 15,
    overflowX: 'auto',
    textAlign: 'center',
    justifyContent: 'center',
      minWidth: 1000,
  },
  table: {
    minWidth: 1000,
    margin: 'auto',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  logo: {
    textAlign: 'center',
    width: 200,
    height: 'auto',
  },
});

export default withStyles(styles)(ElementComponent);
