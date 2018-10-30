import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import logo from '../../assets/images/tsh-chem.jpg';
import Button from '@material-ui/core/Button/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid/Grid';

class TableComponent extends React.Component {
  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    const { classes, data } = this.props;

    return (
      <Paper className={classes.root}>
        <img src={logo} alt="TSH Chemistry" className={classes.logo} />
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Name</CustomTableCell>
              <CustomTableCell numeric>Atomic Weight</CustomTableCell>
              <CustomTableCell numeric>Atomic Number</CustomTableCell>
              <CustomTableCell numeric>Group</CustomTableCell>
              <CustomTableCell numeric>Period</CustomTableCell>
              <CustomTableCell>Finder</CustomTableCell>
              <CustomTableCell>Actions</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => {
              return (
                <TableRow className={classes.row} key={row.id} link to={'home'}>
                  <CustomTableCell component="th" scope="row">
                    {row.name}
                  </CustomTableCell>
                  <CustomTableCell numeric>{row.atomicWeight}</CustomTableCell>
                  <CustomTableCell numeric>{row.atomicNumber}</CustomTableCell>
                  <CustomTableCell numeric>{row.group}</CustomTableCell>
                  <CustomTableCell numeric>{row.period}</CustomTableCell>
                  <CustomTableCell>{row.finder}</CustomTableCell>
                  <CustomTableCell>
                    <Link to={`element/edit/${row.id}`}>
                      <Button variant="contained" color="primary">
                        Edit
                      </Button>
                    </Link>
                  </CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
          <Grid item className={classes.add}>
              <Link to={`element/add`}>
                  <Button variant="contained" color="primary">
                      ADD NEW
                  </Button>
              </Link>
          </Grid>
      </Paper>
    );
  }
}

TableComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchList: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 15,
    overflowX: 'auto',
    textAlign: 'center',
    justifyContent: 'center',
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
  add: {
    marginBottom: 20,
      marginTop: 20,
  },
});

export default withStyles(styles)(TableComponent);
